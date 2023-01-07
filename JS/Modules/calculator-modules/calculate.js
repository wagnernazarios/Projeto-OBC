export default function calculate() {
  const resultInput = document.getElementById("result");
  const input = document.querySelector("input");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  input.value = result;
  resultInput.value = result;
  resultInput.classList.remove("error");
}
