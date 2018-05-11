/**
 *  此处为不打包 jQuery 文件的处理方式
 */
// import * as $ from "jquery";   // 保留这一行注释为了让typescript识别$
function NewScript(url:string) {
  let scriptNode = document.createElement("script");
  scriptNode.src = url;
  document.documentElement.appendChild(scriptNode);
  return scriptNode
}

// let JQNode = NewScript('https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js');

function App() {
  this.addComment = function() {
    let creatAt = new Date();
    $("#main").append(
      "<div><span>new comment pushed at." +
        creatAt.toTimeString() +
        "</span></div>"
    );
  };
}

let app = new App();
// JQNode.onload = () => {
//   console.log(333333);
//   $("#btn-add").click(app.addComment);
//   $('#main').html('13212313131')
// };

$(document).ready(function () {
    console.log(333333);
  $("#btn-add").click(app.addComment);
  $('#main').html('13212313131')
})