﻿using Api_StarWars.Business;
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
    [RoutePrefix("api/specie")]
    public class SpecieController : ApiController
    {
        ProxiSpecie proxi;
        List<Specie> species;

        public SpecieController()
        {
            proxi = new ProxiSpecie();
            species = new List<Specie>();
        }

        [HttpGet]
        [Route("getSpecies")]
        [ResponseType(typeof(List<Specie>))]
        public IHttpActionResult GetSpecies()
        {
            try
            {
                species = proxi.GetSpecies();
                return ResponseMessage(Request.CreateResponse(System.Net.HttpStatusCode.OK, species));
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
