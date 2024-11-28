import { isSuccess, isError } from "../stores/otpStore.js";

const validOTP = "000007";

export function validateOTP(enteredOTP) {
  if (enteredOTP === validOTP) {
    isSuccess.set(true);
    isError.set(false);
  } else {
    isSuccess.set(false);
    isError.set(true);
  }
}
