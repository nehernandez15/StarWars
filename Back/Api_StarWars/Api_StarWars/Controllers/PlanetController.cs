using Api_StarWars.Business;
using Api_StarWars.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace Api_StarWars.Controllers
{
    [RoutePrefix("api/planet")]
    public class PlanetController : ApiController
    {
        ProxiPlanet proxi;
        List<Planet> planets;

        public PlanetController()
        {
            proxi = new ProxiPlanet();
            planets = new List<Planet>();
        }

        [HttpGet]
        [Route("getPlanets")]
        [ResponseType(typeof(List<Planet>))]
        public IHttpActionResult GetPlanets()
        {
            try
            {
                planets = proxi.GetPlanets();
                return ResponseMessage(Request.CreateResponse(System.Net.HttpStatusCode.OK, planets));
            }
            catch (Exception e)
            {
                var resp = new HttpResponseMessage(HttpStatusCode.InternalServerError)
                {
                    ReasonPhrase = e.Message
                };

                throw new HttpResponseException(resp);
            }
        }
    }
}
