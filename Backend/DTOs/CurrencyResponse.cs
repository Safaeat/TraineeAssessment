namespace Backend.DTOs
{
    public class CurrencyResponse
    {
        public bool Success { get; set; }

        public decimal Amount { get; set; }

        public decimal ConvertedAmount { get; set; }

        public decimal ExchangeRate { get; set; }

        public string FromCurrency { get; set; } = string.Empty;

        public string ToCurrency { get; set; } = string.Empty;

        public string Message { get; set; } = string.Empty;
    }
}