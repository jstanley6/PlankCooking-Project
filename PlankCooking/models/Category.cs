
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlankCooking.Models {

    public partial class Category {
        
       [Key]
        public int CategoryID { get; set; }

        [ForeignKey("WebsiteID")]
        public Website Website { get; set; }
        public int WebsiteID { get; set; }

        [StringLength(50), Required]
        public string Name { get; set; }

        public int SortOrder { get; set; }

        public string Websitepath { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }



    }
}