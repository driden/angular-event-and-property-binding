import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-component",
  templateUrl: "./game-component.component.html",
  styleUrls: ["./game-component.component.css"]
})
export class GameComponentComponent {
  constructor() {}

  timeout: any;
  gameNumber: number = 0;

  @Output() gameStarted = new EventEmitter<number>();
  @Output() gameStopped = new EventEmitter<number>();

  onGameStarted() {
    this.timeout = setInterval(
      () => {this.gameStarted.emit(++this.gameNumber); console.log(this.gameNumber)},
      1000
    );
  }
  onGameStopped() {
    clearInterval(this.timeout);
  }
}
