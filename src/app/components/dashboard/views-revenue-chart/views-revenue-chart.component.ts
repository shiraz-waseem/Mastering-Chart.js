import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-views-revenue-chart',
  templateUrl: './views-revenue-chart.component.html',
  styleUrls: ['./views-revenue-chart.component.scss'],
})
export class ViewsRevenueChartComponent {
  data: ChartData<'line'> = {
    // x axis
    labels: this.getLabels(),
    // y axis
    datasets: [
      {
        data: this.getViews(),
        // group name
        label: 'Views',
      },

      {
        data: this.getRevenue(),
        label: 'Revenue',
      },
    ],
  };

  getLabels(): string[] {
    var labels = [];
    for (var i = 0; i < 31; i++) {
      labels.push(i + 1 + 'Dec');
    }

    return labels;
  }

  getViews(): number[] {
    var data = [];
    for (var i = 0; i < 31; i++) {
      data.push(Math.random() * 10000);
    }

    return data;
  }

  getRevenue(): number[] {
    var data = [];
    for (var i = 0; i < 31; i++) {
      data.push(Math.random() * 9000);
    }

    return data;
  }
}
