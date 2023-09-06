export const checkValidData = (Email, Password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    Email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

export const validateName = (name) => {
  // Add your name validation logic here
  // Example: Name must be at least 3 characters long
  if (name.trim().length < 3) {
    return "Name must be at least 3 characters long.";
  }
  return null;
};
