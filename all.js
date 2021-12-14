//scroll TOP按鈕 減速上滑
var btn = document.getElementById('totop');

btn.addEventListener("click", function() {
  var i = 3000;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i -= i*0.04
    if (i <= 1) clearInterval(int)
    return false;
  }, 20);
});

//scroll 頁首透明度
window.addEventListener('scroll' , () => {
  var header = document.querySelector('.header');
  if( document.documentElement.scrollTop > 0){
  header.style.opacity = "0.8"
  }else{
  header.style.opacity = "1"
  }
});

//settimeout loading畫面 https://medium.com/@AntheaLee/js-%E8%A8%88%E7%AE%97%E7%A7%92%E6%95%B8%E9%9A%B1%E8%97%8F%E7%89%A9%E4%BB%B6-f7b24f7e1a0

setTimeout(function (){
  document.getElementById("loading1").style.display = "none";
},2000);
setTimeout(function (){
  document.getElementById("loading2").style.display = "none";
},2000);
setTimeout(function (){
  document.getElementById("frontlogo").style.display = "none";
},2000);


//search 按鈕
var search = document.getElementById('search');

search.addEventListener("click", function(){
  if(document.getElementById("hide").style.display == "none" && 
      document.getElementById("hide2").style.display == "none")
    document.getElementById("hide").style.display = "block" ,
    document.getElementById("hide2").style.display = "block";
    else
    document.getElementById("hide").style.display = "none" ,
    document.getElementById("hide2").style.display = "none";
})

var hide2 = document.getElementById('hide2');
hide2.addEventListener('click',function(){
    document.getElementById("hide").style.display = "none" ,
    document.getElementById("hide2").style.display = "none";
})

//Login
var log = document.getElementById('log');

log.addEventListener("click", function(){
  if(document.getElementById("login").style.display == "none" && 
      document.getElementById("hide3").style.display == "none")
    document.getElementById("login").style.display = "block" ,
    document.getElementById("hide3").style.display = "block";
    else
    document.getElementById("login").style.display = "none" ,
    document.getElementById("hide3").style.display = "none";
})

var hide3 = document.getElementById('hide3');
hide3.addEventListener('click',function(){
    document.getElementById("login").style.display = "none" ,
    document.getElementById("hide3").style.display = "none";
})

//testGo
var testgo = document.getElementById('testgo');

testgo.addEventListener("click", function(){
  if(document.getElementById("test").style.display == "none" && 
      document.getElementById("hide4").style.display == "none")
    document.getElementById("test").style.display = "block" ,
    document.getElementById("hide4").style.display = "block";
    else
    document.getElementById("test").style.display = "none" ,
    document.getElementById("hide4").style.display = "none";
})

var hide4 = document.getElementById('hide4');

hide4.addEventListener("click", function(){
  if(document.getElementById("test").style.display == "none" && 
      document.getElementById("hide4").style.display == "none")
    document.getElementById("test").style.display = "block" ,
    document.getElementById("hide4").style.display = "block";
    else
    document.getElementById("test").style.display = "none" ,
    document.getElementById("hide4").style.display = "none";
})

var hide4 = document.getElementById('hide4');
hide4.addEventListener('click',function(){
    document.getElementById("test").style.display = "none" ,
    document.getElementById("hide4").style.display = "none";
})

//search功能
// 1.點按鈕跳到explore
// 2.篩選資料 地點 名字 類別
var hideSearch = document.getElementById("hideSearch");

hideSearch.addEventListener("click", function(){
  var inputText = document.getElementById("inputText").value;
  var exploreHref = "./explore.html?tid=";
  var exploreHtml = exploreHref + inputText;
    window.location = exploreHtml
    console.log(inputText)
  })

