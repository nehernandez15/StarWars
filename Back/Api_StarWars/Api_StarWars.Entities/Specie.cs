using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api_StarWars.Entities
{
    public class Specie
    {
        public string name { get; set; }
        public string classification { get; set; }
        public string designation { get; set; }
        public string average_height { get; set; }
        public string skin_colors { get; set; }
        public string hair_colors { get; set; }
        public string eye_colors { get; set; }
        public string average_lifespan { get; set; }
        public string homeworld { get; set; }
        public string language { get; set; }
    }

    public class Species
    {
        public List<Specie> results { get; set; }
    }
}
