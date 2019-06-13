import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations-chart',
  templateUrl: './operations-chart.component.html',
  styleUrls: ['./operations-chart.component.css']
})
export class OperationsChartComponent implements OnInit {

  constructor() {
    let options = {
      chart: {
        type: 'donut',
        height: 320
      },
      colors:['#4f6fff', '#ffa331', '#ff1711', '#1bc600'],
      dataLabels: {
        enabled: false,
      },
      labels: ['Ouvert', 'Non ouvert', 'Délivré', 'Ajout/Mise à jour des données'],
      plotOptions: {
        pie: {
          size: 85,
          donut: {
            size: '85%'
          }
        }
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'left',
        offsetY: 30,
        itemMargin: {
          horizontal: 0,
          vertical: 20
        },
        labels: {
          colors: ['#B3B3B3']
        },
      },
      series: [30, 30, 15, 60],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }

    // let chart = new ApexCharts(document.querySelector('#chart'), options);
    // chart.render();
  }

  ngOnInit() {
  }

}
