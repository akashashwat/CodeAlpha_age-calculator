import { useState } from "react";

function AgeCalculator() {
  const [date, setDate] = useState("");
  const [years, setYears] = useState("-");
  const [months, setMonths] = useState("-");
  const [days, setDays] = useState("-");

  const yearMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  function leapchecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      yearMonths[1] = 29;
    } else {
      yearMonths[1] = 28;
    }
  }

  function handleAge() {
    const todayDate = new Date();

    const selectedDate = new Date(date);

    let birthYear = todayDate.getFullYear() - selectedDate.getFullYear();
    let birthMonth = todayDate.getMonth() - selectedDate.getMonth();
    let birthDate = todayDate.getDate() - selectedDate.getDate();

    if (birthDate < 0) {
      birthMonth--;
      const daysInLastMonth =
        yearMonths[(selectedDate.getMonth() - 1 + 12) % 12];
      birthDate = daysInLastMonth + birthDate;
    }

    if (birthMonth < 0) {
      birthYear--;
      birthMonth += 12;
    }

    setYears(birthYear);
    setMonths(birthMonth);
    setDays(birthDate);
  }

  return (
    <div className="calc-container">
      <div className="input-wrapper">
        <div className="header">
          <p>Age Calculator</p>
        </div>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
          format="dd/MM/yyyy"
        />
        <button onClick={handleAge}>Calculate</button>
      </div>
      <div className="output-wrapper">
        <div>
          <span>{years}</span>
          <p>Years</p>
        </div>
        <div>
          <span>{months}</span>
          <p>Months</p>
        </div>
        <div>
          <span>{days}</span>
          <p>Days</p>
        </div>
      </div>
      <a href="https://github.com/akashashwat">Made by Shubham Patel</a>
    </div>
  );
}

export default AgeCalculator;
