import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountingServiceService {
  private accountsWithBalance : Map<string, number> = new Map();

  constructor() { }

  public async createAccount(accountID:string):Promise<void> {
    if(this.accountsWithBalance.has(accountID)){
      throw Error("ACCOUNT_EXISTS");
    }
    this.accountsWithBalance.set(accountID,0);
  }

  public async topUp(accountId:string, amount:number): Promise<number|undefined>{
    if(!this.accountsWithBalance.has(accountId)){
      throw Error("ACCOUNT_DOES_NOT_EXISTS");
    }else{
      if(this.accountsWithBalance.get(accountId) == undefined){
        throw Error("ACCOUNT_UNDEFINED");
      }else if(await amount! <= 0){
        throw Error("VALUE_UNDER_OR_EQUAL_TO_ZERO")
      }else{
        this.accountsWithBalance.set(accountId,this.accountsWithBalance.get(accountId)!+ amount);
        return this.accountsWithBalance.get(accountId);
      }
      
    }
  }
}
