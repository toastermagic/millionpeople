using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Plaques;
using System.Text.RegularExpressions;
using System.Diagnostics;

namespace Plaques
{
    [Route("api/[controller]")]
    public class MetadataSearchController : Controller
    {
        public IPlaqueRepository repository { get; set; }

        // GET api/MetadataSearch/thingToSearchFor
        [HttpGet("{searchTerm}")]
        public IActionResult Find(string searchTerm)
        {
            var stopWatch = new Stopwatch();
            stopWatch.Start();

            var matches = repository.Find(searchTerm);

            if (matches.Count() > 1000)
            {
                this.Response.StatusCode = 500;
                return new ObjectResult(new Exception(string.Format("Too many results ({0})", matches.Count())));
            }

            var matchCounts = matches
                // .GroupBy(a => new { a.LastName, a.FirstName, a.DateOfBirth, a.CompanyName })
                // .Select(b => new { b.Key.LastName, b.Key.FirstName, b.Key.DateOfBirth, b.Key.CompanyName, Count = b.Count() })
                .Take(200)
                .ToList();

            return new ObjectResult(matchCounts);
        }
    }
}
