
  function showText() {
    const textContainer = document.createElement("div");
    const input = document.createElement("input");
    input.className = "form-control";
    input.value = "Welcome to my...";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
      deleteElement(textContainer);
    };    
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    textContainer.appendChild(input);   
    textContainer.appendChild(deleteButton);
    document.getElementById("dynamicContent").appendChild(textContainer);
    deleteIcon.onclick = function() {
      deleteElement(textContainer);
    };
  }
//   debugger
  
  function showButton() {
    const btnContainer = document.createElement("div");

    const button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerText = "Click me";
    const deleteButton = document.createElement("button");
    const copyButton = document.createElement("button")
    deleteButton.onclick = function() {
      deleteElement(btnContainer);
    };
    copyButton.onclick = function() {
      copyElement();
    };
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    copyButton.innerHTML = `<i class="fa-regular fa-copy"></i>`
    btnContainer.appendChild(button);
    btnContainer.appendChild(deleteButton);
    btnContainer.appendChild(copyButton);
    document.getElementById("dynamicContent").appendChild(btnContainer);
  }
  
  function showDivider() {
    const dividerContainer = document.createElement("div");
    const divider = document.createElement("hr");
    const deleteButton = document.createElement("button");

    deleteButton.onclick = function() {
      deleteElement(dividerContainer);
    };
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    dividerContainer.appendChild(divider);
    dividerContainer.appendChild(deleteButton);
    document.getElementById("dynamicContent").appendChild(dividerContainer);
  }
  
  function showSpace() {
    const spaceContainer = document.createElement("div");
    const space = document.createElement("div");
    space.style.height = "50px";
    space.style.border ="1px solid black";
    const deleteButton = document.createElement("button");
    deleteButton.onclick = function() {
      deleteElement(spaceContainer);
    };
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    spaceContainer.appendChild(space);
    spaceContainer.appendChild(deleteButton);
    document.getElementById("dynamicContent").appendChild(spaceContainer);
  }
  
  function deleteElement(element) {
    element.remove();
  }
  function copyElement() {
    showButton();
  }
  
