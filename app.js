
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting =document.querySelector("#greeting");

function onLoginBtnClick(event) {
    event,preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username",username);
    greeting.innerText =`Hello Q${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginButton.addEventListener("click",onLoginBtnClick);