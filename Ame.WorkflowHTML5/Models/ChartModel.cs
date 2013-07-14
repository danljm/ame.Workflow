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
        public IList<Shape> ChartShapes { get; set; }
        public IList<Connection> ChartConnections { get; set; }
    }

    public class Shape
    {
        public String HTMLId { get; set; }
        public String HTML { get; set; }
        public int Top { get; set; }
        public int Left { get; set; }
        public int width { get; set; }
        public int height { get; set; }
    }

    public class Connection
    {
        public String SourceId { get; set; }
        public String TargetId { get; set; }
        public String Label { get; set; }
    }
}