﻿using Northwind.Dal.Abstract;
using Northwind.Entity.Dto;
using Northwind.Entity.Models;
using Northwind.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace Northwind.Bll
{
    public class OrderSubtotalManager : GenericManager<OrderSubtotal, DtoOrderSubtotal>, IOrderSubtotalService
    {
        public readonly IOrderSubtotalRepository orderSubtotalRepository;

        public OrderSubtotalManager(IServiceProvider service) : base(service)
        {
            orderSubtotalRepository = service.GetService<IOrderSubtotalRepository>();
        }
    }
}
