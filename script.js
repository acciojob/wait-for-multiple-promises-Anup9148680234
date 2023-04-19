//your JS code here. If required.
const tableBody = document.querySelector("#output");

const promises = [
  new Promise((resolve) => setTimeout(() => resolve("Promise 1"), Math.floor(Math.random() * 3000) + 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 2"), Math.floor(Math.random() * 3000) + 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Promise 3"), Math.floor(Math.random() * 3000) + 1000)),
];

const loadingRow = document.createElement("tr");
const loadingCell = document.createElement("td");
loadingCell.setAttribute("colspan", "2");
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
tableBody.appendChild(loadingRow);


const startTime = new Date();
Promise.all(promises)
  .then((results) => {
    tableBody.removeChild(loadingRow);
    results.forEach((result) => {
      const row = document.createElement("tr");
      const promiseCell = document.createElement("td");
      const timeCell = document.createElement("td");
      promiseCell.textContent = result;
      timeCell.textContent = (new Date() - startTime) / 1000; // Calculate time taken in seconds
      row.appendChild(promiseCell);
      row.appendChild(timeCell);
      tableBody.appendChild(row);
    });

    const totalTimeRow = document.createElement("tr");
    const totalTimeCell = document.createElement("td");
    const totalDuration = (new Date() - startTime) / 1000;
    totalTimeCell.setAttribute("colspan", "2");
    totalTimeCell.textContent = `Total: ${totalDuration.toFixed(3)}s`;
    totalTimeRow.appendChild(totalTimeCell);
    tableBody.appendChild(totalTimeRow);
  });
