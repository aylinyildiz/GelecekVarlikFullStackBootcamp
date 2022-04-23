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
    public class OrderDetailsExtendedManager : GenericManager<OrderDetailsExtended, DtoOrderDetailsExtended>, IOrderDetailsExtendedService
    {
        public readonly IOrderDetailsExtendedRepository orderDetailsExtendedRepository;

        public OrderDetailsExtendedManager(IServiceProvider service) : base(service)
        {
            orderDetailsExtendedRepository = service.GetService<IOrderDetailsExtendedRepository>();
        }
    }
}
