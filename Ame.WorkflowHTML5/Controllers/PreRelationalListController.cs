using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Ame.WorkflowHTML5.Controllers
{
    public class PreRelationalListController : Controller
    {
        //
        // GET: /PreRelationalList/

        public ActionResult Index()
        {
            return View();
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
