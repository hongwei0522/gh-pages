//JSON
    const courseurl = 'https://front-enter.firebaseio.com/list.json';
        async function get() {
            const response = await fetch(courseurl);
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
        get()

//輪播器
  var slideLeft = document.getElementById("slideLeft");
  var slideRight = document.getElementById("slideRight");
  var slideimg = document.getElementById("slideimg");
  var currentslideimg = 0;

  slideLeft.addEventListener("click", function(){
      if(currentslideimg == 0){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/AppWorksShool-rectangle.jpg`);
        currentslideimg = 5;
        currentslideimg--
        console.log(currentslideimg)
      }else if(currentslideimg == 4){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/7.jpg`);
        currentslideimg--
        console.log(currentslideimg)
      }else if(currentslideimg == 3){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/15.jpg`);
        currentslideimg--
        console.log(currentslideimg)
      }else if(currentslideimg == 2){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/13.jpg`);
        currentslideimg--
        console.log(currentslideimg)
      }else if(currentslideimg == 1){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/2.jpg`);
        currentslideimg--
        console.log(currentslideimg)
      }
  })

  slideRight.addEventListener("click", function(){
      if(currentslideimg == 0){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/AppWorksShool-rectangle.jpg`);
        currentslideimg++
        console.log(currentslideimg)
      }else if(currentslideimg == 4){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/7.jpg`);
        currentslideimg = -1;
        currentslideimg++
        console.log(currentslideimg)
      }else if(currentslideimg == 3){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/15.jpg`);
        currentslideimg++
        console.log(currentslideimg)
      }else if(currentslideimg == 2){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/13.jpg`);
        currentslideimg++
        console.log(currentslideimg)
      }else if(currentslideimg == 1){
        slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/2.jpg`);
        currentslideimg++
        console.log(currentslideimg)
      }
  })



  var img1 = document.getElementById('img1');
  img1.addEventListener("click", function(){
    currentslideimg = 1;
    slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/2.jpg`);
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
    currentslideimg = 2;
    slideimg.setAttribute("src",'https://frankyeah.github.io/Front-Enter/images/13.jpg');
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
    currentslideimg = 3;
  slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/15.jpg`);
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
    currentslideimg = 4;
    slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/7.jpg`);
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
    currentslideimg = 0;
    slideimg.setAttribute("src",`https://frankyeah.github.io/Front-Enter/images/AppWorksShool-rectangle.jpg`);
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