using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace Ame.WorkflowHTML5.Models
{
    /*
    public class PreRelationalList
    {
        [Key]
        public String ListName { get; set; }
        public virtual IList<PreRelationalListItem> Items { get; set; }
    }

    public class PreRelationalListItem
    {
        public String listId { get; set; }
        public String listItem { get; set; }
        public bool isIncluded { get; set; }
    }*/

    public class Chart
    {
        [Key]
        public String ChartName { get; set; }
        public String ChartType { get; set; }
        public String ChartDescription { get; set; }
        public String ChartData { get; set; }

        public bool Empty
        {
            get
            {
                return (string.IsNullOrWhiteSpace(ChartName) &&
                          string.IsNullOrWhiteSpace(ChartDescription) &&
                          string.IsNullOrWhiteSpace(ChartType) &&
                          string.IsNullOrWhiteSpace(ChartData));
            }
        }
    }

    /*
    public class Shape
    {
        public String Id { get; set; }
        public String Html { get; set; }
        public String Left { get; set; }
        public String Top { get; set; }
        public String Width { get; set; }
        public String Height { get; set; }
    }

    public class Connection
    {
        public String SourceId { get; set; }
        public String TargetId { get; set; }
        public String Label { get; set; }
    }

    public class Swimlane
    {
        public String Title { get; set; }
    }*/
}