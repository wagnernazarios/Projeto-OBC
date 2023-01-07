
const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();

  const ageInYear = today.diff(birthday, "year");
  const nextBirthday = birthday.add(ageInYear + 1, "year");
  const daysToNextBirthday = nextBirthday.diff(today, "day");

  console.log(`Idade: ${ageInYear}`);
  console.log(`O proximo aniversario é: ${nextBirthday.format("DD/MM/YYYY")}`);
  console.log(
    `Dias até completar ${ageInYear + 1} anos: ${daysToNextBirthday} dias`
  );
}

birthday("1993-10-17");
