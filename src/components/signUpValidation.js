const Validation = (values) => {
  let error = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  if (values.name === "") {
    error.name = "Name Should not be empty";
  } else {
    error.name = "";
  }

  if (values.email === "") {
    error.email = "Email Should not be empty";
  } else if (!emailPattern.test(values.email)) {
    error.email = "Email dont't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password Should not be empty";
  }
  // else if (!passwordPattern.test(values.password)) {
  //   error.password = "Password dont't match";
  // }
  else {
    error.password = "";
  }
  return error;
};

export default Validation;
