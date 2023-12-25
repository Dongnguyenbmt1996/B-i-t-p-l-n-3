"use strict";

//Hàm lấy dữ liệu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

//Hàm lưu dữ liệu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
//lấy dữ liệu userArr từ localstorage
//const users = getFromStorage("userArr") ? getFromStorage("userArr") : [];
//chuyển đổi về dạng class instance
//const userArr = users.map((user) => parseUser(user));

// lấy dữ liệu usser đang đăng nhập
let userActive = getFromStorage("userActive")
  ? parseUser(getFromStorage("userActive"))
  : null;

//hàm chuyển từ js object sang class intance
function parseUser(userData) {
  const user = new User(
    userData.firstname,
    userData.lastname,
    userData.username,
    userData.password,
    userData.pageSize,
    userData.category
  );

  return user;
}
