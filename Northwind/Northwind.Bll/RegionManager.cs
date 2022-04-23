using Northwind.Entity.Dto;
using Northwind.Entity.Models;
using Northwind.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Northwind.Dal.Abstract;

namespace Northwind.Bll
{
    public class RegionManager : GenericManager<Region, DtoRegion>, IRegionService
    {
        public readonly IRegionRepository regionRepository;

        public RegionManager(IServiceProvider service) : base(service)
        {
            regionRepository = service.GetService<IRegionRepository>();
        }

    }
}
