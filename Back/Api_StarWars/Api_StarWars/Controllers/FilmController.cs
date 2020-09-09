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
    [RoutePrefix("api/film")]
    public class FilmController : ApiController
    {
        ProxiFilm proxi;
        List<Film> films;

        public FilmController()
        {
            proxi = new ProxiFilm();
            films = new List<Film>();
        }


        [HttpGet]
        [Route("getFilms")]
        [ResponseType(typeof(List<Film>))]
        public IHttpActionResult GetFilms()
        {
            try
            {
                films = proxi.GetFilms();
                return ResponseMessage(Request.CreateResponse(System.Net.HttpStatusCode.OK, films));
            }
            catch(Exception e)
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
