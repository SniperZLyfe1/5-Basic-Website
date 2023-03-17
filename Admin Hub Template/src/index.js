import { orders } from "./recent_orders";
import { staff } from "./staff";

const toggle_expand = document.querySelector(".toggle-more");
const titleHeader = document.querySelector(".header-title");
const sidebarItems = document.querySelectorAll(".items");
const sidebar = document.querySelector(".sidebar-navigation-bar");
const ordersContainer = document.querySelector(".orders-detail");
const toggleOrdersInput = document.querySelector(".toggle-orders-input");
const ordersInput = document.querySelector(".orders-options-inner input");
const teamContainer = document.querySelector(".team-container");

toggleOrdersInput.addEventListener("click", () => {
  ordersInput.value = "";
  showOrders();
  ordersInput.classList.toggle("hidden");
});

toggle_expand.addEventListener("click", () => {
  titleHeader.classList.toggle("hidden");
  sidebarItems.forEach((v) => v.querySelector("h1").classList.toggle("hidden"));
  sidebar.classList.toggle("notActive");
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    removeActives();
    const getName = item.querySelector("h1").innerHTML.toLowerCase();
    if (document.getElementById(getName)) {
      document.getElementById(getName).classList.remove("hidden");
      item.classList.add("getActive");
    } else {
      document.querySelector(".notify").classList.remove("hidden");
      setTimeout(
        () => document.querySelector(".notify").classList.add("hidden"),
        1000
      );
    }
  });
});

function removeActives() {
  document
    .querySelectorAll(".sections")
    .forEach((v) => v.classList.add("hidden"));
  sidebarItems.forEach((item) => item.classList.remove("getActive"));
}

function showOrders() {
  ordersContainer.innerHTML = "";
  orders.forEach((order) => {
    const modal = `
      <div class="orders-data">
        <div class="users-data">
          <img src="${order.imgSrc}" alt="" />
          <p>${order.fullName}</p>
        </div>
        <div class="date-data">
          <p>${order.date}</p>
        </div>
        <div class="status-data">
          <button class="${order.status}">${order.status}</button>
        </div>
      </div>    
    `;

    ordersContainer.insertAdjacentHTML("afterbegin", modal);
  });
}

showOrders();

ordersInput.addEventListener("input", (e) => {
  const value = e.target.value;
  if (!value) {
    return showOrders();
  }
  ordersContainer.innerHTML = "";
  orders.forEach((orderName) => {
    if (orderName.fullName.toLowerCase().includes(value.toLowerCase())) {
      const modal = `
        <div class="orders-data">
          <div class="users-data">
            <img src="${orderName.imgSrc}" alt="" />
            <p>${orderName.fullName}</p>
          </div>
          <div class="date-data">
            <p>${orderName.date}</p>
          </div>
          <div class="status-data">
            <button class="${orderName.status}">${orderName.status}</button>
          </div>
        </div>    
      `;
      ordersContainer.innerHTML += modal;
    }
  });
});

document.querySelector(".toggle-todo-input").addEventListener("click", () => {
  document.querySelector(".todo-input").value = "";
  document.querySelector(".todo-input").classList.toggle("hidden");
});

document.querySelector(".todo-input").addEventListener("keyup", (e) => {
  const value = e.target.value;
  let toggleTodoOptions = document.querySelectorAll(".toggle-todo-option");
  let toggleTodoBtn = document.querySelectorAll(".completed-todo");
  let deleteTodoBtn = document.querySelectorAll(".delete-todo");

  if (e.key === "Enter" && value) {
    const modal = `
      <div class="todo">
        <span class="todo-status"></span>
        <h2>${value}</h2>
        <div class="todo-dropdown-menu">
          <i
            class="fa-solid fa-ellipsis-vertical toggle-todo-option"
          ></i>
          <div class="todo-dropdown-data hidden">
            <small class="completed-todo">Toggle</small>
            <small class="delete-todo">Delete</small>
          </div>
        </div>
      </div>
    `;

    document.querySelector(".todos-detail").innerHTML += modal;
    e.target.value = "";
    document.querySelector(".todo-input").classList.toggle("hidden");

    toggleTodoOptions = document.querySelectorAll(".toggle-todo-option");
    toggleTodoBtn = document.querySelectorAll(".completed-todo");
    deleteTodoBtn = document.querySelectorAll(".delete-todo");
  }

  toggleTodoOptions.forEach((todo) => {
    todo.addEventListener("click", () => {
      const todoEl = todo.closest(".todo").querySelector(".todo-dropdown-data");
      todoEl.classList.toggle("hidden");
    });
  });

  toggleTodoBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".todo-dropdown-data").classList.add("hidden");
      btn
        .closest(".todo")
        .querySelector(".todo-status")
        .classList.toggle("completed");
    });
  });

  deleteTodoBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".todo").remove();
    });
  });
});

document.querySelector(".toggle-notification").addEventListener("click", () => {
  document.querySelector(".notification-drop-down").classList.toggle("hidden");
});

staff.forEach((team) => {
  const modal = `
    <div class="staff-container">
      <img src="${team.img}" alt="" />
      <h2>${team.name}</h2>
      <small class="${team.permission}">${team.title}</small>
    </div> 
  `;

  teamContainer.innerHTML += modal;
});

document.querySelectorAll(".staff-container").forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const modal = `
      <img src="${staff[idx].img}" alt="" />
      <h1>${staff[idx].name}</h1>
      <small class="${staff[idx].permission}">${staff[idx].title}</small>
      <p>${staff[idx].bio}</p>
      <h1>Socials:</h1>
      <small
        >Github:
        <span style="font-weight: normal;"
          >${staff[idx].github}</span
        ></small
      >
      <small
        >LinkedIn:
        <span style="font-weight: normal;"
          >${staff[idx].linkedin}</span
        ></small
      >
      <small
        >Website:
        <span style="font-weight: normal;"
          >${staff[idx].website}</span
        ></small
      >
    `;

    document.querySelector(".staff-modal").innerHTML = modal;
    document.querySelector(".staff-modal").classList.remove("hidden");
    document
      .querySelector(".blackground-staff-modal")
      .classList.remove("hidden");
  });
});

document
  .querySelector(".blackground-staff-modal")
  .addEventListener("click", () => {
    document.querySelector(".staff-modal").classList.add("hidden");
    document.querySelector(".blackground-staff-modal").classList.add("hidden");
  });
