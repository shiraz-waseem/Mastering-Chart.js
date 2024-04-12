import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-subscribers-watchtime-chart',
  templateUrl: './subscribers-watchtime-chart.component.html',
  styleUrls: ['./subscribers-watchtime-chart.component.scss'],
})
export class SubscribersWatchtimeChartComponent {
  data: ChartData<'bar'> = {
    // x axis
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
    ],
    // y axis
    datasets: [
      {
        data: this.getSubs(),
        // group name
        label: 'Subs',
      },

      {
        data: this.getWatchTime(),
        label: 'WatchTime',
      },
    ],
  };

  getSubs() {
    return [100, 200, 300, 250, 500, 450, 150, 200, 550, 350, 200, 300];
  }

  getWatchTime() {
    return [10, 20, 300, 50, 500, 40, 350, 400, 150, 250, 210, 340];
  }
}
