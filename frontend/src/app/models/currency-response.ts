export interface CurrencyResponse {

  success: boolean;

  amount: number;

  convertedAmount: number;

  exchangeRate: number;

  fromCurrency: string;

  toCurrency: string;

  message: string;

}
