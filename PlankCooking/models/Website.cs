
using System.ComponentModel.DataAnnotations;

namespace PlankCooking.Models
{
    public partial class Website
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string URL { get; set; }

        [Key, Required]

        public int WebsiteID { get; set; }




    }
}