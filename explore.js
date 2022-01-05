  //JSON
  var dataAll = null
  var bg3 = document.getElementById('bg3')
  const courseUrl = 'https://front-enter.firebaseio.com/list.json';

  async function get() {
    const response = await fetch(courseUrl);
    dataAll = await response.json();
    let inputText = (new URL(document.location)).searchParams.get('tid');
    var selectData = []

    for(var i = 0; i < 9; i++) {
      var foundName = dataAll[i].name.match(inputText);
      var foundCity = dataAll[i].city.match(inputText);
      var foundClasstype = dataAll[i].classType.match(inputText);
      if(foundName) {        
        if(dataAll[i].name == foundName.input) {
          selectData.push(dataAll[i])
        }
      }else if(foundCity){
        if(dataAll[i].city == foundCity.input) {
          selectData.push(dataAll[i])
        }
      }else if(foundClasstype) {
        if(dataAll[i].classType == foundClasstype.input) {
          selectData.push(dataAll[i])
        }
      }
    }
    console.log(selectData)
    if(inputText) {
      createSelectElement(selectData, selectData.length)
    } else {
      createSelectElement(dataAll, dataAll.length)
    }
  }

  get()    

//search
var hideSearch = document.getElementById("hideSearch");

hideSearch.addEventListener("click", function(){
  var inputText = document.getElementById("inputText").value;
  var exploreHref = "./explore.html?tid=";
  var exploreHtml = exploreHref + inputText;
    window.location = exploreHtml
  })

//課程
  function createSelectElement(dataAll, length) {
    for (var j = 0; j < length; j++){
      classes(dataAll, j)
    }
  }
        
  function classes(dataSelect, j){
    var ul = document.createElement("UL");
    var a = document.createElement("a");
    var explorehref = "./course.html?tid=";
    var explorehtml = explorehref + dataSelect[j].creatTime;
    a.href = explorehtml;
    ul.className = "bg3Block";
    ul.id = "bg3Block" + [j];
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
        squareUrl.id = "locationimg" + [j];
        node.className = "locationimgover";
        node.appendChild(squareUrl);
      }
      else if (i == 2){
        var name = document.createTextNode(dataSelect[j].name);
        node.className = "locationh1";
        node.id = "locationh1" + [j];
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
        var bg3 = document.getElementById("bg3")
        bg3.appendChild(ul);
    }
    //新增星星
  var bg3BlockURL =	"https://frankyeah.github.io/Front-Enter/images/star-border.svg";
  var bg3BlockURL2 = "https://frankyeah.github.io/Front-Enter/images/star-background.svg"
  // for(var j =0; j < 9; j ++){
    // let bg3Block = document.getElementById("bg3Block" + [j]);
    // console.log(bg3Block)
    //白星星
    let bg3BlockCollect = document.createElement("DIV");
    bg3BlockCollect.className = "bg3BlockCollect";
    bg3BlockCollect.id = "bg3BlockCollect" + [j];
    ul.appendChild(bg3BlockCollect);
    document.getElementById("bg3BlockCollect" + [j]).style.backgroundImage = `url(${bg3BlockURL})`;
    document.getElementById("bg3BlockCollect" + [j]).style.display = "block";
    bg3BlockCollect.onclick = whiteCollect;
  //   //黑星星
    let bg3BlackBlockCollect = document.createElement("DIV");
    bg3BlackBlockCollect.className = "bg3BlackBlockCollect";
    bg3BlackBlockCollect.id = "bg3BlackBlockCollect" + [j];
    ul.appendChild(bg3BlackBlockCollect);
    document.getElementById("bg3BlackBlockCollect" + [j]).style.backgroundImage = `url(${bg3BlockURL2})`;
    document.getElementById("bg3BlackBlockCollect" + [j]).style.display = "none";
    bg3BlackBlockCollect.onclick = BlackCollect;

  //   //判斷localStorage
  //   console.log(squareUrl)
    let srcClass = document.getElementById("locationimg" + [j]).src;
    let nameClass = document.getElementById("locationh1" + [j]).innerHTML;

    if(localStorage.getItem('name') == null){
      var srcClassAll = [];
      var nameClassAll = [];
    }else{
      srcClassAll = JSON.parse(localStorage.getItem('src'));
      nameClassAll = JSON.parse(localStorage.getItem('name'));
    }
    
  //   //判斷星星顏色
      for(var k = 0; k < 9; k++){
        if(nameClass == nameClassAll[k]){
          bg3BlockCollect.style.display = "none";
          bg3BlackBlockCollect.style.display = "block";
        }
      }
    
  //   //white function
    function whiteCollect(){
      bg3BlockCollect.style.display = "none";
      bg3BlackBlockCollect.style.display = "block";
      
      srcClassAll.push(srcClass);
      nameClassAll.push(nameClass);
      localStorage.setItem('src',JSON.stringify(srcClassAll));
      localStorage.setItem('name',JSON.stringify(nameClassAll));
    }
  //   //black function
    function BlackCollect(){
      bg3BlockCollect.style.display = "block";
      bg3BlackBlockCollect.style.display = "none";

      for(var k = 0; k < 9; k++){
        if(nameClass == JSON.parse(localStorage.getItem('name'))[k]){
          srcClassAll.splice(k,1);
          nameClassAll.splice(k,1);
          localStorage.setItem('src',JSON.stringify(srcClassAll));
          localStorage.setItem('name',JSON.stringify(nameClassAll));
        }
      } 
    }
  // }  


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
  