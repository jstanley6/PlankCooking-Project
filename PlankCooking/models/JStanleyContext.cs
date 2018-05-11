using Microsoft.EntityFrameworkCore;
using PlankCooking.Models;

namespace PlankCooking.Models {
    public class JStanleyContext: DbContext {
        public JStanleyContext(DbContextOptions<JStanleyContext> options):base(options){}

       public virtual DbSet<Website> Website {get; set;}
       public virtual DbSet<Category> Category {get; set;}
       public virtual DbSet<Product> Product {get; set;}
       public virtual DbSet<OrderCart> OrderCart {get; set;}
       public virtual DbSet<OrderItem> OrderItem {get; set;}
    }
}