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
    console.log(123)
  }else
    document.getElementById("memberInfo").style.display = "block";
    document.getElementById("memberCollectDiv").style.display = "none";
})

memberCollect.addEventListener("click", function(){
  if(document.getElementById("memberInfo").style.display == "block" &&
  document.getElementById("memberCollectDiv").style.display == "none" ){
    document.getElementById("memberInfo").style.display = "none";
    document.getElementById("memberCollectDiv").style.display = "block";
    console.log(456)
  }else
    document.getElementById("memberInfo").style.display = "none";
    document.getElementById("memberCollectDiv").style.display = "block";
})


//member 修改資料與確認
var memberRevise = document.getElementById("memberRevise");
var memberConfirm = document.getElementById("memberConfirm");
var memberCancel = document.getElementById("memberCancel");
//style.display 用function代入
memberRevise.addEventListener("click", function(){
  if(document.getElementById("memberRevise").style.display == "block" &&
  document.getElementById("memberCheck").style.display == "none"){
    document.getElementById("memberRevise").style.display = "none";
    document.getElementById("memberCheck").style.display = "block";
  }
})

memberConfirm.addEventListener("click", function(){
  if(document.getElementById("memberRevise").style.display == "none" &&
  document.getElementById("memberCheck").style.display == "block"){
    document.getElementById("memberRevise").style.display = "block";
    document.getElementById("memberCheck").style.display = "none";
  }
})

memberCancel.addEventListener("click", function(){
  if(document.getElementById("memberRevise").style.display == "none" &&
  document.getElementById("memberCheck").style.display == "block"){
    document.getElementById("memberRevise").style.display = "block";
    document.getElementById("memberCheck").style.display = "none";
  }
})