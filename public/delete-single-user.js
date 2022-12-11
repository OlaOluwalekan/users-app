async function deleteUser(user) {
  try {
    msgDOM.textContent = "deleting...";
    await axios.delete(`${link}/${user.id}`);
    usersListDOM.innerHTML = "";
    getAllUsers();
  } catch (error) {
    console.log(error);
  }
}

let userID;

async function getUser(user) {
  console.log(user.id);
  try {
    // const { data } = await axios.get(`${link}/${user.id}`);
    const {
      data: { data },
    } = await axios.get(`${link}/${user.id}`);
    nameDOM.value = data.name;
    emailDOM.value = data.email;
    pinDOM.value = data.pin;
    submitDOM.textContent = "Update";
    emailDOM.focus();
    userID = user.id;
  } catch (error) {
    console.log(error);
  }
}
