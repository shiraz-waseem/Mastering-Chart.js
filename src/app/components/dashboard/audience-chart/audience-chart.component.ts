import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-audience-chart',
  templateUrl: './audience-chart.component.html',
  styleUrls: ['./audience-chart.component.scss'],
})
export class AudienceChartComponent {
  genderChartData: ChartData<'pie'> = {
    // x axis
    labels: ['Male', 'Female'],
    // y axis
    datasets: [
      {
        data: [75, 25],
        borderWidth: 0,
        // group name
        backgroundColor: ['blue', 'pink'],
      },
    ],
  };

  geoChartData: ChartData<'doughnut'> = {
    // x axis
    labels: ['Pakistan', 'India', 'Nepal', 'Bangladesh', 'United States'],
    // y axis
    datasets: [
      {
        data: [75, 60, 50, 40, 30],
        borderWidth: 0,
        label: 'Male',
      },

      // If theres a second group it will come inside
      {
        data: [45, 50, 20, 20, 30],
        borderWidth: 0,
        label: 'Female',
      },
    ],
  };
}
