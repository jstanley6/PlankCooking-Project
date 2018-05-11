using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlankCooking.Models;

namespace PlankCooking.Api {

   [Produces("application/json")]
   [Route("api/v1/plankcooking")]
    public class PlankcookingController:Controller {
        
        private readonly JStanleyContext _context;

        public PlankcookingController(JStanleyContext context )
        {
            _context = context;
        }

        [HttpGet]

        public async Task<List<Product>> getProducts() {
            
             var products = await _context.Product.ToListAsync();

            return products;
        }

        
        [HttpGet("spicerubs")]

        public async Task<List<Product>> getSpiceRubs() {

            var spiceRubs = await _context.Product.Where(s => s.CategoryID == 1).ToListAsync();

            return spiceRubs;


        }

        [HttpPost("/add/spicerubs")]

        public async Task<IActionResult> addQuantity([FromBody] OrderItem qty, OrderCart id) {
           
        
        OrderCart order = new OrderCart {
            OrderCartID = 1,
            Status = 1,
            WebsiteID = 1
        };
         
         OrderItem orderMe = new OrderItem {
           OrderItemID = 1,
           Qty = qty.Qty,
           ProductID = 3
         };
         
         if (!ModelState.IsValid)
            {
                return BadRequest();
            }

              var productFound = await _context.Product.FirstOrDefaultAsync(s => s.ProductID == qty.ProductID);

            List<Product> productList = _context.Product.ToList();
            int productsFound = productList.FindIndex(p => p.ProductID == qty.ProductID && p.ProductID == id.OrderCartID);

            if (productsFound >= 0)
            {
                return BadRequest("Product already exists.");
            }
            else
            {
                _context.OrderItem.Add(orderMe);
                _context.OrderCart.Add(order);
                _context.OrderItem.Add(qty);
                await _context.SaveChangesAsync();
                return Ok(qty);
            }


            // var productFound = await _context.Product.FirstOrDefaultAsync(s => s.ProductID == qty.ProductID);
            


            // var itemFound = await _context.OrderItem.FirstOrDefaultAsync(s => s.OrderCartID == qty.OrderItemID);


            // List<OrderItem> itemList = _context.OrderItem.ToList();
            // int itemsFound = itemList.FindIndex(h => h.Qty == qty.OrderItemID);

            // if (itemsFound >= 0)
            // {
            //     return BadRequest("Item already exists");
            // }
            // else
            // {
            //     _context.OrderItem.Add(qty);
            //     await _context.SaveChangesAsync();
            //     return Ok(qty);
            // }

        }

           [HttpGet("bakingplanks")]

        public async Task<List<Product>> getBakingPlanks() {

            var bakingPlanks = await _context.Product.Where(s => s.CategoryID == 4).ToListAsync();

            return bakingPlanks;


        }

         [HttpGet("cookbooks")]

        public async Task<List<Product>> getCookBooks() {

            var cookBooks = await _context.Product.Where(s => s.CategoryID == 3).ToListAsync();

            return cookBooks;


        }

             [HttpGet("bbqplanks")]

        public async Task<List<Product>> getBbqPlanks() {

            var bbqplanks = await _context.Product.Where(s => s.CategoryID == 5).ToListAsync();

            return bbqplanks;


        }

               [HttpGet("nutdriver")]

        public async Task<List<Product>> getNutdriver() {

            var nutdriver = await _context.Product.Where(s => s.CategoryID == 6).ToListAsync();

            return nutdriver;


        }


       // [Route("LinqDemo")]

        // public IEnumerable<string> LinqDemo() {
      
        //     //  string[] words = {"Hello", "Wonderful", "Linq", "Demo"};
        //     //     //Lamda (Method) Syntax     
        //     //  var shortWords = words.Where(w => w.Length == 4);

        //     // //Query (Comprehension) Syntax

        //     // //var shortWords = from w in words where w.Length == 4 select w;

        //     // /*
        //     // Select * from table where len(field) = 4
        //     //  */

        //     //  return shortWords;

        // }



        // [HttpGet]
        // public async Task<List<Student>> getStudents() {

        //       //Lamda (Method) Syntax
              
        //    var students = await _context.Students.Where(s => s.LastName.Length == 4).ToListAsync();
        //    return students;

         //Query (Comprehension) Syntax

        //  var students = await _context.Students.ToListAsync();

        //  var shortNames = from s in students where s.LastName.Length == 4 select s;
           
        //    return shortNames.ToList();
              
            /* 
            System.Threading.Thread.Sleep(5000);




            var students = new List<Student>();


            students.Add(new Student {
                StudentId = 11,
                FirstName = "Tom",
                LastName = "Jones"
            });

             students.Add(new Student {
                StudentId = 12,
                FirstName = "Bill",
                LastName = "Smith"
            });

             students.Add(new Student {
                StudentId = 13,
                FirstName = "Eli",
                LastName = "Krohn"
            });

             students.Add(new Student {
                StudentId = 14,
                FirstName = "Jason",
                LastName = "Stanley"
            });



            return students;
            */
        
    }
}