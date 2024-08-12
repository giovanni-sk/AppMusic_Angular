import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.component.html',
  styleUrl: './chronometre.component.css'
})
export class ChronometreComponent implements OnInit {
  secondsElapsed: number = 0; // Nombre de secondes écoulées
  formattedTime: string = '00h00m00s'; // Temps formaté à afficher

  ngOnInit(): void {
    this.startChronometer();
  }

  startChronometer(): void {
    setInterval(() => {
      this.secondsElapsed++;
      this.updateFormattedTime();
    }, 1000); // Exécuter toutes les secondes
  }

  updateFormattedTime(): void {
    const hours = Math.floor(this.secondsElapsed / 3600);
    const minutes = Math.floor((this.secondsElapsed % 3600) / 60);
    const seconds = this.secondsElapsed % 60;

    this.formattedTime = 
      `${this.pad(hours)}h${this.pad(minutes)}m${this.pad(seconds)}s`;
  }

  pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}