import React from 'react';

const Paginator = ({result, page,changePage}) => {
  return (
      <div className="page__wrapper">
          {result.map(p => (
              <span 
                key={p} 
                className={page === p ? 'page page__current' : 'page'}
                onClick={()=> changePage(p)}
                >
                  {p}
                </span>
          ))}
      </div>
  )
}
 
export default Paginator;