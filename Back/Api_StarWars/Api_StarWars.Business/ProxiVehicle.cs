using Api_StarWars.Entities;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Api_StarWars.Business
{
    public class ProxiVehicle
    {
        private string UrlApi
        {
            get { return ConfigurationManager.AppSettings["UrlStarWarsApi"]; }
        }

        public List<Vehicle> GetVehicles()
        {
            Vehicles vehicles = new Vehicles();

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.GetAsync(string.Concat(this.UrlApi + "vehicles")).Result;

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string responseBody = response.Content.ReadAsStringAsync().Result;
                    vehicles = JsonConvert.DeserializeObject<Vehicles>(responseBody);
                }
            }

            return vehicles.results;
        }
    }
}
