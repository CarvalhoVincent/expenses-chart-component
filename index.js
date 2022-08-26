"use strict";

const day1 = document.getElementById("day1");
const day2 = document.getElementById("day2");
const day3 = document.getElementById("day3");
const day4 = document.getElementById("day4");
const day5 = document.getElementById("day5");
const day6 = document.getElementById("day6");
const day7 = document.getElementById("day7");

const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");

const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const bar5 = document.getElementById("bar5");
const bar6 = document.getElementById("bar6");
const bar7 = document.getElementById("bar7");

const monValue = document.getElementById("monValue");
const tueValue = document.getElementById("tueValue");
const wedValue = document.getElementById("wedValue");
const thuValue = document.getElementById("thuValue");
const friValue = document.getElementById("friValue");
const satValue = document.getElementById("satValue");
const sunValue = document.getElementById("sunValue");

const bars = document.getElementsByClassName("bar");
const allBars = document.querySelectorAll(".bar");

const weekday = [day7,day1,day2,day3,day4,day5,day6];
const weekBar = [bar7,bar1,bar2,bar3,bar4,bar5,bar6];

const d = new Date();
const currentDay = weekday[d.getDay()];
const currentBar = weekBar[d.getDay()];


fetch("./data.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {

        currentDay.setAttribute("data-value", true);
        currentBar.classList.add("active");

        mon.innerHTML = data[0].day;
        tue.innerHTML = data[1].day;
        wed.innerHTML = data[2].day;
        thu.innerHTML = data[3].day;
        fri.innerHTML = data[4].day;
        sat.innerHTML = data[5].day;
        sun.innerHTML = data[6].day;

        monValue.innerHTML = "$" + data[0].amount;
        tueValue.innerHTML = "$" + data[1].amount;
        wedValue.innerHTML = "$" + data[2].amount;
        thuValue.innerHTML = "$" + data[3].amount;
        friValue.innerHTML = "$" + data[4].amount;
        satValue.innerHTML = "$" + data[5].amount;
        sunValue.innerHTML = "$" + data[6].amount;

        bar1.style.height = ((data[0].amount) * 2.86) + "px";
        bar2.style.height = ((data[1].amount) * 2.86) + "px";
        bar3.style.height = ((data[2].amount) * 2.86) + "px";
        bar4.style.height = ((data[3].amount) * 2.86) + "px";
        bar5.style.height = ((data[4].amount) * 2.86) + "px";
        bar6.style.height = ((data[5].amount) * 2.86) + "px";
        bar7.style.height = ((data[6].amount) * 2.86) + "px";
    });


//----- Hover box effect ----//

    for (let one of bars) {
        one.addEventListener("mouseover", hoverEffect);
        function hoverEffect() {
            one.firstElementChild.style = "display: flex;";
        }

        one.addEventListener("mouseout", removeHover);
        function removeHover() {
            one.firstElementChild.style = "display: none;";
        }    
    }