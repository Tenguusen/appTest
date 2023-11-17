import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountingServiceService } from 'src/app/service/accounting-service.service';

@Component({
  selector: 'app-accounting-component',
  templateUrl: './accounting-component.component.html',
  styleUrls: ['./accounting-component.component.css']
})
export class AccountingComponentComponent{
  
  //Account Creation Form
  accountCreationForm = new FormGroup({
    createAccountInput: new FormControl('')
  });
  //Deposit Form
  depositForm = new FormGroup({
    topupAccountInput: new FormControl(''),
    topupAmountInput: new FormControl('')
  });

  constructor(private accountingService : AccountingServiceService){}

  accountCreationSubmit(){
    this.accountingService.createAccount(this.accountCreationForm.value.createAccountInput!)
    console.log(this.accountCreationForm.value.createAccountInput)
  }

  depositSubmit(){
    this.accountingService.topUp(this.depositForm.value.topupAccountInput!,parseInt(this.depositForm.value.topupAmountInput!))

    console.log(this.depositForm.value.topupAccountInput)
    console.log(this.depositForm.value.topupAmountInput)
  }


}
