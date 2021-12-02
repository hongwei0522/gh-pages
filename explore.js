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
  var dataAll = null
  var bg3 = document.getElementById('bg3')
  const course_url = 'https://front-enter.firebaseio.com/list.json';

  async function getISS() {
    const response = await fetch(course_url);
    dataAll = await response.json();
    createSelectElement(dataAll, dataAll.length)
  }

  getISS()    

  function createSelectElement(dataAll, length) {
    for (var j = 0; j < length; j++){
      classes(dataAll, j)
    }
  }
        
        function classes(dataSelect, j){
          var ul = document.createElement("UL");
          var a = document.createElement("a");
          var exploreHref = "./course.html?tid=";
          var exploreHtml = exploreHref + dataSelect[j].creatTime;
          a.href = exploreHtml;
          ul.className = "bg3Block";
          a.className = "bg3Blocka";
          var text = "node";
          var node = "";
          for ( var i = 0 ; i < 5 ; i++ ){
            node +=  text +i;
            var node = document.createElement("LI");
                        
            // node.className = data[j].creatTime
            if (i == 0) {
              var city = document.createTextNode(dataSelect[j].city);
              var locationgif = document.createElement("img");
              locationgif.src = "https://frankyeah.github.io/Front-Enter/images/location_icon_one.png";
              locationgif.className = "locationgif";
              node.className = "location";
              node.appendChild(locationgif);
              node.appendChild(city);
            }
            else if (i == 1){
              var squareUrl = document.createElement("img");
              squareUrl.src = dataSelect[j].squareUrl;
              squareUrl.className = "locationimg";
              node.className = "locationimgover";
              node.appendChild(squareUrl);
            }
            else if (i == 2){
              var name = document.createTextNode(dataSelect[j].name);
              node.className = "locationh1";
              node.appendChild(name);
            }
            else if (i == 3){
              var preface = document.createTextNode(dataSelect[j].preface);
              node.className = "locationp";
              node.appendChild(preface);
            }
            else {
              node.className = "loactionread";
              node.innerHTML = "read more";
            }
              ul.appendChild(a);
              a.appendChild(node);
              document.getElementById("bg3").appendChild(ul);
          }          
        } 

  //全部 小班制 放養制 一對一
  var allclass = document.getElementById('allclass');
  var smallclass = document.getElementById('smallclass');
  var stockclass = document.getElementById('stockclass');
  var oneclass = document.getElementById('oneclass');
 
  allclass.addEventListener('click',function(){
    // bg3.innerHTML = ""
    // createSelectElement(dataAll, dataAll.length)
    clickCategory( 'skill', '前端')
  })

  smallclass.addEventListener('click',function(){
    clickCategory( 'classType', '小班制')
  }) 
    // var smalldata = dataAll.filter(word => word.classType == '小班制');
  
  stockclass.addEventListener('click',function(){
    clickCategory('classType', '大班制')
  })

  oneclass.addEventListener('click',function(){
    clickCategory('name', '彭彭的課程教學')
  })

  function clickCategory(pre, value) {
    bg3.innerHTML = ''
    var clickData = []
    for (var k = 0; k < dataAll.length ; k++){

      if( dataAll[k][pre] == value){
        clickData.push(dataAll[k])
      }
    }
    createSelectElement(clickData, clickData.length)
  }
  