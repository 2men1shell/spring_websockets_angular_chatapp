import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    public user: User;
    @Output() registerData: EventEmitter<any> = new EventEmitter<any>();

    public registerForm: FormGroup;

    constructor(private location: Location) {
    }

    ngOnInit() {
        this.user = new User();
        this.registerForm = new FormGroup({
            'name': new FormControl(this.user.name, [Validators.required,
                Validators.minLength(2)]),
            'email': new FormControl(this.user.email),
            'password': new FormControl(this.user.password),
            'confirmPassword': new FormControl(this.user.confirmPassword)
        });
    }

    public goBack() {
        this.location.back();
    }

    public onSubmit() {
        this.registerData.emit(this.registerForm);
    }

}
