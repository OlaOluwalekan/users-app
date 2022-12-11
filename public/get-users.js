const detailsFormDOM = document.querySelector(".details-form");
const emailDOM = document.querySelector("#email");
const nameDOM = document.querySelector("#name");
const pinDOM = document.querySelector("#pin");
const formAlertDOM = document.querySelector(".form-alert");
const msgDOM = document.querySelector(".msg");
const usersListDOM = document.querySelector(".users-list");
const submitDOM = document.querySelector(".submit");

const link = "http://localhost:5000/users";

const getAllUsers = async () => {
  msgDOM.style.visibility = "visible";
  const {
    data: { users },
  } = await axios.get(link);
  console.log(users);

  if (users.length < 1) {
    usersListDOM.innerHTML = `<h3>No users yet. Fill the form above to create one</h3>`;
  } else {
    users.forEach((user) => {
      const userDiv = document.createElement("section");
      userDiv.classList.add("user-div");
      const userDetails = document.createElement("div");
      const userActions = document.createElement("div");

      const userName = document.createElement("p");
      userName.textContent = user.name;
      userName.classList.add("user-name");
      const userEmail = document.createElement("p");
      userEmail.textContent = user.email;
      userEmail.classList.add("user-email");
      const userPIN = document.createElement("p");
      userPIN.textContent = user.pin;
      userPIN.classList.add("user-pin");

      const deleteSpan = document.createElement("span");
      deleteSpan.innerHTML = `<i class="fas fa-trash-can"></i>`;
      deleteSpan.classList.add("delete-span");
      const editSpan = document.createElement("span");
      editSpan.innerHTML = `<i class="fas fa-edit"></i>`;
      editSpan.classList.add("edit-span");
      deleteSpan.id = user._id;
      editSpan.id = user._id;

      deleteSpan.setAttribute("onclick", "deleteUser(this)");
      editSpan.setAttribute("onclick", "getUser(this)");

      userDetails.appendChild(userName);
      userDetails.appendChild(userEmail);
      userDetails.appendChild(userPIN);

      userActions.appendChild(deleteSpan);
      userActions.appendChild(editSpan);

      userDiv.appendChild(userDetails);
      userDiv.appendChild(userActions);

      usersListDOM.appendChild(userDiv);
    });
  }

  msgDOM.style.visibility = "hidden";
};
