using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ame.WorkflowHTML5.Repositories;
using Ame.WorkflowHTML5.Models;

namespace Ame.WorkflowHTML5.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to ASP.NET MVC!";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult PreRelationalList()
        {
            return View();
        }

        public ActionResult RelationalMap()
        {
            return View();
        }

        public ActionResult SwimlaneChart()
        {
            return View();
        }

        public ActionResult Flowchart()
        {
            return View();
        }

        // Utility function to add a exam to each class for a list of students
        private void AddChart(IList<Chart> charts, Chart chart, string updateSource)
        {
            charts.Add(chart);            
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult GetCharts()
        {
            ChartRepository repository = new ChartRepository();
            repository.Initialize();

            return Json(repository.GetCharts());
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult AddChartByJson(IList<Chart> charts, Chart chart)
        {
            ChartRepository repository = new ChartRepository();
            repository.SetCharts(charts);

            AddChart(charts, chart, "json");
            return Json(charts);
        }

        
    }
}
