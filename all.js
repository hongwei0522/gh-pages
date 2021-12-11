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
var testBtn = document.getElementById("testBtn");
testBtn.addEventListener("click", function(){
  var testh1 = document.getElementById("testh1");
  var testp = document.getElementById("testp");
  var testBtn = document.getElementById("testBtn");
  testh1.remove()
  testp.remove()
  testBtn.remove()

  var testText = document.getElementById("testText");
  var li1 = document.createElement("LI");;
  var testh1 = document.createTextNode("選擇在哪座城市學習?");
  li1.className = "testh2";
  li1.id = "testh2";
  li1.appendChild(testh1)
  testText.appendChild(li1)
  var li2 = document.createElement("LI");
  var testp = document.createTextNode("1/5");
  li2.className = "testp2";
  li2.id = "testp2";
  li2.appendChild(testp)
  testText.appendChild(li2)
  var li3 = document.createElement("LI");
  var btn1 = document.createElement('input');
  btn1.type = "button";
  btn1.className = "testBtn2";
  btn1.value = "台北";
  btn1.id = "testBtn1";
  li3.appendChild(btn1)
  testText.appendChild(li3)
  var li4 = document.createElement("LI");
  var btn2 = document.createElement('input');
  btn2.type = "button";
  btn2.className = "testBtn2";
  btn2.value = "台中";
  btn2.id = "testBtn2";
  li4.appendChild(btn2)
  testText.appendChild(li4)
  var li5 = document.createElement("LI");
  var btn3 = document.createElement('input');
  btn3.type = "button";
  btn3.className = "testBtn2";
  btn3.value = "高雄";
  btn3.id = "testBtn3";
  li5.appendChild(btn3)
  testText.appendChild(li5)
  var li6 = document.createElement("LI");
  var btn4 = document.createElement('input');
  btn4.type = "button";
  btn4.className = "testBtn2";
  btn4.value = "各地";
  btn4.id = "testBtn4";
  li6.appendChild(btn4)
  testText.appendChild(li6)
  var li7 = document.createElement("LI");
  var btn5 = document.createElement('input');
  btn5.type = "button";
  btn5.className = "testBtn2";
  btn5.value = "不重要";
  btn5.id = "testBtn5";
  li7.appendChild(btn5)
  testText.appendChild(li7)

  for(var i = 1 ; i < 6 ; i++){
    if(i == 1){
      var testBtn1 = document.getElementById("testBtn1");
      testBtn1.addEventListener("click", function(){
        var testh2 = document.getElementById("testh2");
        var testp2 = document.getElementById("testp2");
        var testBtn1 = document.getElementById("testBtn1");
        var testBtn2 = document.getElementById("testBtn2");
        var testBtn3 = document.getElementById("testBtn3");
        var testBtn4 = document.getElementById("testBtn4");
        var testBtn5 = document.getElementById("testBtn5");
        testh2.remove()
        testp2.remove()
        testBtn1.remove()
        testBtn2.remove()
        testBtn3.remove()
        testBtn4.remove()
        testBtn5.remove()

        var testText = document.getElementById("testText");
        var li1 = document.createElement("LI");;
        var testh1 = document.createTextNode("每月能撥出多少費用學習？");
        li1.className = "testh2";
        li1.id = "testh2";
        li1.appendChild(testh1)
        testText.appendChild(li1)
        var li2 = document.createElement("LI");
        var testp = document.createTextNode("2/5");
        li2.className = "testp2";
        li2.id = "testp2";
        li2.appendChild(testp)
        testText.appendChild(li2)
        var li3 = document.createElement("LI");
        var btn1 = document.createElement('input');
        btn1.type = "button";
        btn1.className = "testBtn2";
        btn1.value = "3000元以下";
        btn1.id = "testBtn1";
        li3.appendChild(btn1)
        testText.appendChild(li3)
        var li4 = document.createElement("LI");
        var btn2 = document.createElement('input');
        btn2.type = "button";
        btn2.className = "testBtn2";
        btn2.value = "6000元以內";
        btn2.id = "testBtn2";
        li4.appendChild(btn2)
        testText.appendChild(li4)
        var li5 = document.createElement("LI");
        var btn3 = document.createElement('input');
        btn3.type = "button";
        btn3.className = "testBtn2";
        btn3.value = "10000元以內";
        btn3.id = "testBtn3";
        li5.appendChild(btn3)
        testText.appendChild(li5)
        var li6 = document.createElement("LI");
        var btn4 = document.createElement('input');
        btn4.type = "button";
        btn4.className = "testBtn2";
        btn4.value = "10001元以上";
        btn4.id = "testBtn4";
        li6.appendChild(btn4)
        testText.appendChild(li6)
        var li7 = document.createElement("LI");
        var btn5 = document.createElement('input');
        btn5.type = "button";
        btn5.className = "testBtn2";
        btn5.value = "不重要";
        btn5.id = "testBtn5";
        li7.appendChild(btn5)
        testText.appendChild(li7)
      })
    }else if(i == 2){
      
    }
  }
})


