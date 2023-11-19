const wrapper = document.getElementById("wrapper");
const signupbutton = document.getElementById("signupbutton");
const closemodal = document.getElementById("closemodal");

const name_ = document.querySelector('input[name="name"]');
const nickname = document.querySelector('input[name="nickname"]');
const email = document.querySelector('input[name="email"]');
const PW = document.querySelector('input[name="PW"]');
const rePW = document.querySelector('input[name="rePW"]');

signupbutton.onclick = function () {
  wrapper.style.display = "inline";
  wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
};

closemodal.onclick = function () {
  wrapper.style.display = "none";
  wrapper.style.backgroundColor = "transparent";
};
var allcheck = [0, 0, 0, 0, 0];
var checkvalue = (element, a, indexnum) => {
  if (element) {
    document.getElementById(a + "correct").style.display = "inline";
    document.getElementById(a + "error").style.display = "none";
    allcheck[indexnum] = 1;
  } else {
    document.getElementById(a + "error").style.display = "inline";
    document.getElementById(a + "correct").style.display = "none";
    allcheck[indexnum] = 0;
  }
  alltrue(allcheck);
};

var alltrue = (arr) => {
  for (var i = 0; i < 5; i++) {
    if (arr[i] === 0) {
      signupbutton.style.cursor = "default";
      signupbutton.style.backgroundColor = "#2c2c2f3f";
      signupbutton.disabled = true;
      return false;
    }
  }
  signupbutton.style.cursor = "pointer";
  signupbutton.style.backgroundColor = "#2c2c2f";
  signupbutton.disabled = false;
  return true;
};

name_.addEventListener("input", () => {
  checkvalue(name_.value.length, "name", 0);
});
name_.addEventListener("focus", () => {
  checkvalue(name_.value.length, "name", 0);
});
nickname.addEventListener("input", () => {
  checkvalue(
    2 <= nickname.value.length && nickname.value.length <= 5,
    "nickname",
    1
  );
});
nickname.addEventListener("focus", () => {
  checkvalue(
    2 <= nickname.value.length && nickname.value.length <= 5,
    "nickname",
    1
  );
});
let regex_email = new RegExp(
  "[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+@[a-zA-Z0-9가-힣ㄱ-ㅎㅏ-ㅣ]+.com$"
);
email.addEventListener("input", () => {
  checkvalue(regex_email.test(email.value), "email", 2);
});
email.addEventListener("focus", () => {
  checkvalue(regex_email.test(email.value), "email", 2);
});

let regex_PW = /^[a-zA-Z0-9#?!@$%^&*-]+$/;
PW.addEventListener("input", () => {
  checkvalue(regex_PW.test(PW.value), "PW", 3);
  checkvalue(PW.value === rePW.value, "rePW", 4);
});
PW.addEventListener("focus", () => {
  checkvalue(regex_PW.test(PW.value), "PW", 3);
  checkvalue(PW.value === rePW.value, "rePW", 4);
});
rePW.addEventListener("input", () => {
  checkvalue(PW.value === rePW.value, "rePW", 4);
});
rePW.addEventListener("focus", () => {
  checkvalue(PW.value === rePW.value, "rePW", 4);
});
