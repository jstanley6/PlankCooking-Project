using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlankCooking.Models {

    public partial class OrderItem {
        
       [Key]
        public int OrderItemID { get; set; }

        [ForeignKey("ProductID")]
        public Product Product { get; set; }
        public int ProductID { get; set; }

         [ForeignKey("OrderCartID")]
        public OrderCart OrderCart { get; set; }
        public int OrderCartID { get; set; }

        public int Qty { get; set; }

    }
}