//test go
let countClick = 0;
var testgo = document.getElementById("testgo");
var test = document.getElementById("test");
testgo.addEventListener("click", createTest)
function createTest(){
  if(countClick == 0){
    test.testText2()
    test.testText()
    test.testh1()
    test.testp()
    test.testBtn()
    countClick++;
  }
}
test.testText2 = function(){
  let newElement = document.createElement('p');
  newElement.className = "testText2";
  test.appendChild(newElement);
}
test.testText = function() {
  let newElement = document.createElement('UL');
  newElement.className = "testText";
  newElement.id = "testText";
  test.appendChild(newElement);
  // newElement.onclick = createTest;
}
test.testh1 = function(){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testh1 = document.createElement('p');
  testh1.className = "testh1";
  testh1.id = "testh1";
  testh1.innerHTML = "測驗說明";
  newElement.appendChild(testh1);
  Ul.appendChild(newElement)
}
test.testp = function(){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testp = document.createElement('p');
  testp.className = "testp";
  testp.id = "testp";
  testp.innerHTML = "點選「開始測驗」後，系統將根據你的回答，找出最適合你的學習環境，並顯示有多少百分比的合適度。";
  newElement.appendChild(testp);
  Ul.appendChild(newElement)
}
test.testBtn = function(){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testBtn = document.createElement('input');
  testBtn.type = "button"
  testBtn.className = "testBtn";
  testBtn.id = "testBtn";
  testBtn.value = "測驗開始";
  newElement.appendChild(testBtn);
  Ul.appendChild(newElement)
  testBtn.onclick = CleanButton;
}

var ButtonClick = 0;
  function CleanButton(){
    var UL = document.getElementById("testText")
    UL.remove()
    if(ButtonClick == 0){
    UL.onclick = FirstButton;
    ButtonClick++;
    }else if(ButtonClick == 1){
      UL.onclick = SecondButton;
      ButtonClick++;
    }else if(ButtonClick == 2){
      UL.onclick = ThirdButton;
      ButtonClick++;
    }else if(ButtonClick == 3){
      UL.onclick = FourthButton;
      ButtonClick++;
    }else if(ButtonClick == 4){
      UL.onclick = FifthButton;
      ButtonClick++;
    }else{
      UL.onclick = LastButton;
    }
  }

function FirstButton(){
  test.testText()
  test.testh2("選擇在哪座城市學習?")
  test.testp2("1/5")
  test.testBtn2('台北')
  test.testBtn2('台中')
  test.testBtn2('高雄')
  test.testBtn2('各地')
  test.testBtn2('不重要')
}
function SecondButton(){
  test.testText()
  test.testh2("每月能撥出多少費用學習？")
  test.testp2("2/5")
  test.testBtn2('3000元以下')
  test.testBtn2('6000元內')
  test.testBtn2('10000元內')
  test.testBtn2('10001元以上')
  test.testBtn2('不重要')
}
function ThirdButton(){
  test.testText()
  test.testh2("每周能撥出多少時間學習？")
  test.testp2("3/5")
  test.testBtn2('16小時以下')
  test.testBtn2('30小時內')
  test.testBtn2('45小時內')
  test.testBtn2('46小時以上')
  test.testBtn2('不重要')
}
function FourthButton(){
  test.testText()
  test.testh2("對班制的需求是？")
  test.testp2("4/5")
  test.testBtn2('大班制')
  test.testBtn2('小班制')
  test.testBtn2('一對一')
  test.testBtn2('不重要')
}
function FifthButton(){
  test.testText()
  test.testh2("喜歡什麼樣的教學方式？")
  test.testp2("5/5")
  test.testBtn2('放養制')
  test.testBtn2('手把手教制')
  test.testBtn2('不重要')
}
function LastButton(){
  test.testText()
  test.testh2("你有多適合下列學校呢？")
  
}

test.testh2 = function(topic){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testh2 = document.createElement('p');
  testh2.className = "testh2";
  testh2.id = "testh2";
  testh2.innerHTML = topic;
  newElement.appendChild(testh2);
  Ul.appendChild(newElement)
}
test.testp2 = function(number){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testp2 = document.createElement('p');
  testp2.className = "testp2";
  testp2.id = "testp2";
  testp2.innerHTML = number;
  newElement.appendChild(testp2);
  Ul.appendChild(newElement)
}
test.testBtn2 = function(name){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testBtn2 = document.createElement('input');
  testBtn2.type = "button2"
  testBtn2.className = "testBtn2";
  testBtn2.id = "testBtn2";
  testBtn2.value = name;
  newElement.appendChild(testBtn2);
  Ul.appendChild(newElement)
  testBtn2.onclick = CleanButton;
}










