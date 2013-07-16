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
        public ActionResult AddChartByJson(Chart chart)
        {
            IList<Chart> tempChart = new List<Chart>();
            tempChart.Add(chart);
            ChartRepository repository = new ChartRepository();
            repository.SetCharts(tempChart);

            return Json(chart);
        }

        //
        // GET: /PreRelationalList/

        public ActionResult ChartActivity()
        {
            using (var db = new ChartContext())
            {
                return View(db.Charts.ToList());
            }
        }

        //
        // GET: /PreRelationalList/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /PreRelationalList/Create

        public ActionResult Create()
        {
            return View();
        }

        //
        // POST: /PreRelationalList/Create

        [HttpPost]
        public ActionResult Create(Chart chart)
        {
            try
            {
                // TODO: Add insert logic here
                using (var db = new ChartContext())
                {
                    db.Charts.Add(chart);
                    db.SaveChanges();
                }
                return RedirectToAction("ChartActivity");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /PreRelationalList/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /PreRelationalList/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /PreRelationalList/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /PreRelationalList/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
