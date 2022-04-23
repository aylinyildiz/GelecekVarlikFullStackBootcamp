using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Northwind.Dal.Abstract;
using Northwind.Dal.Concrete.EntityFramework.Repository;
using Northwind.Entity.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Dal.Concrete.EntityFramework.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        #region Variables
        DbContext context;
        IDbContextTransaction transaction;
        bool dispose; //default false olur.
        #endregion

        public UnitOfWork(DbContext context)
        { //alttakileri yöneteceğimiz için contexti bağladık.
            this.context = context;
        }
        public bool BeginTransaction()
        {
            try
            {
                transaction = context.Database.BeginTransaction();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this); // garrage collactor (çöp toplama)
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.dispose)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            dispose = true;
        }

        public IGenericRepository<T> GetRepository<T>() where T : EntityBase
        {
            return new GenericRepository<T>(context);
        }

        //bütünlük sağlar. hata aldığımız an önceden yapılanları geri alır.
        public bool RollBackTransaction()
        {
            try
            {
                transaction.Rollback();
                transaction = null;
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        //transaction onaylama.
        //tüm işlemler tamamlandı kaydetmede sorun olursa ne olur?
        // belirli bir süre bellekte kalır. sonra silinir.
        public int SaveChanges()
        {
            var _transaction = transaction != null ? transaction : context.Database.BeginTransaction();
            using (_transaction)
            {
                try
                {
                    if (context == null)
                    {
                        throw new ArgumentException("Context is null.");
                    }
                    int result = context.SaveChanges();

                    _transaction.Commit();
                    
                    return result; //işlem yapamazsa 0 olur.

                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw new Exception("Error on save changes", ex);
                }
            }
        }
    }
}
