getAllUsers();

detailsFormDOM.onsubmit = async (e) => {
  e.preventDefault();
  if (submitDOM.textContent == "Submit") {
    createUser();
  } else {
    updateUser();
  }
};
