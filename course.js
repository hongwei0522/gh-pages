//JSON
    const course_url = 'https://front-enter.firebaseio.com/list.json';
        async function getISS() {
            const response = await fetch(course_url);
            const dataAll = await response.json();
            
            // console.log(location.searchParams.toString()); 
            
            function courseUrl(){
              for (var i = 0; i < dataAll.length; i++){
                var courseHref = "?tid=" + dataAll[i].creatTime
                // console.log(dataAll[i].name)
                
                
                if(courseHref == location.search){
                document.getElementById('bg1word1').textContent = dataAll[i].name;
                document.getElementById('coursep').innerHTML = dataAll[i].content;
                document.getElementById('city').textContent = dataAll[i].city;
                document.getElementById('classType').textContent = dataAll[i].classType;
                document.getElementById('teachWay').textContent = dataAll[i].teachWay;
                document.getElementById('totalDay').textContent = dataAll[i].totalDay;
                document.getElementById('weekHour').textContent = dataAll[i].weekHour;
                document.getElementById('technology').textContent = dataAll[i].technology;
                document.getElementById('mail').textContent = dataAll[i].mail;
                document.getElementById('phone').textContent = dataAll[i].phone;
                
              }
              }
            }
              courseUrl()  
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