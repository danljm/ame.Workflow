using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ame.WorkflowHTML5.Controllers
{
    public class SwimlaneMapController : Controller
    {
        //
        // GET: /SwimlaneMap/

        public ActionResult Index()
        {
            return View();
        }

        //
        // GET: /SwimlaneMap/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        // GET: /SwimlaneMap/Create

        public ActionResult Create()
        {
            return View();
        } 

        //
        // POST: /SwimlaneMap/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
        
        //
        // GET: /SwimlaneMap/Edit/5
 
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /SwimlaneMap/Edit/5

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
        // GET: /SwimlaneMap/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /SwimlaneMap/Delete/5

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
