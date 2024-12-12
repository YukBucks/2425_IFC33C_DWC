const tbody = document.querySelector("#score-table tbody");

function borrarPartitura(index) {
  if (confirm("Està segur que vol esborrar l'element " + (index + 1) + "?")) {
    alert("Element esborrat!");
  } else {
    alert("Has cancel·lat l'acció");
  }
}

// Funció per afegir una fila a la taula
function addRow(score, index) {
  const row = document.createElement("tr");

  // Crear les cel·les (td)
  const titleCell = document.createElement("td");
  titleCell.textContent = score.title;

  const languageCell = document.createElement("td");
  languageCell.textContent = score.language;

  const actionsCell = document.createElement("td");
  actionsCell.classList.add("actions");

  // Crear els botons d'acció
  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-edit");

  const iconEdit = document.createElement("i");
  iconEdit.classList.add("fas", "fa-edit");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-delete");
  deleteButton.setAttribute("onclick", `borrarPartitura(${index})`);

  const iconDelete = document.createElement("i");
  iconDelete.classList.add("fas", "fa-trash");

  // Afegir botons a la cel·la d'accions
  editButton.appendChild(iconEdit);
  editButton.appendChild(document.createTextNode(" Editar"));
  actionsCell.appendChild(editButton);
  deleteButton.appendChild(iconDelete);
  deleteButton.appendChild(document.createTextNode(" Esborrar"));
  actionsCell.appendChild(deleteButton);

  // Afegir cel·les a la fila
  row.appendChild(titleCell);
  row.appendChild(languageCell);
  row.appendChild(actionsCell);

  // Afegir la fila al cos de la taula
  tbody.appendChild(row);
}

// Emplenar la taula amb les dades
scores.forEach((score, index) => {
  addRow(score, index);
});

document
  .getElementById("openLogin")
  .setAttribute("onclick", "openLoginWindow()");

function openLoginWindow() {
  const width = 600;
  const height = 400;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const left = (screenWidth - width) / 2;
  const top = (screenHeight - height) / 2;
  window.open(
    "login.html",
    "Score Finder",
    `width=${width},height=${height},top=${top},left=${left}`
  );
}
