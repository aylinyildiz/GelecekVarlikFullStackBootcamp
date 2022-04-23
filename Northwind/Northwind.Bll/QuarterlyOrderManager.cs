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
    public class QuarterlyOrderManager : GenericManager<QuarterlyOrder, DtoQuarterlyOrder>, IQuarterlyOrderService
    {
        public readonly IQuarterlyOrderRepository quarterlyOrderRepository;

        public QuarterlyOrderManager(IServiceProvider service) : base(service)
        {
            quarterlyOrderRepository = service.GetService<IQuarterlyOrderRepository>();
        }
    }
}
