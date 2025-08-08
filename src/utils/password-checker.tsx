"use client";

// Define an interface for the validation result
interface PassProps {
  Validity: boolean;
  Errors: string[];
}

export function Checkpassword(password: string): PassProps {
  const errors: string[] = [];

  // Rule 1: Minimum length of 8 characters
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  // Rule 2: At least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  // Rule 3: At least one lowercase letter
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }

  // Rule 4: At least one number
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number.");
  }

  // Rule 5: At least one special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push("Password must contain at least one special character.");
  }

  return {
    Validity: errors.length === 0,
    Errors: errors,
  };
}
