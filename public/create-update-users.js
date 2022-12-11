const createUser = async () => {
  const name = nameDOM.value;
  const email = emailDOM.value;
  const pin = pinDOM.value;

  try {
    await axios.post(link, {
      email: email,
      name: name,
      pin: pin,
    });
    usersListDOM.innerHTML = "";
    getAllUsers();
    formAlertDOM.style.display = "flex";
    formAlertDOM.textContent = "user added successfully";
    formAlertDOM.style.color = "green";
    nameDOM.value = "";
    emailDOM.value = "";
    pinDOM.value = "";
  } catch (error) {
    formAlertDOM.style.display = "flex";
    if (email == "") {
      formAlertDOM.textContent = "email is required";
      formAlertDOM.style.color = "red";
    } else if (name == "") {
      formAlertDOM.textContent = "name is required";
      formAlertDOM.style.color = "red";
    }
  }
  setTimeout(() => {
    formAlertDOM.style.display = "none";
  }, 3000);
};

const updateUser = async () => {
  console.log(userID);
  const name = nameDOM.value;
  const email = emailDOM.value;
  const pin = pinDOM.value;

  try {
    await axios.patch(`${link}/${userID}`, {
      email: email,
      name: name,
      pin: pin,
    });
    usersListDOM.innerHTML = "";
    getAllUsers();
    formAlertDOM.style.display = "flex";
    formAlertDOM.textContent = "user updated successfully";
    formAlertDOM.style.color = "green";
    nameDOM.value = "";
    emailDOM.value = "";
    pinDOM.value = "";
  } catch (error) {
    formAlertDOM.style.display = "flex";
    if (email == "") {
      formAlertDOM.textContent = "email is required";
      formAlertDOM.style.color = "red";
    } else if (name == "") {
      formAlertDOM.textContent = "name is required";
      formAlertDOM.style.color = "red";
    }
  }
  submitDOM.textContent = "Submit";
  setTimeout(() => {
    formAlertDOM.style.display = "none";
  }, 3000);
};
