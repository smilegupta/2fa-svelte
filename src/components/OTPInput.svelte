<script>
  import { otpCode, isSuccess, isError } from "../stores/otpStore.js";

  let otpInputs = Array(6).fill("");

  $: otpInputs = $otpCode;

  function handleInput(event, index) {
    const value = event.target.value.replace(/\D/g, "");
    otpCode.update((code) => {
      code[index] = value.slice(0, 1);
      return [...code];
    });

    isSuccess.set(false);
    isError.set(false);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  }

  function handleKeyDown(event, index) {
    if (event.key === "Backspace" && !event.target.value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  }
</script>

<div class="otp-inputs">
  {#each Array(6).fill(0) as _, index}
    <input
      id={`otp-${index}`}
      type="text"
      maxlength="1"
      inputmode="numeric"
      pattern="\d*"
      on:input={(event) => handleInput(event, index)}
      on:keydown={(event) => handleKeyDown(event, index)}
      bind:value={otpInputs[index]}
      aria-label={`OTP digit ${index + 1}`}
      disabled={$isSuccess}
    />
  {/each}
</div>

<style>
  .otp-inputs {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  input {
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 22px;
    border: 2px solid #d1e2f3;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus {
    border-color: #007bff;
  }
</style>
