using Backend.DTOs;
using Backend.Interfaces;
using Backend.Models;
using System.Text.Json;

namespace Backend.Services
{
    public class CurrencyService : ICurrencyService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public CurrencyService(HttpClient httpClient,
                               IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        public async Task<CurrencyResponse> ConvertCurrencyAsync(CurrencyRequest request)
        {
            try
            {
                var baseUrl = _configuration["CurrencyApi:BaseUrl"];

                var response = await _httpClient.GetAsync($"{baseUrl}{request.FromCurrency}");

                if (!response.IsSuccessStatusCode)
                {
                    return new CurrencyResponse
                    {
                        Success = false,
                        Message = "Failed to retrieve exchange rates."
                    };
                }

                var json = await response.Content.ReadAsStringAsync();

                var apiResponse = JsonSerializer.Deserialize<ExchangeRateApiResponse>(
                    json,
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });

                if (apiResponse == null ||
                    apiResponse.Result != "success")
                {
                    return new CurrencyResponse
                    {
                        Success = false,
                        Message = "Currency API returned an error."
                    };
                }

                if (!apiResponse.Rates.ContainsKey(request.ToCurrency))
                {
                    return new CurrencyResponse
                    {
                        Success = false,
                        Message = "Destination currency not found."
                    };
                }

                decimal rate = apiResponse.Rates[request.ToCurrency];

                decimal converted = request.Amount * rate;

                return new CurrencyResponse
                {
                    Success = true,
                    Amount = request.Amount,
                    ConvertedAmount = Math.Round(converted, 2),
                    ExchangeRate = rate,
                    FromCurrency = request.FromCurrency,
                    ToCurrency = request.ToCurrency,
                    Message = "Conversion successful."
                };
            }
            catch (Exception ex)
            {
                return new CurrencyResponse
                {
                    Success = false,
                    Message = ex.Message
                };
            }
        }
    }
}