using System.Collections.Generic;

namespace Api_StarWars.Entities
{
    public class Film
    {
        public string title { get; set; }
        public string opening_crawl { get; set; }
    }

    public class Films
    {
        public List<Film> results { get; set; }
    }

    
}
