import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FooterComponent, HeaderComponent,CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm! : NgForm;
  //khai báo các biến tương ứng với các trường dữ liệu trong form
  phone: string;
  password: string;
  retypePassword: string;
  fullName: string;
  address: string;
  isAccepted: boolean;
  dateOfBirth: Date;

  constructor(){
    this.phone = '';
    this.password='';
    this.retypePassword='';
    this.fullName='';
    this.address='';
    this.isAccepted = false;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
  }
  onPhoneChange(){
    console.log(`Phone typed: ${this.phone}`);
  }
  register(){
    const message = `phone: ${this.phone}` + 
                    `password: ${this.password}` + 
                    `this.retypePassword: ${this.retypePassword}` + 
                    `fullName: ${this.fullName}` + 
                    `address: ${this.address}` +
                    `isAccepted: ${this.isAccepted}`+
                    `dateOfBirth: ${this.dateOfBirth}`
    alert(message);
  }
  //how to chekc password match ?
  checkPasswordMatch(){
    if(this.password !== this.retypePassword){
      this.registerForm.form.controls['retypePassword'].setErrors({'passwordMismatch': true});
    }else{
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }
  checkAge(){
    if(this.dateOfBirth){
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if(monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())){
        age--;
      }
      if(age < 18){
        this.registerForm.form.controls['dateOfBirth'].setErrors({'invalidAge':true});
      }else{
        this.registerForm.form.controls['dateOfBirth'].setErrors(null);
      }
    }
    // <p class="text-danger"
    //                         *ngIf="registerForm.form.controls['dateOfBirth']?.hasError('invalidAge') && registerForm.form.touched">
    //                         Bạn chưa đủ 18 tuổi
    //                     </p>
  }
}
