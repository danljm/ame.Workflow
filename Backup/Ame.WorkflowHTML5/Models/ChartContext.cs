﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace Ame.WorkflowHTML5.Models
{
    public class ChartContext : DbContext
    {
        public DbSet<Chart> Charts { get; set; }
    }
}