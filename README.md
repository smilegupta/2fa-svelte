# # Two-Factor Authentication (2FA) OTP Component

This is a production-ready **Two-Factor Authentication (2FA)** component built using Svelte. It includes OTP input fields and provides real-time validation for user input. The component supports success and error states, resets dynamically when inputs are changed, and ensures input security by accepting only numeric values.

## Features

- **6-Digit OTP Input**: A visually appealing, responsive OTP input component.
- **Real-Time Validation**: Dynamically checks for correct OTP input and updates the UI.
- **State Management**: Uses Svelte stores for success, error, and input state handling.
- **Input Restrictions**: Accepts only numeric input and automatically moves focus between fields.
- **Keyboard Accessibility**: Handles `Backspace` navigation and supports `Enter` key submission.
- **Dynamic Feedback**: Success and error states reset dynamically when the user modifies the OTP input.

## Folder Str
```
├── src
│   ├── App.svelte                 # Main entry component
│   ├── components
│   │   └── OTPInput.svelte        # Reusable OTP Input component
│   ├── services
│   │   └── otpService.js          # Service for OTP validation logic
│   ├── stores
│   │   └── otpStore.js            # Svelte stores for managing state
```

## Screenshot
| View| SS |
| ------------- |:-------------:|
| Empty| <img width="709" alt="image" src="https://github.com/user-attachments/assets/00b7e920-ef40-4b86-b620-58d6f8ecc4f4">    |
| Filled      | <img width="561" alt="image" src="https://github.com/user-attachments/assets/a7e78b43-18bc-4441-8e9a-24f2f4c51fe1"> |
| Success      | <img width="591" alt="image" src="https://github.com/user-attachments/assets/468ca6cb-2f82-4cb0-91fc-57ba229f7d57"> |
| Error      | <img width="531" alt="image" src="https://github.com/user-attachments/assets/60fa02eb-54f7-4ff7-8bd6-521fd33ef763"> |

