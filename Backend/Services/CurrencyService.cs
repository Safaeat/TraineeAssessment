using Backend.DTOs;
using Backend.Interfaces;

namespace Backend.Services
{
    public class CurrencyService : ICurrencyService
    {
        public async Task<CurrencyResponse> ConvertCurrencyAsync(CurrencyRequest request)
        {
            return await Task.FromResult(new CurrencyResponse());
        }
    }
}