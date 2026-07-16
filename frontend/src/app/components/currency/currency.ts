import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CurrencyService } from '../../services/currency';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './currency.html',
  styleUrl: './currency.css'
})
export class Currency {

  private currencyService = inject(CurrencyService);

  amount = 100;

  fromCurrency = 'USD';

  toCurrency = 'BDT';

  convertedAmount = 0;

  exchangeRate = 0;

  message = '';

  currencies = [
    'USD',
    'EUR',
    'GBP',
    'BDT',
    'INR',
    'JPY',
    'CAD',
    'AUD'
  ];

  convert() {

    this.currencyService.convert({

      fromCurrency: this.fromCurrency,

      toCurrency: this.toCurrency,

      amount: this.amount

    }).subscribe({

      next: (response) => {

        this.convertedAmount = response.convertedAmount;

        this.exchangeRate = response.exchangeRate;

        this.message = response.message;

      },

      error: (error) => {

        console.log(error);

        alert('Conversion Failed');

      }

    });

  }

}
