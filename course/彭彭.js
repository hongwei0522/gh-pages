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
  hide4.addEventListener('click',function(){
      document.getElementById("test").style.display = "none" ,
      document.getElementById("hide4").style.display = "none";
  })

//JSON
    const course_url = 'https://front-enter.firebaseio.com/list.json';
        async function getISS() {
            const response = await fetch(course_url);
            const data = await response.json();
            
            document.getElementById('bg1word1').textContent = data[0].name;
            document.getElementById('coursep').innerHTML = data[0].content;
            document.getElementById('city').textContent = data[0].city;
            document.getElementById('classType').textContent = data[0].classType;
            document.getElementById('teachWay').textContent = data[0].teachWay;
            document.getElementById('totalDay').textContent = data[0].totalDay;
            document.getElementById('weekHour').textContent = data[0].weekHour;
            document.getElementById('technology').textContent = data[0].technology;
            document.getElementById('mail').textContent = data[0].mail;
            document.getElementById('phone').textContent = data[0].phone;
        }
        getISS()

//輪播器
  window.onload = function(){
    var slide = document.getElementById('slide');
    var slideLeft = document.getElementById('slideLeft');
    var slideRight = document.getElementById('slideRight');
    function animate(offset){
      var newLeft = parseInt(slide.style.left) + offset;
      slide.style.left = newLeft + 'px';
      if(newLeft < -3000 ){
        slide.style.left = 0 + 'px';
      }
      if(newLeft > 0 ){
        slide.style.left = -3000 + 'px';
      }
    }
    slideLeft.onclick = function(){
      animate(750);
    }
    slideRight.onclick = function(){
      animate(-750);
    }
  }
  var img1 = document.getElementById('img1');
  img1.addEventListener("click", function(){
    if(document.getElementById("container").style.display == "none" && 
        document.getElementById("slidebg").style.display == "none")
      document.getElementById("container").style.display = "block" ,
      document.getElementById("slidebg").style.display = "block";
      else
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
  var slidebg = document.getElementById('slidebg');
  slidebg.addEventListener('click',function(){
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })

  var img2 = document.getElementById('img2');
  img2.addEventListener("click", function(){
    if(document.getElementById("container").style.display == "none" && 
        document.getElementById("slidebg").style.display == "none")
      document.getElementById("container").style.display = "block" ,
      document.getElementById("slidebg").style.display = "block";
      else
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
  var slidebg = document.getElementById('slidebg');
  slidebg.addEventListener('click',function(){
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
  
  var img3 = document.getElementById('img3');
  img3.addEventListener("click", function(){
    if(document.getElementById("container").style.display == "none" && 
        document.getElementById("slidebg").style.display == "none")
      document.getElementById("container").style.display = "block" ,
      document.getElementById("slidebg").style.display = "block";
      else
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
  var slidebg = document.getElementById('slidebg');
  slidebg.addEventListener('click',function(){
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })

  var img4 = document.getElementById('img4');
  img4.addEventListener("click", function(){
    if(document.getElementById("container").style.display == "none" && 
        document.getElementById("slidebg").style.display == "none")
      document.getElementById("container").style.display = "block" ,
      document.getElementById("slidebg").style.display = "block";
      else
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
  var slidebg = document.getElementById('slidebg');
  slidebg.addEventListener('click',function(){
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
    
  var img5 = document.getElementById('img5');
  img5.addEventListener("click", function(){
    if(document.getElementById("container").style.display == "none" && 
        document.getElementById("slidebg").style.display == "none")
      document.getElementById("container").style.display = "block" ,
      document.getElementById("slidebg").style.display = "block";
      else
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })
  var slidebg = document.getElementById('slidebg');
  slidebg.addEventListener('click',function(){
      document.getElementById("container").style.display = "none" ,
      document.getElementById("slidebg").style.display = "none";
  })