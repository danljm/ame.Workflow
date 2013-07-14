using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Ame.WorkflowHTML5.Models;

namespace Ame.WorkflowHTML5.Repositories
{
    public class ChartRepository
    {

        public void Initialize()
        {
            List<Chart> charts = new List<Chart>();

            HttpContext.Current.Session["Students"] = charts;
        }

        public IList<Chart> GetCharts()
        {
            return (List<Chart>)
                HttpContext.Current.Session["Charts"];
        }

        public void SetCharts(IList<Chart> charts)
        {
            HttpContext.Current.Session["Charts"] = charts;
        }

    }
}