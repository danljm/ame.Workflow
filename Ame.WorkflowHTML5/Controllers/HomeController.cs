using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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

        public ActionResult SwimlaneMap123()
        {
            return View();
        }

        public ActionResult Flowchart()
        {
            return View();
        }
    }
}
