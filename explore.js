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
  