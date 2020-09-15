using Api_StarWars.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Api_StarWars.Business
{
    public class ProxiSpecie
    {
        private string UrlApi
        {
            get { return ConfigurationManager.AppSettings["UrlStarWarsApi"]; }
        }

        public List<Specie> GetSpecies()
        {
            Species species = new Species();

            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.GetAsync(string.Concat(this.UrlApi + "species")).Result;

                if (response.StatusCode == System.Net.HttpStatusCode.OK)
                {
                    string responseBody = response.Content.ReadAsStringAsync().Result;
                    species = JsonConvert.DeserializeObject<Species>(responseBody);
                }
            }

            return species.results;
        }
    }
}