// let countClick = 0;
// var test = document.getElementById("test")
// testgo.addEventListener("click", createTestGo)
// function createTestGo(){
//   if(countClick == 0){
//     test.testGoBackDiv()
//     test.createBlueGreen()
//     test.createPhotoWithGray()
//     document.createElement('p', 'test-one-header', 'testOneHeader', 'testGoWhiteDiv', '測驗說明', '');
//     test.createFirstPreface('點選「開始測驗」後，系統將根據你的回答，找出最適合你的學習環境，並顯示有多少百分比的合適度。');
//     document.createElement('p', 'test-one-button', 'testOneButton', 'testGoWhiteDiv', '開始測驗', test.testTwoStart);
//     countClick++;
//   }else{
//     let child = document.getElementById('testGoBackDiv');
//     document.body.removeChild(child);
//     countClick--;
//     // clear
//     getAllSelect = [];
//     // clientTotal = [];
//     styleElem.innerHTML = '#endPieChart:before {transform: rotate(180deg);}';
//     styleElemOne.innerHTML = '#endPieChart:after {transform: rotate(0deg);}';
//     styleElemTwo.innerHTML = '#endPieChart:after {border-color: #1cb5e0;}';
//   }
// }

// test.testGoBackDiv = function(){
//   let newElement = document.createElement('div');
//   newElement.className = 'test';
//   newElement.id = 'testGoBackDiv';
//   document.body.appendChild(newElement);
//   newElement.onclick = createTestGo;
// }

// test.createBlueGreen = () => {
//   let newElement = document.createElement('div');
//   newElement.className = 'test';
//   newElement.id = 'blueGreen';
//   document.getElementById('testGoBackDiv').appendChild(newElement);
//   newElement.onclick = (event) => {
//   event.stopPropagation();
//   }
// }

// test.createPhotoWithGray = () => {
//   let newElement = document.createElement('div');
//   newElement.className = 'testText2';
//   newElement.id = 'photoWithGray';
//   document.getElementById('testGoBackDiv').appendChild(newElement);
//   newElement.onclick = (event) => {
//   event.stopPropagation();
//   }
// }

// test.testGoWhiteDiv = () => {
//   let newElement = document.createElement('div');
//   newElement.className = 'test-go-white-div';
//   newElement.id = 'testGoWhiteDiv';
//   document.getElementById('testGoBackDiv').appendChild(newElement);
//   newElement.onclick = (event) => {
//   event.stopPropagation();
//   }
// }

// test.testOneList = (oneList) => {
//   createElement('p', 'test-one-list', 'testOneList', 'testGoWhiteDiv', oneList, '');
// }

// test.createFirstPreface = (oneList) => {
//   document.createElement('p', 'first-preface', 'firstPreface', 'testGoWhiteDiv', oneList, '');
// }

// // first test GO button
// test.testTwoQuestionCount = (questionCount) => {
//   createElement('p', 'test-two-question-count', 'testTwoQuestionCount', 'testGoWhiteDiv', questionCount, '');
// }

// test.testTwoSelect = (twoSelect) => {
//   createElement('p', 'test-two-select', 'testTwoSelect', 'testGoWhiteDiv', twoSelect, app.testGo.testThreeStart);
// }

// test.testTwoStart = () => {
//   document.getElementById('testGoWhiteDiv').innerHTML = '';
//   test.testOneList('選擇在哪座城市學習？');
//   test.testTwoQuestionCount('1/5');
//   test.testTwoSelect('台北');
//   test.testTwoSelect('台中');
//   test.testTwoSelect('高雄');
//   test.testTwoSelect('各地');
//   test.testTwoSelect('不重要');
// }

// // display question
// let getAllSelect = [];
// test.testThreeStart = (event) => {
//   document.getElementById('testGoWhiteDiv').innerHTML = '';
//   test.testOneList('每月能撥出多少費用學習？');
//   test.testTwoQuestionCount('2/5');
//   test.testThreeSelect('3000元以下');
//   test.testThreeSelect('6000元內');
//   test.testThreeSelect('10000元內');
//   test.testThreeSelect('10001元以上');
//   test.testThreeSelect('不重要');
//   getAllSelect.push(event.target.textContent);
// }

