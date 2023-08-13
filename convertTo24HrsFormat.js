const convertTo24HrsFormat = (time) => {
  const isAM = time.endsWith("AM");
  const isPM = time.endsWith("PM");

  let hrs = Number(time.match(/^(\d+)/)[1]);
  let mins = Number(time.match(/:(\d+)/)[1]);
  let x = time
    .match(/^(\d+):(\d+)/)
    .slice(1)
    .map(Number);
  console.log("---------------", x);
  if (isAM && hrs >= 12) hrs -= 12;
  if (isPM && hrs <= 12) hrs += 12;

  if (hrs < 10) hrs = "0" + hrs;
  if (mins < 10) mins = "0" + mins;
  // ! Or
  //   const hours = hrs.toString().padStart(2, "0");
  //   const minutes = mins.toString().padStart(2, "0");

  const timeend = hrs + ":" + mins;
  return timeend; //h:it
};

console.log(`Converted time: ${convertTo24HrsFormat("12:10AM")}`); // "00:10"
console.log(`Converted time: ${convertTo24HrsFormat("10:02PM")}`); // "22:02"
console.log(`Converted time: ${convertTo24HrsFormat("5:02AM")}`); // "05:02"
