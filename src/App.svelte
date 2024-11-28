<script>
  import OTPInput from "./components/OTPInput.svelte";
  import {
    otpCode,
    isSuccess,
    isError,
    digitsLeft,
  } from "./stores/otpStore.js";
  import { validateOTP } from "./services/otpService.js";

  function handleSubmit() {
    const enteredOTP = $otpCode.join("");
    validateOTP(enteredOTP);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter" && $digitsLeft === 0 && !$isSuccess) {
      handleSubmit();
    }
  }

  // Reset success/error state if OTP changes
  $: {
    if ($digitsLeft > 0) {
      isSuccess.set(false);
      isError.set(false);
    }
  }
</script>

<div class="wrapper">
  <div
    class="auth-container"
    style="--bg-color: {$isSuccess
      ? '#eafaf0'
      : $isError
        ? '#fdecea'
        : '#f8faff'};"
    on:keydown={handleKeyPress}
  >
    <h1>Easy peasy</h1>
    <p>Enter the 6-digit code from your two-factor authenticator app.</p>
    <OTPInput />

    <div class="cta-section">
      <button
        class="cta-btn"
        on:click={handleSubmit}
        disabled={$digitsLeft !== 0}
        style="--btn-color: {$isSuccess
          ? '#28A745'
          : $isError
            ? '#E53E3E'
            : '#007BFF'};"
      >
        {$isSuccess
          ? "Success!"
          : $digitsLeft > 0
            ? `${$digitsLeft} digit${$digitsLeft !== 1 ? "s" : ""} left`
            : "Let's go!"}
      </button>
    </div>
  </div>
</div>

<style>
  :root {
    --bg-color: #f8faff;
    --btn-color: #007bff;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .auth-container {
    max-width: 400px;
    margin: auto;
    text-align: center;
    padding: 40px;
    border-radius: 12px;
    background-color: var(--bg-color);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    font-family: "Inter", sans-serif;
    outline: none;
    transition: background-color 0.5s ease;
  }

  .cta-section {
    margin-top: 24px;
  }

  .cta-btn {
    width: 100%;
    padding: 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    background-color: var(--btn-color);
    transition: background-color 0.3s;
  }

  .cta-btn:disabled {
    background-color: #e2e8f0;
    cursor: not-allowed;
  }

  .cta-btn:hover:enabled {
    background-color: #0056b3;
  }
</style>
