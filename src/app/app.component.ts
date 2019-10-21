import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpService} from './Services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngForm: FormGroup;

  constructor(private fb: FormBuilder,
              private httpServie: HttpService) {

    // this.ngForm = this.fb.group({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });

    this.ngForm = this.fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    });

  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    console.log('before', user);
    console.log('after', JSON.parse(user));

    this.consumeAPI();
  }

  submitForm($ev, values) {
    $ev.preventDefault();
    console.log(values);

    // storing in local storage
    localStorage.setItem('user', JSON.stringify(values));
    // setTimeout(() => {
    //   this.ngForm.reset()
    // }, 1000)
  }

  consumeAPI() {
    this.httpServie.getAll()
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }

}
