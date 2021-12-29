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

//收藏
var collectSrc = JSON.parse(localStorage.getItem('src'))
var collectName = JSON.parse(localStorage.getItem('name'))

createI()

//設定i代入
function createI(){
  for(var i = 0; i < collectSrc.length; i++){
    if(collectSrc[i] !== undefined){
      newDiv(i);
      createNewCollect(i)
    }
  }
}
//變更localstorage的順序
function createNewCollect(i){
  let memberDeleteButton = document.getElementById("memberDelete" + [i]);
  let memberDiv = document.getElementById("memberDiv" + [i]);
  let number = [i];
  memberDeleteButton.addEventListener("click", function(){
    memberDiv.remove();
    collectSrc.splice(number,1);
    collectName.splice(number,1);
    localStorage.setItem('src',JSON.stringify(collectSrc));
    localStorage.setItem('name',JSON.stringify(collectName));
    document.getElementById("memberCollectDivstyle").innerHTML = '';
    createI()
  })
}
//新增收藏DIV
function newDiv(i){
  console.log(i)
  let memberCollectDiv = document.getElementById("memberCollectDivstyle");
  let memberDiv = document.createElement("div");
  memberDiv.className = "member-collect";
  memberDiv.id = "memberDiv" + [i];
  console.log(memberCollectDiv)
  console.log(memberDiv)
  memberCollectDiv.appendChild(memberDiv);
  let memberPhoto = document.createElement("img");
  memberPhoto.className = "member-classphoto";
  memberPhoto.src = collectSrc[i];
  memberDiv.appendChild(memberPhoto);
  let memberName = document.createElement("p")
  memberName.className = "member-classname";
  memberName.innerHTML = collectName[i];
  memberDiv.appendChild(memberName);
  let memberDelete = document.createElement("input");
  memberDelete.type = "button";
  memberDelete.className = "member-delete";
  memberDelete.id = "memberDelete"+ [i];
  memberDiv.appendChild(memberDelete);
}
