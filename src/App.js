import React from 'react';
import './style.css';

let schedule = [];
// let holidays = {
//   NewYears: new Date('January 01, 2023'),
//   Easter: new Date('April 09, 2023'),
//   MemorialDay: new Date('May 29, 2023'),
//   IndependenceDay: new Date('July 04, 2023'),
//   LaborDay: new Date('September 04, 2023'),
//   Thanksgiving: new Date('November 23, 2023'),
//   Christmas: new Date('December 25, 2023'),
// };
const HOLIDAY_DATES = [
  new Date('2023-01-01'),
  new Date('2023-04-09'),
  new Date('2023-05-29'),
  new Date('2023-07-04'),
  new Date('2023-09-04'),
  new Date('2023-11-23'),
  new Date('2023-12-25'),
];

let developerWeeks = {
  1: 7,
  2: 7,
  3: 7,
  4: 7,
  5: 7,
  6: 7,
  7: 7,
};

// only createSchedule on button click or something?
function createSchedule(holidays) {
  // get starting wednesday of year new Date('January 04, 2023'),
  let week;

  for (let i = 0; i < 52; i++) {
    if (schedule.length > 0) {
      week = {
        developer: chooseDeveloper(i, schedule),
        startDate: schedule[i - 1].endDate,
        endDate: schedule[i - 1].endDate + 7,
        holiday: isHoliday(schedule[i - 1].endDate),
        highlighted: false,
      };
    } else {
      week = {
        developer: chooseDeveloper(i, schedule),
        startDate: new Date('January 4, 2023'),
        endDate: new Date('January 11, 2023'),
        holiday: true,
        highlighted: false,
      };
    }
    schedule.push(week);
  }

  // increment datetime of that day by 7

  // if datetime matches holiday datetime?
  // mark developer as having holiday they do not get another until all have one
}

function chooseDeveloper(weekPosition, schedule) {
  let developer = Math.random(1, 7);
  if (schedule.length === 0) {
    developer = Math.random(1, 7);
  } else {
    while (
      schedule[weekPosition - 1].developer != developer &&
      developerWeeks.developer > 0
    ) {
      developer = Math.random(1, 7);
    }
  }
  developerWeeks.developer--;
  return developer;
}

function isHoliday(startDate) {
  HOLIDAY_DATES.forEach(
    (holiday) =>
      function () {
        if (holiday > startDate && holiday < startDate.addDays(7)) return true;
      }
  );
  return false;
}

function currentWeek() {
  //loop through/map through schedule
  // if(schedule[i].startDate + 1pm? < dateTimeNow && dateTimeNow > schedule[i].endDate + 1pm?)
  // week.highlighted = true
  // else {week.highlighted = false}
}

createSchedule();

function Week(props) {
  return (
    <li className="{props.highlighted}">
      {props.developer}, {props.startDate}, {props.endDate}, {props.holiday}
    </li>
  );
}
export default function App() {
  return (
    <div>
      <h1>Schedule</h1>
      <ul>
        {schedule.map((week) => (
          <Week
            developer={week.developer}
            startDate={week.startDate}
            endDate={week.endDate}
            holiday={week.holiday}
            highlighted={week.highlighted}
          />
        ))}
      </ul>
    </div>
  );
}
