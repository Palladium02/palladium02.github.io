function getAge(birthYear, birthMonth) {
  let date = new Date();
  let currentYear = date.getFullYear();
  let month = date.getMonth();
  return (month >= birthMonth ? currentYear - birthYear : currentYear - birthYear - 1);
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#age').textContent = `${getAge(2002, 9)}y.o.`;
});