using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Ame.WorkflowHTML5.Models
{
    public class ChartContext : DbContext
    {
        public DbSet<Chart> Charts { get; set; }
        public DbSet<PreRelationalList> PreRelationalLists { get; set; }
        public DbSet<PreRelationalListItem> PreRelationalListItems { get; set; }
        public DbSet<Shape> Shapes { get; set; }
        public DbSet<Connection> Connections { get; set; }
        public DbSet<Swimlane> Swimlanes { get; set; }
    }
}