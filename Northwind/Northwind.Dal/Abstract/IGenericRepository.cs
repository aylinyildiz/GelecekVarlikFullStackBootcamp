using Northwind.Entity.IBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Northwind.Dal.Abstract
{
    public interface IGenericRepository<T> where T:IEntityBase
    {
        //listeleme
        List<T> GetAll();

        //filtreli listeleme 
        // Expression<Func<T, bool>> expression --- dinamik where sağlar
        List<T> GetAll(Expression<Func<T, bool>> expression);

        //getirme işlemi
        T Find(int id);

        //kaydetme
        T Add(T item);

        //Async Kaydetme
        Task<T> AddAsync(T item);

        //güncelleme
        T Update(T item);

        //silme
        bool Delete(int id);

        bool Delete(T item);


        //IQueryable listeleme
        IQueryable<T> GetQueryable();
    }
}
