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
    [RoutePrefix("api/character")]
    public class CharacterController : ApiController
    {
        ProxiCharacter proxi;
        List<Character> characters;

        public CharacterController()
        {
            proxi = new ProxiCharacter();
            characters = new List<Character>();
        }


        [HttpGet]
        [Route("getCharacters")]
        [ResponseType(typeof(List<Character>))]
        public IHttpActionResult GetCharacters()
        {
            try
            {
                characters = proxi.GetCharacters();
                return ResponseMessage(Request.CreateResponse(System.Net.HttpStatusCode.OK, characters));
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
