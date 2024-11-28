# # Two-Factor Authentication (2FA) OTP Component

This is a production-ready **Two-Factor Authentication (2FA)** component built using Svelte. It includes OTP input fields and provides real-time validation for user input. The component supports success and error states, resets dynamically when inputs are changed, and ensures input security by accepting only numeric values.

## Features

- **6-Digit OTP Input**: A visually appealing, responsive OTP input component.
- **Real-Time Validation**: Dynamically checks for correct OTP input and updates the UI.
- **State Management**: Uses Svelte stores for success, error, and input state handling.
- **Input Restrictions**: Accepts only numeric input and automatically moves focus between fields.
- **Keyboard Accessibility**: Handles `Backspace` navigation and supports `Enter` key submission.
- **Dynamic Feedback**: Success and error states reset dynamically when the user modifies the OTP input.

## Demo

The 2FA component prompts the user to input a 6-digit OTP. After all digits are entered, users can press the **Submit** button or the **Enter** key. Upon success, the UI updates with a success message and disables further input.