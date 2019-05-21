// Stringified JSON object that holds initial messages
var jsonString = '{"messages":["Welcome to Post It!","You can type a message and post it to the website.","You can also clear all previous posts by clicking on Clear."]}'
// Id for new message in list (for remove function)
var msgId = 1;

function start() {
  var json = JSON.parse(jsonString);
  var initialList = json.messages;

  var length = initialList.length;
  for (var i = 0; i < length; i++) {
    // Create list element
    var listElement = document.createElement('li');
    listElement.setAttribute("id", msgId);

    // Create new div and add new paragraph
    var msgDiv = document.createElement('div');
    var paraElement = document.createElement('p');
    paraElement.innerHTML = initialList[i];

    // Add remove button
    var remElement = document.createElement('button');
    remElement.innerHTML = "Remove";
    remElement.setAttribute("onclick", "removeMsg(" + listElement.id + ")");

    msgDiv.appendChild(paraElement);
    msgDiv.appendChild(remElement);
    listElement.appendChild(msgDiv);
    list.appendChild(listElement);

    msgId++;
  }
}

function post() {
  var newMsg = document.getElementById("text-box").value;
  if (newMsg) {
    // Create list element
    var listElement = document.createElement('li');
    listElement.setAttribute("id", msgId);

    // Create new div and add new paragraph
    var msgDiv = document.createElement('div');
    var paraElement = document.createElement('p');
    paraElement.innerHTML = newMsg;

    // Add remove button
    var remElement = document.createElement('button');
    remElement.innerHTML = "Remove";
    remElement.setAttribute("onclick", "removeMsg(" + listElement.id + ")");

    msgDiv.appendChild(paraElement);
    msgDiv.appendChild(remElement);
    listElement.appendChild(msgDiv);
    list.appendChild(listElement);

    // Clear text box
    document.getElementById("text-box").value = '';

    msgId++;
  }
}

function clearAll() {
  list.innerHTML = '';
}

function removeMsg(message) {
  var div = document.getElementById(message);
  list.removeChild(div);
}
