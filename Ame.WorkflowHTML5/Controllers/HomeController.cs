using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
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
            return View(new Chart());
        }

        public ActionResult SwimlaneChart()
        {
            return View(new Chart());
        }

        public ActionResult Flowchart()
        {
            return View(new Chart());
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
                    Chart duplicate = db.Charts.Find(chart.ChartName);

                    if (duplicate == null)
                    {
                        db.Charts.Add(chart);
                        db.SaveChanges();
                    }
                    else
                    {
                        db.Charts.Remove(duplicate);
                        db.SaveChanges();
                        db.Charts.Add(chart);
                        db.SaveChanges();                        
                    }
                    
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

        public ActionResult Edit(String chartName)
        {
            using (var db = new ChartContext())
            {
                Chart chart = db.Charts.Find(chartName);
                return View(chart.ChartType, chart);
            }
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
