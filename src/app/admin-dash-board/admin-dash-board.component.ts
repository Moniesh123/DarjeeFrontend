import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.css']
})
export class AdminDashBoardComponent implements AfterViewInit {

  @ViewChildren('leftBar', { read: ElementRef }) leftBars: QueryList<ElementRef<HTMLDivElement>> | any;
  @ViewChildren('rightBar', { read: ElementRef }) rightBars: QueryList<ElementRef<HTMLDivElement>> | any;

  progressBars = [
    { value: 25 },
    { value: 60 },
    // Add more progress bars as needed with different values
  ];

  ngAfterViewInit() {
    this.progressBars.forEach((progress, index) => {
      const left = this.leftBars.toArray()[index];
      const right = this.rightBars.toArray()[index];

      if (progress.value > 0) {
        if (progress.value <= 50) {
          right.nativeElement.style.transform = `rotate(${this.percentageToDegrees(progress.value)}deg)`;
        } else {
          right.nativeElement.style.transform = 'rotate(180deg)';
          left.nativeElement.style.transform = `rotate(${this.percentageToDegrees(progress.value - 50)}deg)`;
        }
      }
    });
  }

  private percentageToDegrees(percentage: number): number {
    return (percentage / 100) * 360;
  }
}
