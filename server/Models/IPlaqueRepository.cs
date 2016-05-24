using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Plaques
{
    public interface IPlaqueRepository
    {
        PlaqueRecord Get(int id);
        IEnumerable<PlaqueRecord> Find(string searchTerm, int numMatches = 0);
    }
}
