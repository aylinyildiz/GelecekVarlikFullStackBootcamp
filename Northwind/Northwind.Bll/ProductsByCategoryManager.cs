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
    public class ProductsByCategoryManager : GenericManager<ProductsByCategory, DtoProductsByCategory>, IProductsByCategoryService
    {
        public readonly IProductsByCategoryRepository productsByCategoryRepository;

        public ProductsByCategoryManager(IServiceProvider service) : base(service)
        {
            productsByCategoryRepository = service.GetService<IProductsByCategoryRepository>();
        }

    }
}
