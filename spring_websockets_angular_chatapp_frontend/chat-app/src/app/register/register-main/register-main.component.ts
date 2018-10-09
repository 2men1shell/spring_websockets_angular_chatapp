import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-register-main',
    templateUrl: './register-main.component.html',
    styleUrls: ['./register-main.component.scss']
})
export class RegisterMainComponent implements OnInit {
    public registerForm = [];

    constructor() {
    }

    ngOnInit() {
    }

    doSomething(ceva) {
        console.log(ceva.value);
    }

}
