/**
 *  此处为不打包 jQuery 文件的处理方式
 */
// import * as $ from "jquery";
let scriptNode = document.createElement('script');
scriptNode.src = 'https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js';
document.documentElement.appendChild(scriptNode);
export class App {
  public addComment(): void {
    let creatAt = new Date();
    $("#main").append(
      "<div><span>new comment pushed at." + creatAt.toTimeString() + "</span></div>"
    );
  }
}
let app = new App();
scriptNode.onload = ()=>{
  console.log(333333);
  
  $("#btn-add").click(app.addComment);
}