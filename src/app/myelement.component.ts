import { Component, ViewEncapsulation} from "@angular/core";
import { Input } from "@angular/core";
import { OnInit } from "@angular/core";


@Component({
    selector: 'app-myelement',
    templateUrl: './myelement.component.html',
    encapsulation: ViewEncapsulation.Native
})

export class MyelementComponent implements OnInit {
    @Input() type: string;
    @Input() data: any;

    ngOnInit() {
    }
}