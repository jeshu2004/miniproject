// Simulated async fetch
document.addEventListener("DOMContentLoaded", () => {
    showLoading();
    setTimeout(() => {
        const data = [{
                name: "Sai Jaswanth",
                email: "jaswanthreddy0121@gmail.com"
            },
            {
                name: "Raja Mohan",
                email: "rajamohan657@gmail.com"
            },
            {
                name: "Chandra Shekar",
                email: "chandrashekar007@gmail.com"
            }
        ];
        if (data.length === 0) showEmpty();
        else populateTable(data);
    }, 1500);
});

// Populate table
function populateTable(data) {
    hideLoading();
    hideEmpty();
    const table = document.getElementById("data-table");
    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";

    data.forEach((item, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
      <td><input type="checkbox" onchange="rowSelectCallback(${i}, this.checked)"></td>
      <td>${item.name}</td>
      <td>${item.email}</td>
    `;
        tbody.appendChild(row);
    });

    table.classList.remove("hidden");
}

// Loading/Empty
function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}

function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
}

function showEmpty() {
    document.getElementById("empty").classList.remove("hidden");
}

function hideEmpty() {
    document.getElementById("empty").classList.add("hidden");
}

// Sort with toggle asc/desc
let sortDir = {};

function sortTable(colIndex) {
    const table = document.getElementById("data-table");
    const rows = Array.from(table.rows).slice(1);
    sortDir[colIndex] = sortDir[colIndex] === "asc" ? "desc" : "asc";

    rows.sort((a, b) => {
        const valA = a.cells[colIndex].innerText.toLowerCase();
        const valB = b.cells[colIndex].innerText.toLowerCase();
        return sortDir[colIndex] === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

    const tbody = document.getElementById("table-body");
    tbody.innerHTML = "";
    rows.forEach(r => tbody.appendChild(r));
}

// Select all
function toggleSelectAll(source) {
    const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");
    checkboxes.forEach(cb => cb.checked = source.checked);
    rowSelectCallback("all", source.checked);
}

// Row select callback
function rowSelectCallback(index, selected) {
    console.log("Row selection:", index, "Selected:", selected);
}

// Input clear
function clearInput(id) {
    const input = document.getElementById(id);
    input.value = "";
    input.dispatchEvent(new Event("input"));
    document.querySelector(".clear-btn").classList.add("hidden");
}

// Password toggle
function togglePassword() {
    const input = document.getElementById("password");
    const btn = document.querySelector(".toggle-btn");
    if (input.type === "password") {
        input.type = "text";
        btn.textContent = "Hide";
    } else {
        input.type = "password";
        btn.textContent = "Show";
    }
}

// Dark mode toggle
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Show clear button when typing
document.addEventListener("input", e => {
    if (e.target.id === "username") {
        document.querySelector(".clear-btn").classList.toggle("hidden", e.target.value === "");
    }
});
