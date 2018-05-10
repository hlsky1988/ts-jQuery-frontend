import * as $ from "jquery";
export class App {
  public addComment(): void {
    let creatAt = new Date();
    $("#main").append(
      "<div><span>new comment pushed at." + creatAt.toTimeString() + "</span></div>"
    );
  }
}
let app = new App();
$(() => {
  console.log(333333);
  
  $("#btn-add").click(app.addComment);
});
