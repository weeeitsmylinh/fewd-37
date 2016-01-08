
var submitButton = document.querySelector("button");
submitButton.addEventListener("click",submitChat);

function userNamePrompt(){

}

function submitChat(event){
  event.preventDefault();

  var userName = prompt ("Choose your username");

  var newChatMessage = document.querySelector("#message");
  var getUl = document.querySelector("#chat");
  var newChatBox = document.createElement("li");
  newChatBox.className = "message";
  var newChatContent = document.createElement("span")

  getUl.appendChild(newChatBox);
  newChatBox.appendChild(newChatContent);
  newChatBox.textContent = newChatMessage.value;

  var newUserNameBox = document.createElement("li");
  newUserNameBox.className = "newUserNameBox";
  newUserNameBox.textContent = userName;
  getUl.appendChild(newUserNameBox);


  newChatMessage.value = "";

  // var newUserNameBox = document.createElement("li");
  // newUserNameBox.setAttribute("class","newUserNameBox");


  // var newSpan = document.createElement("span");
  // newSpan.textContent = todos[i];
  // newCheckbox.setAttribute("type","checkbox");
  // getUl.appendChild(newLi);
  // newLi.appendChild(newCheckbox);
  // newLi.appendChild(newSpan);
  //
  // newChatMessage.value

}
