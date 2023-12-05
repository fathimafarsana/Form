using Microsoft.AspNetCore.Mvc;
using System;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private static readonly string[] Cities = new[]
        {
         "New York", "London", "Paris", "Tokyo", "Sydney", "Berlin", "Los Angeles", "Rio de Janeiro", "Moscow", "Dubai"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();

            return Enumerable.Range(1, 5).Select(index =>
            {
                var randomIndex = rng.Next(Summaries.Length);
                return new WeatherForecast
                {
                    Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                    TemperatureC = rng.Next(-20, 55),
                    Summary = Summaries[randomIndex],
                    City = Cities[randomIndex]
                };
            })
            .ToArray();
        }
    }
}
