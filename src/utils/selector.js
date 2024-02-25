export function selectorMessage(value){
    document.onmousedown = function(event) {//监听当前页面鼠标按下事件
        var event = event || window.event;//此处考虑兼容问题
        if (event.button == "0" || event.button == "1") {//判断按下的按键（0）
           document.onmouseup = function(event) {//监听页面中鼠标抬起事件
              var txt = "";
              if(window.getSelection){//兼容性判断，各浏览器获取有变化处的文字函数不同
                 txt = window.getSelection();//谷歌等内核浏览器获取方式
              }else{
                 txt = document.selection.createRange().text;//IE普通内核
              }
              value = txt.toString()
              console.log(value)
           }  
       }
    }
}