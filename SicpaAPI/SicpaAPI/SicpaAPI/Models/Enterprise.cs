using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SicpaAPI.Models
{
    public class Enterprise
    {
        public int? id { get; set; }
        public string created_by { get; set; }
        public DateTime? created_date { get; set; }
        public string modified_by { get; set; }
        public DateTime? modified_date { get; set; }
        public bool status { get; set; }
        public string address { get; set; }
        public string name { get; set; }
        public string phone { get; set; }
    }
}