// test.testThreeSelect = (threeSelect) => {
//   createElement('p', 'test-two-select', 'testThreeSelect', 'testGoWhiteDiv', threeSelect, app.testGo.testFourStart);
// }

// test.testFourStart = (event) => {
//   document.getElementById('testGoWhiteDiv').innerHTML = '';
//   test.testOneList('每周能撥出多少時間學習？');
//   test.testTwoQuestionCount('3/5');
//   test.testFourSelect('16小時以下');
//   test.testFourSelect('30小時內');
//   test.testFourSelect('45小時內');
//   test.testFourSelect('46小時以上');
//   test.testFourSelect('不重要');
//   getAllSelect.push(event.target.textContent);
// }

// test.testFourSelect = (fourSelect) => {
//   createElement('p', 'test-two-select', 'testFourSelect', 'testGoWhiteDiv', fourSelect, app.testGo.testFiveStart);
// }

// test.testFiveStart = (event) => {
//   document.getElementById('testGoWhiteDiv').innerHTML = '';
//   test.testOneList('對班制的需求是？');
//   test.testTwoQuestionCount('4/5');
//   test.testFiveSelect('大班制');
//   test.testFiveSelect('小班制');
//   test.testFiveSelect('一對一');
//   test.testFiveSelect('不重要');
//   getAllSelect.push(event.target.textContent);
// }

// test.testFiveSelect = (fiveSelect) => {
//   createElement('p', 'test-two-select', 'testFiveSelect', 'testGoWhiteDiv', fiveSelect, app.testGo.testSixStart);
// }

// test.testSixStart = (event) => {
//   document.getElementById('testGoWhiteDiv').innerHTML = '';
//   test.testOneList('喜歡什麼樣的教學方式？');
//   test.testTwoQuestionCount('5/5');
//   test.testSixSelect('放養制');
//   test.testSixSelect('手把手教制');
//   test.testSixSelect('不重要');
//   getAllSelect.push(event.target.textContent);
// }

// test.testSixSelect = (sixSelect) => {
//   createElement('p', 'test-two-select', 'testSixSelect', 'testGoWhiteDiv', sixSelect, app.testGo.testEndStart);
// }

// // display result & pie chart making
// test.testEndStart = (event) => {
//   document.getElementById('testGoWhiteDiv').innerHTML = '';
//   test.testOneList('你有多適合下列學校呢？');
//   createElement('div', 'end-pie-chart', 'endPieChart', 'testGoWhiteDiv', '', '');
//   createElement('div', 'white-in-pie-chart', 'whiteInPieChart', 'testGoWhiteDiv', '', '');
//   test.resultA();
//   createElement('p', 'for-end-result', 'forEndResult', 'resultA', '', '');
//   getAllSelect.push(event.target.textContent);
//   test.getAllSelectLogic();
// }

// test.resultA = () => {
//   let newElement = document.createElement('a');
//   newElement.id = 'resultA';
//   newElement.className = 'result-a';
//   newElement.href = 'content.html';
//   document.getElementById('testGoWhiteDiv').appendChild(newElement);
// }

// // game logic
// let getFirebaseData = database.ref('article');
// let clientTotal = [];
// test.getAllSelectLogic = function(){
//     // city
//     if(getAllSelect[0] != '不重要'){
//         getFirebaseData.orderByChild('city').equalTo(getAllSelect[0]).on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(getAllSelect[0] == '不重要'){
//         getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
//         });  
//     }
//     // fee
//     if(parseInt(getAllSelect[1])<=3000){
//         getFirebaseData.orderByChild('fee').equalTo('0').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('1800').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('3000').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(parseInt(getAllSelect[1])<=6000){
//         getFirebaseData.orderByChild('fee').equalTo('0').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('1800').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('3000').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('5000').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(parseInt(getAllSelect[1])<=10000){
//         getFirebaseData.orderByChild('fee').equalTo('0').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('1800').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('3000').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('fee').equalTo('5000').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(parseInt(getAllSelect[1])>10000){
      
