let content = document.getElementById("content");
// content.innerHTML = "";
let cont = "";
cont = `<table>`;
cont += `<tr class="font-color-yellow font-size-small trHeader">`;
for (let i = 0; i < header.length; i++) {
  cont += ` <td class="tHeader">${header[i]}</td>`;
}

cont += `</tr>`;
for (let i = 0; i < data.length; i++) {
  cont += `<tr>`;
  for (let j = 0; j < 10; j++) {
    cont += ` <td>${data[i][j]}</td>`;
  }
  cont += `</tr>`;
}
cont += `</table>`;
// console.log(cont);

content.innerHTML = cont;

let timeNow = document.getElementById("timeNow");
let dateNow = document.getElementById("dateNow");
let dayRamadan = document.getElementById("dayRamadan");
let iftTime = document.getElementById("iftTime");
let iftTimeRest = document.getElementById("iftTimeRest");
let imsTime = document.getElementById("imsTime");
let imsTimeRest = document.getElementById("imsTimeRest");
let nextSal = document.getElementById("nextSal");
let timeNextSal = document.getElementById("timeNextSal");
let dashIft = document.getElementById("dashIft");
let dashIms = document.getElementById("dashIms");
let t = document.querySelectorAll(".t");
now = new Date();

function convertFormatDate(dateC) {
  let d = dateC.getDate() >= 10 ? "" + dateC.getDate() : "0" + dateC.getDate();
  let m =
    dateC.getMonth() >= 10
      ? "" + (dateC.getMonth() + 1)
      : "0" + (dateC.getMonth() + 1);
  let y =
    dateC.getFullYear() >= 10
      ? "" + dateC.getFullYear()
      : "0" + dateC.getFullYear();
  let fDate = d + "/" + m + "/" + y;
  return fDate;
}
// convertFormatDate(now);
function convToHMS(date) {
  let rst = date % 86400;
  let ho = rst / 3600;
  let rst2 = date % 3600;
  let min = rst2 / 60;
  let rst3 = date % 60;
  let sec = rst3;

  // let d = Math.floor(da) ;
  let h = Math.floor(ho);
  let m = Math.floor(min);
  let s = Math.floor(sec);

  // d = (d < 10) ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  return h + ":" + m + ":" + s;
}

function comparTime(time) {
  let t = time.split(":");
  let pt1;
  let pt2;
  let pt3;
  if (t[0][0] == "0") {
    pt1 = Number(t[0][1]);
  } else {
    pt1 = Number(t[0]);
  }

  if (t[1][0] == "0") {
    pt2 = Number(t[1][1]);
  } else {
    pt2 = Number(t[1]);
  }

  if (time.split(":").length == 3) {
    if (t[2][0] == "0") {
      pt3 = Number(t[2][1]);
    } else {
      pt3 = Number(t[2]);
    }
  } else {
    pt3 = 0;
  }

  // console.log(pt1);
  // console.log(pt2);
  // console.log(pt3);

  let tm = pt1 * 3600 + pt2 * 60 + pt3;

  let now = new Date();
  // let daymo = 20;
  // let dat = (daymo*86400) - ((now.getDate()*86400)+(now.getHours()*3600)+(now.getMinutes()*60)+(now.getSeconds()));

  let dat =
    tm - (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds());

  if (dat < 0) dat = 0;

  // let da = dat / 86400;

  let dateConv = convToHMS(dat);
  // let rst = dat % 86400;
  // let ho = rst / 3600;
  // let rst2 = dat % 3600;
  // let min = rst2 / 60;
  // let rst3 = dat % 60;
  // let sec = rst3;

  // // let d = Math.floor(da) ;
  // let h = Math.floor(ho);
  // let m = Math.floor(min);
  // let s = Math.floor(sec);

  // // d = (d < 10) ? "0" + d : d;
  // h = h < 10 ? "0" + h : h;
  // m = m < 10 ? "0" + m : m;
  // s = s < 10 ? "0" + s : s;

  return {
    formateTime: dateConv,
    convertTime: tm,
  };
  // h + ":" + m + ":" + s
}

setInterval(settim, 1000);

