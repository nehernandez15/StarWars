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
    [RoutePrefix("api/spaceShip")]
    public class SpaceShipController : ApiController
    {
        ProxiSpaceShip proxi;
        List<SpaceShip> spaceShips;

        public SpaceShipController()
        {
            proxi = new ProxiSpaceShip();
            spaceShips = new List<SpaceShip>();
        }

        [HttpGet]
        [Route("getSpaceShips")]
        [ResponseType(typeof(List<SpaceShip>))]
        public IHttpActionResult GetSpaceShips()
        {
            try
            {
                spaceShips = proxi.GetSpaceShips();
                return ResponseMessage(Request.CreateResponse(System.Net.HttpStatusCode.OK, spaceShips));
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
