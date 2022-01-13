//題目：費氏數列
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] ，請用 JavaScript 求解陣列的最後一個值。

// 最後結果呈現，呼叫 function 如 getFib ：
// getFib(6) = 8
// getFib(10) = 55

// let Fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
// function getFib(x){
//     let test = 11
//     let hi = x
//     return test + hi
// }
// getFib(2)


//第一題 x(0) x(1)問題
function getFib(x){
    let a = [];
    for(let i = 0; i < x; i++){
        if(i<2){
            a.push(i)
        }else{
            b = a[i-1] + a[i-2]
            a.push(b)
        }
    }
    return a[x-1] + a[x-2]
}

getFib(10)

//第二題 todolist
//newList
let newList = document.getElementById("newList");
let innerList = document.getElementById("innerList");
let content = []
console.log(JSON.parse(localStorage.getItem('list')))
if(JSON.parse(localStorage.getItem('list')) == null){
    memorandum()
}else if(JSON.parse(localStorage.getItem('list')).length == 0){
    memorandum()
}else{
    console.log(JSON.parse(localStorage.getItem('list')).length)
    let contentDiv2 = document.createElement("DIV");
    let contentList = document.createElement("input");
    let deleteList = document.createElement("input");
    let changeList = document.createElement("input");
    let confineList = document.createElement("input");
    let cancelList = document.createElement("input");

    for(let k = 0; k < JSON.parse(localStorage.getItem('list')).length; k++){
        if(JSON.parse(localStorage.getItem('list')).length !== 0){
            console.log(k)
            contentDiv.appendChild(contentDiv2)
            contentDiv2.id = "contentDiv2"+ [k];

            contentDiv2.appendChild(contentList)
            contentList.id = "contentList" + [k];
            contentList.className = "contentList";
            contentList.disabled = true;
            let listContent = document.getElementById("contentList" + [k]);

            contentDiv2.appendChild(deleteList)
            deleteList.id = "deleteList" + [k];
            deleteList.className = "deleteList";
            deleteList.type = "button";
            deleteList.value = "刪除";
            contentList.value = JSON.parse(localStorage.getItem('list'))[k];
            let listDelete = document.getElementById("deleteList" + [k]);
            listDelete.onclick = contentDelete

            contentDiv2.appendChild(changeList)
            changeList.id = "changeList" + [k];
            changeList.type = "button";
            changeList.value = "編輯";
            changeList.style.display="block";
            changeList.onclick = changebtn

            contentDiv2.appendChild(confineList)
            confineList.id = "confineList"  + [k];
            confineList.type = "button";
            confineList.value = "確定";
            confineList.style.display="none";
            confineList.onclick = confinebtn

            contentDiv2.appendChild(cancelList)
            cancelList.id = "confineList"  + [k];
            cancelList.type = "button";
            cancelList.value = "取消";
            cancelList.style.display="none";
            cancelList.onclick = cancelbtn

            function contentDelete(){
                for(let j = 0; j < content.length; j++){
                    if(listContent.value == JSON.parse(localStorage.getItem('list'))[j]){
                        content.splice(j,1);
                        localStorage.setItem('list',JSON.stringify(content));
                        listDelete.parentNode.remove();
                    }
                }
            }       
            function changebtn(){
                changeList.style.display="none";
                confineList.style.display="block";
                cancelList.style.display="block";
                contentList.disabled = false; 
            }
            function confinebtn(){
                changeList.style.display="block";
                confineList.style.display="none";
                cancelList.style.display="none";
                contentList.disabled = true;
                content.splice(k,1);
                localStorage.setItem('list',JSON.stringify(content));
                let replace = content.splice(i,0,listContent.value);
                content.push.replace;
                localStorage.setItem('list',JSON.stringify(content));
            }
            function cancelbtn(){
                changeList.style.display="block";
                confineList.style.display="none";
                cancelList.style.display="none";
                contentList.disabled = true;
                listContent.value = JSON.parse(localStorage.getItem('list'))[i];
            }
        }
    }
}

function memorandum(){
    newList.addEventListener('click',function(){
        if(innerList.value != ""){
            let contentDiv2 = document.createElement("DIV");
            let contentList = document.createElement("input");
            let deleteList = document.createElement("input");
            let changeList = document.createElement("input");
            let confineList = document.createElement("input");
            let cancelList = document.createElement("input");
    
            content.push(innerList.value);
            localStorage.setItem('list',JSON.stringify(content));
            
            for(let i = 0; i < content.length; i++){
                
                contentDiv.appendChild(contentDiv2)
                contentDiv2.id = "contentDiv2"+ [i];
    
                contentDiv2.appendChild(contentList)
                contentList.id = "contentList" + [i];
                contentList.className = "contentList";
                contentList.disabled = true;
                let listContent = document.getElementById("contentList" + [i]);
    
                contentDiv2.appendChild(deleteList)
                deleteList.id = "deleteList" + [i];
                deleteList.className = "deleteList";
                deleteList.type = "button";
                deleteList.value = "刪除";
                contentList.value = JSON.parse(localStorage.getItem('list'))[i];
                let listDelete = document.getElementById("deleteList" + [i]);
                listDelete.onclick = contentDelete
    
                contentDiv2.appendChild(changeList)
                changeList.id = "changeList" + [i];
                changeList.type = "button";
                changeList.value = "編輯";
                changeList.style.display="block";
                changeList.onclick = changebtn
    
                contentDiv2.appendChild(confineList)
                confineList.id = "confineList"  + [i];
                confineList.type = "button";
                confineList.value = "確定";
                confineList.style.display="none";
                confineList.onclick = confinebtn
    
                contentDiv2.appendChild(cancelList)
                cancelList.id = "confineList"  + [i];
                cancelList.type = "button";
                cancelList.value = "取消";
                cancelList.style.display="none";
                cancelList.onclick = cancelbtn
    
                function contentDelete(){
                    for(let j = 0; j < content.length; j++){
                        if(listContent.value == JSON.parse(localStorage.getItem('list'))[j]){
                            content.splice(j,1);
                            localStorage.setItem('list',JSON.stringify(content));
                            listDelete.parentNode.remove();
                        }
                    }
                }       
                function changebtn(){
                    changeList.style.display="none";
                    confineList.style.display="block";
                    cancelList.style.display="block";
                    contentList.disabled = false; 
                }
                function confinebtn(){
                    changeList.style.display="block";
                    confineList.style.display="none";
                    cancelList.style.display="none";
                    contentList.disabled = true;
                    content.splice(i,1);
                    localStorage.setItem('list',JSON.stringify(content));
                    let replace = content.splice(i,0,listContent.value);
                    content.push.replace;
                    localStorage.setItem('list',JSON.stringify(content));
                }
                function cancelbtn(){
                    changeList.style.display="block";
                    confineList.style.display="none";
                    cancelList.style.display="none";
                    contentList.disabled = true;
                    listContent.value = JSON.parse(localStorage.getItem('list'))[i];
                }
            }
        }
    })
}