//     }else if(getAllSelect[1] == '不重要'){
//         getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
//         });  
//     }
//     // week hour
//     if(parseInt(getAllSelect[2])<=16){
//         getFirebaseData.orderByChild('weekHour').equalTo('16').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(parseInt(getAllSelect[2])<=30){
//         getFirebaseData.orderByChild('weekHour').equalTo('16').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('weekHour').equalTo('18').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('weekHour').equalTo('20').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(parseInt(getAllSelect[2])<=45){
//         getFirebaseData.orderByChild('weekHour').equalTo('16').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('weekHour').equalTo('18').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('weekHour').equalTo('20').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('weekHour').equalTo('32').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//         getFirebaseData.orderByChild('weekHour').equalTo('40').on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(parseInt(getAllSelect[2])>45){
        
//     }else if(getAllSelect[2] == '不重要'){
//         getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
//         });  
//     }
//     // class type
//     if(getAllSelect[3] != '不重要'){
//         getFirebaseData.orderByChild('classType').equalTo(getAllSelect[3]).on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(getAllSelect[3] == '不重要'){
//         getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
//         });  
//     }
//     // teach way
//     if(getAllSelect[4] != '不重要'){
//         getFirebaseData.orderByChild('teachWay').equalTo(getAllSelect[4]).on('child_added', function(snapshot) {
//             clientTotal.push(snapshot.val().name)
//         });  
//     }else if(getAllSelect[4] == '不重要'){
//         getFirebaseData.orderByChild('skill').equalTo('前端').on('child_added', function(snapshot) {
//         });  
//     }
//     // get heightest value
//     setTimeout(testGo.maxValue, 3000); 
// }

// let styleElem = document.head.appendChild(document.createElement('style'));
// let styleElemOne = document.head.appendChild(document.createElement('style'));
// let styleElemTwo = document.head.appendChild(document.createElement('style'));
// testGo.maxValue = function(){
//     let modeMap = {};
//     let maxEl = clientTotal[0];
//     let maxCount = 1;
//     for(let i = 0; i < clientTotal.length; i++){
//         let el = clientTotal[i];
//         if(modeMap[el] == null){
//             modeMap[el] = 1;
//         }else{
//             modeMap[el]++;  
//         }
//         if(modeMap[el] > maxCount){
//             maxEl = el;
//             maxCount = modeMap[el];
//         }
//     }

//     if(maxCount == 5){
//         maxCount = '100%';
//     }else if(maxCount == 4){
//         maxCount = '80%';
//         styleElem.innerHTML = '#endPieChart:before {transform: rotate(108deg);}';
//     }else if(maxCount == 3){
//         maxCount = '60%';
//         styleElem.innerHTML = '#endPieChart:before {transform: rotate(36deg);}';
//     }else if(maxCount == 2){
//         maxCount = '40%'
//         styleElem.innerHTML = '#endPieChart:before {transform: rotate(0deg);}';
//         styleElemOne.innerHTML = '#endPieChart:after {transform: rotate(144deg);}';
//         styleElemTwo.innerHTML = '#endPieChart:after {border-color: rgb(26,216,211);}';
//     }else if(maxCount == 1){
//         maxCount = '20%';
//         styleElem.innerHTML = '#endPieChart:before {transform: rotate(0deg);}';
//         styleElemOne.innerHTML = '#endPieChart:after {transform: rotate(72deg);}';
//         styleElemTwo.innerHTML = '#endPieChart:after {border-color: rgb(26,216,211);}';
//     }else if(maxCount == 0){
//         maxCount = '0%';
//     }
//     document.getElementById('forEndResult').textContent = maxEl;
//     document.getElementById('whiteInPieChart').textContent = maxCount;
//     getFirebaseData.orderByChild('name').equalTo(maxEl).on('child_added', function(snapshot) {
//         document.getElementById('resultA').setAttribute('href', '/Front-Enter/content.html?id=' + snapshot.val().creatTime);
//     });  
//     // clear
//     getAllSelect = [];
//     // clientTotal = [];
// }























// var testBtn = document.getElementById("testBtn");
// testBtn.addEventListener("click", function(){
//   var testh1 = document.getElementById("testh1");
//   var testp = document.getElementById("testp");
//   var testBtn = document.getElementById("testBtn");
//   testh1.remove()
//   testp.remove()
//   testBtn.remove()

