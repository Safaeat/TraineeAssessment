using Backend.DTOs;

namespace Backend.Interfaces
{
    public interface ICurrencyService
    {
        Task<CurrencyResponse> ConvertCurrencyAsync(CurrencyRequest request);
    }
}