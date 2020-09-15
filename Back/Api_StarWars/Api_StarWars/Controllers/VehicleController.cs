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
    [RoutePrefix("api/vehicle")]
    public class VehicleController : ApiController
    {
        ProxiVehicle proxi;
        List<Vehicle> vehicles;

        public VehicleController()
        {
            proxi = new ProxiVehicle();
            vehicles = new List<Vehicle>();
        }

        [HttpGet]
        [Route("getVehicles")]
        [ResponseType(typeof(List<Vehicle>))]
        public IHttpActionResult GetVehicles()
        {
            try
            {
                vehicles = proxi.GetVehicles();
                return ResponseMessage(Request.CreateResponse(System.Net.HttpStatusCode.OK, vehicles));
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