//   var testText = document.getElementById("testText");
//   var li1 = document.createElement("LI");;
//   var testh1 = document.createTextNode("選擇在哪座城市學習?");
//   li1.className = "testh2";
//   li1.id = "testh2";
//   li1.appendChild(testh1)
//   testText.appendChild(li1)
//   var li2 = document.createElement("LI");
//   var testp = document.createTextNode("1/5");
//   li2.className = "testp2";
//   li2.id = "testp2";
//   li2.appendChild(testp)
//   testText.appendChild(li2)
//   var li3 = document.createElement("LI");
//   var btn1 = document.createElement('input');
//   btn1.type = "button";
//   btn1.className = "testBtn2";
//   btn1.value = "台北";
//   btn1.id = "testBtn1";
//   li3.appendChild(btn1)
//   testText.appendChild(li3)
//   var li4 = document.createElement("LI");
//   var btn2 = document.createElement('input');
//   btn2.type = "button";
//   btn2.className = "testBtn2";
//   btn2.value = "台中";
//   btn2.id = "testBtn2";
//   li4.appendChild(btn2)
//   testText.appendChild(li4)
//   var li5 = document.createElement("LI");
//   var btn3 = document.createElement('input');
//   btn3.type = "button";
//   btn3.className = "testBtn2";
//   btn3.value = "高雄";
//   btn3.id = "testBtn3";
//   li5.appendChild(btn3)
//   testText.appendChild(li5)
//   var li6 = document.createElement("LI");
//   var btn4 = document.createElement('input');
//   btn4.type = "button";
//   btn4.className = "testBtn2";
//   btn4.value = "各地";
//   btn4.id = "testBtn4";
//   li6.appendChild(btn4)
//   testText.appendChild(li6)
//   var li7 = document.createElement("LI");
//   var btn5 = document.createElement('input');
//   btn5.type = "button";
//   btn5.className = "testBtn2";
//   btn5.value = "不重要";
//   btn5.id = "testBtn5";
//   li7.appendChild(btn5)
//   testText.appendChild(li7)

//   for(var i = 1 ; i < 6 ; i++){
//     if(i == 1){
//       var testBtn1 = document.getElementById("testBtn1");
//       testBtn1.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("每月能撥出多少費用學習？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("2/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "3000元以下";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "6000元以內";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "10000元以內";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "10001元以上";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         var li7 = document.createElement("LI");
//         var btn5 = document.createElement('input');
//         btn5.type = "button";
//         btn5.className = "testBtn2";
//         btn5.value = "不重要";
//         btn5.id = "testBtn5";
//         li7.appendChild(btn5)
//         testText.appendChild(li7)
//         for(var j = 1; j < 6; j++){
//           if(j == 1){
//         var testBtn1 = document.getElementById("testBtn1");
//         testBtn1.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("每周能撥出多少時間學習？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("3/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "16小時以下";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "30小時以內";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "45小時以內";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "46小時以上";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         var li7 = document.createElement("LI");
//         var btn5 = document.createElement('input');
//         btn5.type = "button";
//         btn5.className = "testBtn2";
//         btn5.value = "不重要";
//         btn5.id = "testBtn5";
//         li7.appendChild(btn5)
//         testText.appendChild(li7)
//         for(var k = 1; k < 6; k++){
//           if(k == 1){
//         var testBtn1 = document.getElementById("testBtn1");
//         testBtn1.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("對班制的需求是？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("4/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "大班制";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "小班制";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "一對一";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "不重要";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         for(l = 1; l < 5; l++){
//           if(l == 1){
//             var testBtn1 = document.getElementById("testBtn1");
//         testBtn1.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("喜歡什麼樣的教學方式？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("5/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "放養制";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "手把手教學";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "不重要";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         })
//           }else if(l == 2){

//           }else if(l == 3){

//           }else if(l == 4){

//           }
//         }
//         })
//           }else if(k == 2){

//           }else if(k == 3){

//           }else if(k == 4){

//           }else if(k == 5){

//           }
//         }
//       })
//           }else if(j == 2){

//           }else if(j == 3){

//           }else if(j == 4){

//           }else if(j == 5){
            
