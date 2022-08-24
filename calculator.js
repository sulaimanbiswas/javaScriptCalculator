let result = document.getElementById("input-text");

let calculate = (number) => {
  result.value += number;

  console.log(result.value);
};
let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value = "Error";
  }
};

function clr() {
  result.value = "";
}

function del( ) {
  result.value = result.value.slice(0, -1);
}
