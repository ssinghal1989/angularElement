import { Component, Input, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { DataService } from "./data.service";


@Component({
    selector: 'app-graph',
    template: '<div><chart [type]="type" [data]="graphData" #graph [options]="options"></chart></div>',
    styles: [`
        div {
            border: 1px solid black;
            background: 'salmon';
            padding: 10px;
        }
    `],
    providers: [DataService]
})

export class GraphComponent implements OnInit, AfterViewInit {
    @Input() graphData: any;
    @Input() data: any;
    @ViewChild('graph') graph; 
    dataFromAPI: any;
    type = 'bar';
    options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    constructor(private dataService: DataService) {
    }

    ngAfterViewInit() {
        console.log(this.graph);
    }
    ngOnInit() {
        // this.dataService.getGraphData().subscribe(
        //     data => {
        //         this.dataFromAPI = data;
        //         this.graph.data = this.dataFromAPI;
        //         this.graph.create();
        //     }
        // );
        this.graphData = JSON.parse(this.graphData);
    }
}