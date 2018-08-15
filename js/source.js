var arr = [];
var data = new Date();
var getYear = data.getFullYear();
var getMonth = data.getMonth()+1;
var getDay = data.getDate();

console.log(getYear +':'+ getMonth +':'+ getDay);


// year / days
function year() {

  var val = document.getElementById('year').value;

if (val < 1900 || val > 2017) {

  console.log('not a year');
  return;

} else {

  arr.push((getYear - val) * 365);
}
};

// month

function month() {
  var month =document.getElementById('month').value;

  if (month <=0 || month > 12) {
  console.log('not a month');
  return;

} else {
  arr.push((getMonth - month) * 31);
}
};


function days() {
  var day =document.getElementById('day').value;

  if (day <=0 || day > 31) {
    console.log("Not a day");
    return;

  }else {
    arr.push(day);
  }
};
function result() {

  var result = arr[0]+arr[1]+arr[2];

  console.log('You alive: ' + data.getDate() - result);
}
