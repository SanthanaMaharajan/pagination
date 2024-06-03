import React from 'react';

function Pagination({totalPost,postPerPage,setCurrentPage,currentPage}) {

    const pages=[]

    for(let i=1;i<=Math.ceil(totalPost/postPerPage);i++){
        pages.push(i)
    }
    return ( 
        <div className='pagination'>
            {pages.map((page,index)=>{
                return(
                    <button key={index} onClick={()=>setCurrentPage(page)} className={page===currentPage? "active":""}>{page}</button>
                )
            })}
        </div>
     );
}

export default Pagination;