//           }
//         }
//       })
//     }else if(i == 2){
//       var testBtn2 = document.getElementById("testBtn2");
//       testBtn2.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("每月能撥出多少費用學習？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("2/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "3000元以下";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "6000元以內";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "10000元以內";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "10001元以上";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         var li7 = document.createElement("LI");
//         var btn5 = document.createElement('input');
//         btn5.type = "button";
//         btn5.className = "testBtn2";
//         btn5.value = "不重要";
//         btn5.id = "testBtn5";
//         li7.appendChild(btn5)
//         testText.appendChild(li7)
//       })
//     }else if(i == 3){
//       var testBtn3 = document.getElementById("testBtn3");
//       testBtn3.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("每月能撥出多少費用學習？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("2/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "3000元以下";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "6000元以內";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "10000元以內";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "10001元以上";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         var li7 = document.createElement("LI");
//         var btn5 = document.createElement('input');
//         btn5.type = "button";
//         btn5.className = "testBtn2";
//         btn5.value = "不重要";
//         btn5.id = "testBtn5";
//         li7.appendChild(btn5)
//         testText.appendChild(li7)
//       })
//     }else if(i == 4){
//       var testBtn4 = document.getElementById("testBtn4");
//       testBtn4.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("每月能撥出多少費用學習？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("2/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "3000元以下";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "6000元以內";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "10000元以內";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "10001元以上";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         var li7 = document.createElement("LI");
//         var btn5 = document.createElement('input');
//         btn5.type = "button";
//         btn5.className = "testBtn2";
//         btn5.value = "不重要";
//         btn5.id = "testBtn5";
//         li7.appendChild(btn5)
//         testText.appendChild(li7)
//       })
//     }else if(i == 5){
//       var testBtn5 = document.getElementById("testBtn5");
//       testBtn5.addEventListener("click", function(){
//         var testh2 = document.getElementById("testh2");
//         var testp2 = document.getElementById("testp2");
//         var testBtn1 = document.getElementById("testBtn1");
//         var testBtn2 = document.getElementById("testBtn2");
//         var testBtn3 = document.getElementById("testBtn3");
//         var testBtn4 = document.getElementById("testBtn4");
//         var testBtn5 = document.getElementById("testBtn5");
//         testh2.remove()
//         testp2.remove()
//         testBtn1.remove()
//         testBtn2.remove()
//         testBtn3.remove()
//         testBtn4.remove()
//         testBtn5.remove()

//         var testText = document.getElementById("testText");
//         var li1 = document.createElement("LI");;
//         var testh1 = document.createTextNode("每月能撥出多少費用學習？");
//         li1.className = "testh2";
//         li1.id = "testh2";
//         li1.appendChild(testh1)
//         testText.appendChild(li1)
//         var li2 = document.createElement("LI");
//         var testp = document.createTextNode("2/5");
//         li2.className = "testp2";
//         li2.id = "testp2";
//         li2.appendChild(testp)
//         testText.appendChild(li2)
//         var li3 = document.createElement("LI");
//         var btn1 = document.createElement('input');
//         btn1.type = "button";
//         btn1.className = "testBtn2";
//         btn1.value = "3000元以下";
//         btn1.id = "testBtn1";
//         li3.appendChild(btn1)
//         testText.appendChild(li3)
//         var li4 = document.createElement("LI");
//         var btn2 = document.createElement('input');
//         btn2.type = "button";
//         btn2.className = "testBtn2";
//         btn2.value = "6000元以內";
//         btn2.id = "testBtn2";
//         li4.appendChild(btn2)
//         testText.appendChild(li4)
//         var li5 = document.createElement("LI");
//         var btn3 = document.createElement('input');
//         btn3.type = "button";
//         btn3.className = "testBtn2";
//         btn3.value = "10000元以內";
//         btn3.id = "testBtn3";
//         li5.appendChild(btn3)
//         testText.appendChild(li5)
//         var li6 = document.createElement("LI");
//         var btn4 = document.createElement('input');
//         btn4.type = "button";
//         btn4.className = "testBtn2";
//         btn4.value = "10001元以上";
//         btn4.id = "testBtn4";
//         li6.appendChild(btn4)
//         testText.appendChild(li6)
//         var li7 = document.createElement("LI");
//         var btn5 = document.createElement('input');
//         btn5.type = "button";
//         btn5.className = "testBtn2";
//         btn5.value = "不重要";
//         btn5.id = "testBtn5";
//         li7.appendChild(btn5)
//         testText.appendChild(li7)
//       })
//     }
//   }
// })


