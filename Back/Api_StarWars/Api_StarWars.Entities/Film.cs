using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
