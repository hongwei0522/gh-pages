//scroll TOP按鈕 減速上滑
var btn = document.getElementById('totop');

btn.addEventListener("click", function() {
  var i = 3000;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i -= i*0.09
    if (i <= 1) clearInterval(int)
    return false;
  }, 5);
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
      document.getElementById("hide4").style.display == "none"){

    document.getElementById("test").style.display = "block" ,
    document.getElementById("hide4").style.display = "block";
  }else{
    document.getElementById("test").style.display = "none" ,
    document.getElementById("hide4").style.display = "none";
  }
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
      console.log('4')
      UL.onclick = FifthButton;
      ButtonClick++;
    }else if(ButtonClick == 5){
      console.log('5')
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

var selectTestGo = []
function SecondButton(e){
  selectTestGo.push(e.target.value)
  test.testText()
  test.testh2("每月能撥出多少費用學習？")
  test.testp2("2/5")
  test.testBtn2('3000 元以下')
  test.testBtn2('6000 元內')
  test.testBtn2('10000元內')
  test.testBtn2('10001元以上')
  test.testBtn2('不重要')
}
function ThirdButton(e){
  selectTestGo.push(e.target.value)
  test.testText()
  test.testh2("每周能撥出多少時間學習？")
  test.testp2("3/5")
  test.testBtn2('16小時以下')
  test.testBtn2('30小時內')
  test.testBtn2('45小時內')
  test.testBtn2('46小時以上')
  test.testBtn2('不重要')
}
function FourthButton(e){
  selectTestGo.push(e.target.value)
  test.testText()
  test.testh2("對班制的需求是？")
  test.testp2("4/5")
  test.testBtn2('大班制')
  test.testBtn2('小班制')
  test.testBtn2('一對一')
  test.testBtn2('不重要')
}
function FifthButton(e){
  selectTestGo.push(e.target.value)
  test.testText()
  test.testh2("喜歡什麼樣的教學方式？")
  test.testp2("5/5")
  test.testBtn2('放養制')
  test.testBtn2('手把手教制')
  test.testBtn2('不重要')
}

  let modeMap = {};
  let maxEl = null;
  let maxCount = 1;
function LastButton(e){

getISS(e)

}

async function getISS(e) {
  console.log('getcss')

  const course_url = 'https://front-enter.firebaseio.com/list.json';

  const response = await fetch(course_url);
  var selectdata = null
  selectdata = await response.json();
  console.log(selectdata)
  var SuitableClass = []
  for(i = 0; i < selectTestGo.length; i++){
    for(j =0; j < selectdata.length; j++){    
    if(selectTestGo[i] == selectdata[j].city){
      SuitableClass.push(selectdata[j].name)
    }
    if(Number(selectTestGo[i].substr(0,5)) >= Number(selectdata[j].fee)){
      SuitableClass.push(selectdata[j].name)
    }
    if(Number(selectTestGo[i].substr(0,2)) >= Number(selectdata[j].weekHour)){
      SuitableClass.push(selectdata[j].name)
    }
    if(selectTestGo[i] == selectdata[j].classType){
      SuitableClass.push(selectdata[j].name)
    }
    if(selectTestGo[i] == selectdata[j].teachWay){
      SuitableClass.push(selectdata[j].name)
    }
  }}

  modeMap = {};
  maxEl = SuitableClass[0];
  maxCount = 1;
  for(let i = 0; i < SuitableClass.length; i++){
      let el = SuitableClass[i];
      if(modeMap[el] == null){
          modeMap[el] = 1;
      }else{
          modeMap[el]++;  
      }
      if(modeMap[el] > maxCount){
          maxEl = el;
          maxCount = modeMap[el];
      }
    }

  btnUrl = "./course.html?tid=";
  for (var k = 0; k < selectdata.length; k++){
    if(maxEl == selectdata[k].name){
        btnUrl = btnUrl + selectdata[k].creatTime
        console.log(selectdata[k].name)
    }
  }
  if(maxEl == undefined){
    btnUrl = "./explore.html";
    maxEl = "請參考各種課程";
  }
  console.log(btnUrl)
  console.log(maxEl)
  console.log(maxCount)
  

  
  selectTestGo.push(e.target.value)
  test.testText()
  test.testh2("你有多適合下列學校呢？")
  test.testBtn3(maxEl,btnUrl)
  
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
test.testBtn3 = function(name,classUrl){
  var Ul = document.getElementById("testText")
  let newElement = document.createElement('LI');
  let testBtn3 = document.createElement('input');
  let testBtnUrl = document.createElement('a');
  testBtnUrl.href = classUrl;
  testBtn3.type = "button2";
  testBtn3.className = "testBtn3";
  testBtn3.id = "testBtn3";
  testBtn3.value = name;
  newElement.appendChild(testBtnUrl);
  testBtnUrl.appendChild(testBtn3);
  Ul.appendChild(newElement)
  testBtn3.onclick = CleanButton;
}

// Email login
var loginGmail = document.getElementById("loginGmail");
var inputMail = document.getElementById("inputMail");
var inputCode = document.getElementById("inputCode");
var registerbtn = document.getElementById("registerbtn");
var loginbtn = document.getElementById("loginbtn");

//註冊
registerbtn.addEventListener("click", function(e){
  e.preventDefault();
  firebase.auth().createUserWithEmailAndPassword(inputMail.value, inputCode.value)
  .then(() => {
      console.log("註冊成功");
  })
})

//登入
loginbtn.addEventListener("click", function(e){
  //preventDefaul 防止跳頁
  e.preventDefault();
  console.log(inputMail)
  console.log(inputMail.value)
  firebase.auth().signInWithEmailAndPassword(inputMail.value, inputCode.value)
  .then(() => {
    var user = firebase.auth().currentUser;
    var log = document.getElementById('log');
    if (user) {
      console.log(user);
      console.log(firebase.auth())
      log.innerHTML = '<a class="font" href="./member.html">會員</a>';
      document.getElementById("login").style.display = "none" ,
      document.getElementById("hide3").style.display = "none";
    }
  })
  .catch((error) => {
      window.alert(error.message);
  })
})


//登入判斷
var titleLogin = document.getElementById("titleLogin");
var memberText = document.getElementById("memberText");
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var photoHtml = `<a href="./member.html" >
    <div id="photobg" class="font-image"></div>
    </a>`;
    document.getElementById("titleLogin").style.display = "none";
    document.getElementById("memberText").style.display = "block";
    document.getElementById("login").style.display = "none" ,
    document.getElementById("hide3").style.display = "none";

    //換大頭
  if(user.photoURL !== null ){
    let photoURL = user.photoURL;
    document.getElementById("memberText").innerHTML = photoHtml;
    document.getElementById("photobg").style.backgroundImage = `url(${photoURL})`;
    document.getElementById("memberPhoto").src = `${photoURL}`;
  }
    // User is signed in.
  } else {
    document.getElementById("titleLogin").style.display = "block";
    document.getElementById("memberText").style.display = "none";
    // No user is signed in.
  }
  
});

//google登入
var provider = new firebase.auth.GoogleAuthProvider();
var loginGmail = document.getElementById('loginGmail');

loginGmail.onclick = function() {
  firebase.auth().signInWithRedirect(provider).then(function(result) {    
    var token = result.credential.accessToken;
    var user = result.user;
  });
 }
 
 //忘記密碼
const forgetCode = document.getElementById('forgetCode');
forgetCode.addEventListener("click", function(){
  firebase.auth().sendPasswordResetEmail(inputMail.value).then(function() {
    window.alert('已發送信件至信箱，請按照信件說明重設密碼');
    window.location.reload(); // 送信後，強制頁面重整一次
  }).catch(function(error) {
    alert(error.message)
  });
})