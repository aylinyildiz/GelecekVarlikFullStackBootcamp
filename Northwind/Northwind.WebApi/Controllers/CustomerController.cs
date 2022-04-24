using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind.Entity.Base;
using Northwind.Entity.Dto;
using Northwind.Entity.IBase;
using Northwind.Entity.Models;
using Northwind.Interface;
using Northwind.WebApi.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Northwind.WebApi.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ApiBaseController<ICustomerService, Customer, DtoCustomer>
    {
        private readonly ICustomerService customerService;
        public CustomerController(ICustomerService customerService) : base(customerService)
        {
            this.customerService = customerService;
        }
        
        [HttpGet("GetTotalReport")] //abc.com/api/customer/GetTotalReport
        public IResponse<IQueryable<DtoCustomer>> GetTotalReport()
        {
            try
            {
                return customerService.GetTotalReport();
            }
            catch (Exception ex)
            {

                return new Response<IQueryable<DtoCustomer>>
                {
                    StatusCode = StatusCodes.Status500InternalServerError,
                    Message = $"error:{ex.Message}",
                    Data = null
                };
            }
            
        }

        //[HttpDelete("DeleteC")]
        //public IResponse<DtoCustomer> Delete(string id)
        //{
        //    try
        //    {
        //        return customerService.Delete(id);
        //    }
        //    catch (Exception ex)
        //    {
        //        return new Response<DtoCustomer>
        //        {
        //            StatusCode = StatusCodes.Status500InternalServerError,
        //            Message = $"Error:{ex.Message}",
        //            Data = null
        //        };
        //    }
        //}
    }
}
