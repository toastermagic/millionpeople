using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plaques
{
    public class PlaqueRepository : IPlaqueRepository
    {
        public IEnumerable<PlaqueRecord> Find(string searchTerm, int numMatches = 0)
        {
            return null;
            // using (var dc = new Series6DataContext())
            // {
            //     dc.Database.SetCommandTimeout(300);

            //     var termArray = searchTerm.Split(' ');

            //     var records = dc
            //         .InvuDocumentRecord
            //         .AsQueryable();

            //     foreach (var term in termArray)
            //     {
            //         var lowerTerm = term.ToLower();

            //         records = records.Where(r => r.FirstName.StartsWith(term) || r.LastName.StartsWith(term));
            //     }

            //     if (numMatches > 0)
            //     {
            //         records = records.Take(numMatches);
            //     }

            //     return records
            //         .OrderBy(r => r.LastName)
            //         .ThenBy(r => r.FirstName)
            //         .ThenBy(r => r.DateOfBirth)
            //         .ThenBy(r => r.CompanyName)
            //         .ToList();
            // }
        }

        public PlaqueRecord Get(int id)
        {
            return null;
            // using (var dc = new Series6DataContext())
            // {
            //     return dc.InvuDocumentRecord.Where(ds => ds.Id == id).SingleOrDefault();
            // }
        }
    }
}
