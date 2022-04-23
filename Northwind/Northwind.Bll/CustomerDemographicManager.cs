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
    public class CustomerDemographicManager : GenericManager<CustomerDemographic, DtoCustomerDemographic>, ICustomerDemographicService
    {
        public readonly ICustomerAndSuppliersByCityRepository customerAndSuppliersByCityRepository;

        public CustomerDemographicManager(IServiceProvider service) : base(service)
        {
            customerAndSuppliersByCityRepository = service.GetService<ICustomerAndSuppliersByCityRepository>();
        }
    }
}
