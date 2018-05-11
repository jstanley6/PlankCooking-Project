using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;


namespace PlankCooking.Models {

 
 
 public partial class OrderCart
    {
        [Key]
        public int OrderCartID{ get; set; }

        [Required]
        public int  Status { get; set; }

        public string Notes { get; set; }

        [Required, DataType(DataType.DateTime)]
        public DateTime PurchaseDate { get; set; }

        [StringLength(100)]
        public string History { get; set; }

        [DataType(DataType.Currency)]
        public decimal Taxes { get; set; }

        [Required]
        public decimal OrderTotal { get; set; }

        [Required]
        public string ShippingFirstName { get; set; }

        [Required]
        public string ShippingLastName { get; set; }

        [Required]
        public string ShippingAddress1 { get; set; }

        public string ShippingAddress2 { get; set; }

        public string ShippingCity { get; set; }

        public string ShippingState { get; set; }

        [DataType(DataType.PostalCode)]

        public string ShippingPostalCode { get; set; }

        public string ShippingPhone { get; set; }

        public string ShippingEmail { get; set; }

        public string BillingAddress1 { get; set; }

        public string BillingAddress2 { get; set; }

        public string BillingCity { get; set; }

        public string BillingState { get; set; }

         [DataType(DataType.PostalCode)]

        public string BillingPostalCode { get; set; }

        public string UniqueIdentifier {get; set;}

         [ForeignKey("WebsiteID")]
        public Website Website { get; set; }
        public int WebsiteID { get; set; }

        [DataType(DataType.DateTime)]

        public DateTime DateCreated {get; set;}

        public string BillingFirstName {get; set;}

        public string BillingLastName {get; set;}

        public string BillingPhone {get; set;}

        public string BillingEmail {get; set;}

        public string ShippingCountry {get; set;}

        public string BillingCountry {get; set;}

        public string AuthorizationCode {get; set;}

        public string TransactionID {get; set;}

        public bool ShippingValidation {get; set;}

        [DataType(DataType.Currency)]
        public int ShippingCost {get; set;}

        public int ShippingType {get; set;}

        public string CreditCardType {get; set;}

    }
}