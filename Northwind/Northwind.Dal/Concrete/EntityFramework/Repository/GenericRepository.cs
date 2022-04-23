using Microsoft.EntityFrameworkCore;
using Northwind.Dal.Abstract;
using Northwind.Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Dal.Concrete.EntityFramework.Repository
{

    public class GenericRepository<T> : IGenericRepository<T> where T : EntityBase
    {
        //region blok oluşturmak için kullanılır.
        #region Variables
        protected DbContext context;
        protected DbSet<T> dbset;
        #endregion

        public GenericRepository(DbContext context)
        {
            this.context = context;
            this.dbset = this.context.Set<T>();

            //veriyi çek üzerinde değişiklik yapama 
           // this.context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
        }
        #region Methods
        public T Add(T item)
        {
            context.Entry(item).State = EntityState.Added;
            dbset.Add(item);

            return item;
        }

        public async Task<T> AddAsync(T item)
        {
            context.Entry(item).State = EntityState.Added;
            await dbset.AddAsync(item);
            return item;
        }

        public bool Delete(int id)
        {
            //var item = Find(id);
            return Delete(Find(id));
            //if(context.Entry(item).State == EntityState.Detached)
            //{
            //    context.Attach(item);
            //}
            //return dbset.Remove(item) != null;
        }

        public bool Delete(T item)
        {
            if (context.Entry(item).State == EntityState.Detached)
            {
                context.Attach(item);
            }
            return dbset.Remove(item) != null;
        }

       

        public T Find(int id)
        {
            //find modelde pk e göre çalışır.
            return dbset.Find(id);
        }

        public List<T> GetAll()
        {
            return dbset.ToList();
        }

        public List<T> GetAll(Expression<Func<T, bool>> expression)
        {
            return dbset.Where(expression).ToList();
        }

        public IQueryable<T> GetQueryable()
        {
            return dbset.AsQueryable();
        }

        public T Update(T item)
        {
            dbset.Update(item);
            return item;
        }

        #endregion
    }
}
