const validateData = (email, password) => {
  const emailCheck = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(
    email
  );
  const passwordCheck =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!emailCheck) {
    return "Email is not valid";
  }
  if (!passwordCheck) {
    return "Password is not valid";
  }
  return null;
};

export default validateData;
