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

  //全部 小班制 放養制 一對一
  var allclass = document.getElementById('allclass');
  var smallclass = document.getElementById('smallclass');
  var stockclass = document.getElementById('stockclass');
  var oneclass = document.getElementById('oneclass');
  var classPeng = document.getElementById('classPeng');
  var classFeiken = document.getElementById('classFeiken');
  var classNTU = document.getElementById('classNTU');
  var calssHeCai = document.getElementById('classHeCai');
  var classAppworks = document.getElementById('classAppworks');
  var classhexschool = document.getElementById('classhexschool');
  var class5xruby = document.getElementById('class5xruby');
  var classUdemy = document.getElementById('classUdemy');
  var classUXabc = document.getElementById('classUXabc');
  var smallclasses = document.getElementById('bg3').getElementsByTagName('ul');

  allclass.addEventListener('click',function(){
    classPeng.removeChild(classPeng);
    classFeiken.removeChild(classFeiken);
    classNTU.removeChild(classNTU);
    classHeCai.removeChild(classHeCai);
    classAppworks.removeChild(classAppworks);
    classhexschool.removeChild(classhexschool);
    class5xruby.removeChild(class5xruby);
    classUdemy.removeChild(classUdemy);
    classUXabc.removeChild(classUXabc);
  })
  smallclass.addEventListener('click',function(){
    classPeng.parentNode.removeChild(classPeng);
    classFeiken.parentNode.removeChild(classFeiken);
    classhexschool.parentNode.removeChild(classhexschool);
    classUdemy.parentNode.removeChild(classUdemy);
  })
  stockclass.addEventListener('click',function(){
    classPeng.parentNode.removeChild(classPeng);
    classFeiken.parentNode.removeChild(classFeiken);
    classNTU.parentNode.removeChild(classNTU);
    classhexschool.parentNode.removeChild(classhexschool);
    class5xruby.parentNode.removeChild(class5xruby);
    classUXabc.parentNode.removeChild(classUXabc);
  })
  oneclass.addEventListener('click',function(){
    classFeiken.parentNode.removeChild(classFeiken);
    classNTU.parentNode.removeChild(classNTU);
    classHeCai.parentNode.removeChild(classHeCai);
    classAppworks.parentNode.removeChild(classAppworks);
    class5xruby.parentNode.removeChild(class5xruby);
    classUXabc.parentNode.removeChild(classUXabc);
  })