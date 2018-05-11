
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PlankCooking.Models {

 
 
 public partial class Product
    {
        [Key]
        public int ProductID { get; set; }

        [ForeignKey("CategoryID")]
        public Category Category { get; set; }
        public int CategoryID { get; set; }

        [Required, StringLength(100)]
        public string Name { get; set; }
        
        public string Description { get; set; }

        [Required, DataType(DataType.Currency)]
        public decimal Price { get; set; }

        [StringLength(50)]
        public string PriceDescription { get; set; }

   
        public Int16 SortOrder { get; set; }

        [Required]
        public bool Active { get; set; }

        [Required]
        public decimal Ounces { get; set; }

        [StringLength(500)]
        public string ImagePath { get; set; }

        [DataType(DataType.Currency), Required]
        public decimal HandlingCost { get; set; }

        [Required]
        public bool TaxExempt { get; set; }

        public string SKU {get; set;}

    }
}