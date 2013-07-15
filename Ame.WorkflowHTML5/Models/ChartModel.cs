using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ame.WorkflowHTML5.Models
{
    public class Chart
    {
        public String ChartName { get; set; }
        public String ChartType { get; set; }
        public String ChartDescription { get; set; }
        public IList<Shape> ChartShapes { get; set; }
        public IList<Connection> ChartConnections { get; set; }
    }

    public class Shape
    {
        public String id { get; set; }
        public String html { get; set; }
        public String left { get; set; }
        public String top { get; set; }
        public String width { get; set; }
        public String height { get; set; }
    }

    public class Connection
    {
        public String SourceId { get; set; }
        public String TargetId { get; set; }
        public String Label { get; set; }
    }
}