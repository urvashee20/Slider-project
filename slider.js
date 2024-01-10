const slider = document.getElementById("slider");
const displayValue = document.getElementById("displayValue");
const tableContainer = document.getElementById("tableContainer");
const rangeNames = {
  1: "Minimum",
  25: "Quarter",
  50: "Halfway",
  75: "Three Quarters",
  100: "Maximum",
};

let selectedValues = [];

slider.addEventListener("dblclick", () => {
  const value = parseInt(slider.value);
  let rangeName = "";

  if (value <= 25) {
    rangeName = "Range 1-25";
  } else if (value <= 50) {
    rangeName = "Range 26-50";
  } else if (value <= 75) {
    rangeName = "Range 51-75";
  } else {
    rangeName = "Range 76-100";
  }

  let pointName = prompt("Enter a name for this point:");
  while (selectedValues.some((val) => val.name === pointName)) {
    pointName = prompt(
      "This name has already been taken. Please enter a different name:"
    );
  }

  const selectedValue = { value, rangeName, name: pointName };
  selectedValues.push(selectedValue);
  displayValue.textContent = `${value}: ${rangeName}`;
});

function generateTable() {
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Point Name</th>
        <th>Value</th>
        <th>Range</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      <!-- Table content will be added here dynamically -->
    </tbody>
  `;

  const tableBody = table.querySelector("#tableBody");
  selectedValues.forEach((value, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${value.name}</td>
      <td>${value.value}</td>
      <td>${value.rangeName}</td>
    `;
    tableBody.appendChild(row);
  });

  return table;
}

function submitValues() {
  const table = generateTable();
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}
