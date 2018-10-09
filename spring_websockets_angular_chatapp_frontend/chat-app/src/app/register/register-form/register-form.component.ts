import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {PasswordValidation} from './password-validation';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

    public user: User;
    @Output() registerData: EventEmitter<any> = new EventEmitter<any>();

    public registerForm = this.formBuilder.group({
        name: [''],
        email: [''],
        passwords: this.formBuilder.group({
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, {
            validator: PasswordValidation.matchPassword // your validation method
        })
    });

    constructor(private location: Location, private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.user = new User();
        // this.registerForm = new FormGroup({
        //     'name': new FormControl(this.user.name, [Validators.required,
        //         Validators.minLength(2)]),
        //     'email': new FormControl(this.user.email),
        //     'password': new FormControl(this.user.password),
        //     'confirmPassword': new FormControl(this.user.confirmPassword)
        // });
    }

    public goBack() {
        this.location.back();
    }

    public onSubmit() {
        this.registerData.emit(this.registerForm);
    }

}
