import { Component } from '@angular/core';

@Component({
  selector: 'app-error404-page',
  templateUrl: "error404-page.component.html",
  styles: [
  ]
})
export class Error404PageComponent {

  redirect: Boolean = true;
  dots: string = ".";

  ngOnInit() {
    setTimeout(() => {
      if (this.redirect) {
        window.location.href = "./home";
      }
    }, 5000);
    setInterval(() => {
      if (this.dots.length < 3) {
        this.dots += ".";
      } else {
        this.dots = ".";
      }
    }, 1000);
  }
}
