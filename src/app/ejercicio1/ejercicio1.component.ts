import { Component } from '@angular/core';
import { Loan } from '../modelo/Loan';
import { ConventionalLoan } from '../modelo/ConventionalLoan';
@Component({
  selector: 'app-ejercicio1',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  
  ejercicio1(){
    function calculateInterestOnlyLoanPayment(loanTerms:Loan):string {
      // Calculates the monthly payment of an interest only loan
      let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the
      
      let payment;
      payment = loanTerms.principal * interest;
      return 'The interest only loan payment is ' + payment.toFixed(2);
      }
  
    function calculateConventionalLoanPayment(loanTerms2:ConventionalLoan) {
      // Calculates the monthly payment of a conventional loan
      let interest = loanTerms2.interestRate / 1200; // Calculates the Monthly Interest Rate of the
      let payment;
      payment = loanTerms2.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms2.months)));
      return 'The conventional loan payment is ' + payment.toFixed(2);
  }
  let loanTerms:Loan = {principal:30000, interestRate:5};
  let interestOnlyPayment = calculateInterestOnlyLoanPayment(loanTerms);
  let loanTerms2: ConventionalLoan= {principal:30000,interestRate:5,months:180}
  let conventionalPayment = calculateConventionalLoanPayment(loanTerms2);

  console.log(interestOnlyPayment);
  console.log(conventionalPayment);
}
}
