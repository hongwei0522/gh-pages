//登出
var memberSignout = document.getElementById("memberSignout");
memberSignout.addEventListener("click", function(){
  firebase.auth().signOut().then(function() {
    window.location.reload();
    window.location.href="./index.html";
  }, function(error) {
  })
})

//個人資料&收藏
var memberProfile = document.getElementById("memberProfile");
var memberCollect = document.getElementById("memberCollect");

memberProfile.addEventListener("click", function(){
  if(document.getElementById("memberInfo").style.display == "block" &&
  document.getElementById("memberCollectDiv").style.display == "none" ){
    document.getElementById("memberInfo").style.display = "block";
    document.getElementById("memberCollectDiv").style.display = "none";
  }else
    document.getElementById("memberInfo").style.display = "block";
    document.getElementById("memberCollectDiv").style.display = "none";
})

memberCollect.addEventListener("click", function(){
  if(document.getElementById("memberInfo").style.display == "block" &&
  document.getElementById("memberCollectDiv").style.display == "none" ){
    document.getElementById("memberInfo").style.display = "none";
    document.getElementById("memberCollectDiv").style.display = "block";
  }else
    document.getElementById("memberInfo").style.display = "none";
    document.getElementById("memberCollectDiv").style.display = "block";
})

