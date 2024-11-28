import { writable, derived } from "svelte/store";

export const otpCode = writable(Array(6).fill(""));
export const isSuccess = writable(false);
export const isError = writable(false);

export const digitsLeft = derived(
  otpCode,
  ($otpCode) => 6 - $otpCode.filter((digit) => digit !== "").length
);
