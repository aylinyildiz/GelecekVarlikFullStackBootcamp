using Microsoft.Extensions.DependencyInjection;
using Northwind.Dal.Abstract;
using Northwind.Entity.Dto;
using Northwind.Entity.Models;
using Northwind.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Bll
{
    public class CustomerCustomerDemoManager : GenericManager<CustomerCustomerDemo, DtoCustomerCustomerDemo>, ICustomerCustomerDemoService
    {
        public readonly ICustomerAndSuppliersByCityRepository customerAndSuppliersByCityRepository;

        public CustomerCustomerDemoManager(IServiceProvider service) : base(service)
        {
            customerAndSuppliersByCityRepository = service.GetService<ICustomerAndSuppliersByCityRepository>();
        }
    }
}
