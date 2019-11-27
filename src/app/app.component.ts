import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  handleNumber(gameNumber: number) {
    if (gameNumber % 2 == 0) {
      this.evens.push(gameNumber);
    } else {
      this.odds.push(gameNumber);
    }
  }
}