function settim() {
  let nw = new Date();
  let tm = nw.getHours() * 3600 + nw.getMinutes() * 60 + nw.getSeconds();

  now = new Date();

  let h = now.getHours() >= 10 ? "" + now.getHours() : "0" + now.getHours();
  let m =
    now.getMinutes() >= 10 ? "" + now.getMinutes() : "0" + now.getMinutes();
  let s =
    now.getSeconds() >= 10 ? "" + now.getSeconds() : "0" + now.getSeconds();

  let timeNowData = h + ":" + m + ":" + s;
  let dateNowData = convertFormatDate(now);
  timeNow.innerHTML = timeNowData;
  dateNow.innerHTML = dateNowData;
  let indexOfArray;

  for (let i = 0; i < data.length; i++) {
    if (data[i][8] == dateNowData) {
      indexOfArray = i;
      dayRamadan.innerHTML = data[i][9];
      iftTime.innerHTML = data[i][1];
      imsTime.innerHTML = data[i][7];

      let iftTimeRestConv = comparTime(data[i][1]);
      let imsTimeRestConv = comparTime(data[i][7]);
      // console.log(tm);
      // console.log(iftTimeRestConv.convertTime);
      // console.log(12 * 3600);
      // console.log(comparTime(tm));
      console.log(comparTime(data[i][7]).convertTime);
      console.log(tm);
      console.log("==================");
      if (tm < comparTime(data[i][7]).convertTime) {
        imsTimeRest.innerHTML = imsTimeRestConv.formateTime;
        iftTimeRest.remove();
        dashIft.remove();

        // imsTimeRest.className = "font-en font-color-yellow";
        console.log(0);
      } else {
        iftTimeRest.innerHTML = iftTimeRestConv.formateTime;
        imsTimeRest.remove();
        dashIms.remove();

        // imsTimeRest.className = "font-ar font-color-yellow";
        console.log(1);

      }
      // if (tm > comparTime(data[i][1]).convertTime) {
      //   iftTimeRest.innerHTML = iftTimeRestConv.formateTime;
      //   // iftTimeRest.className = "font-en font-color-yellow";
      // } else {
      //   iftTimeRest.innerHTML = "انتهى";
      //   // iftTimeRest.className = "font-ar font-color-yellow";
      // }
      for (let j = 0; j < t.length; j++) {
        if (j > 0) {
          t[j].innerHTML = data[i][j + 1];
        } else {
          t[j].innerHTML = data[i][j];
        }
      }
    }
  }

  function findNearestTime(bigArray, indexOfArray, selectedItems) {
    // الحصول على الوقت الحالي
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
    const currentTimeInSeconds =
      currentHours * 3600 + currentMinutes * 60 + currentSeconds;

    // تحديد الوقت الأقرب من المصفوفة الفرعية
    let minDifference = Infinity;
    let nearestTimeInSeconds;
    let indx;
    const timesArray = bigArray[indexOfArray];
    for (let j = 0; j < selectedItems.length; j++) {
      const index = selectedItems[j];
      const [hours, minutes] = timesArray[index].split(":").map(Number);
      const totalSeconds = hours * 3600 + minutes * 60;
      const differenceInSeconds = totalSeconds - currentTimeInSeconds;
      if (differenceInSeconds > 0 && differenceInSeconds < minDifference) {
        minDifference = differenceInSeconds;
        nearestTimeInSeconds = totalSeconds;
        indx = index;
      }
    }
    console.log("index: " + indx);

    // إذا كان لا يوجد وقت أكبر في المصفوفة التالية، اختر أصغر وقت في المصفوفة التالية
    if (!nearestTimeInSeconds && bigArray[indexOfArray + 1]) {
      const [hours, minutes] = bigArray[indexOfArray + 1][0]
        .split(":")
        .map(Number);
      nearestTimeInSeconds = hours * 3600 + minutes * 60;
      minDifference = 24 * 3600; // عدد كبير جداً يضمن أنه يتم اختيار أقرب وقت في المصفوفة التالية
    }

    // إعادة الفارق بوحدة الثواني
    return { minDif: minDifference, idx: indx };
  }

  // مثال على استخدام الدالة
  // const bigArray = [
  //   ["12:30", "13:45", "15:20", "16:10", "18:00", "19:30", "21:15"],
  //   ["10:30", "11:45", "13:20", "14:10", "16:00", "17:30", "19:15"],
  //   ["08:30", "09:45", "11:20", "12:10", "14:00", "15:30", "17:15"],
  //   ["06:30", "07:45", "09:20", "10:10", "12:00", "13:30", "15:15"],
  //   ["04:30", "05:45", "07:20", "08:10", "10:00", "11:30", "13:15"],
  // ];
  // const indexOfArray = 2; // اختيار عنصر من المصفوفة الكبيرة
  // let targetTime = h + ":" + m + ":" + s;

  // const targetTime = "22:00";
  // let timeConv = comparTime(timeNowData);
  // console.log("A: "+timeConv.comparTime);

  // تم تحديد وقت أكبر من جميع الأوقات المتاحة
  // const differenceInSeconds = findNearestTime(data, indexOfArray);
  const selectedItems = [0, 2, 3, 4, 6]; // تحديد العناصر التي تريد استخدامها
  const differenceInSeconds = findNearestTime(
    data,
    indexOfArray,
    selectedItems
  );
  // console.log("الفارق بوحدة الثواني:", differenceInSeconds);
  timeNextSal.innerHTML = convToHMS(differenceInSeconds.minDif);
  nextSal.innerHTML = header[differenceInSeconds.idx];
  console.log("الفارق بوحدة الثواني:", convToHMS(differenceInSeconds.minDif));
  console.log("الفارق بوحدة الثواني:", differenceInSeconds.idx);

  console.log(indexOfArray);
}
