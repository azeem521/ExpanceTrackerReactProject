import React, { Fragment, useContext, useEffect, useState } from 'react'
import { StoreData } from '../../storeOfData/Store'

const ExpenseTable = () => {
  const [reRender,setreRender]=useState(true)

    const ctx=useContext(StoreData);

    const url='https://expancetrackerauth-default-rtdb.firebaseio.com/';
    const email=localStorage.getItem('email');

    const toDeleteData=async(id)=>{
      const resp=await fetch(`${url}${email}/${id}.json`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
      }
      });
      const respo=await resp.json();
      setreRender((prev)=>!prev)
      console.log('respo',respo,id);
    }

    useEffect(() => {
      async function fetchMyAPI() {
        let response = await fetch(`${url}${email}.json`,{
          method:'GET'
      })
        const data = await response.json()
        const newItem=[];
        for(let key in data){
          newItem.push({id:key,...data[key]})
        }
        console.log('useEffectCalled',newItem);
        ctx.addItem(newItem);
      }
  
      fetchMyAPI()
    }, [reRender])

  return (
    <Fragment>

<table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Expense</th>
        <th scope="col">Catagory</th>
        <th scope="col">Description</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
   
{
    ctx.items.map((item,indx)=>(
        <tr key={item.id}>
        <th scope="row">{indx+1}</th>
        <td>{item.amount}</td>
        <td>{item.catagory}</td>
        <td>{item.decription}</td>
        <td><button type='button' className='btn btn-warning' >Edit</button></td>
        <td><button type='button' className='btn btn-danger' onClick={toDeleteData.bind(null,item.id)}>Delete</button></td>
      </tr>
    ))
}


      </tbody>
    </table>

    </Fragment>
  )
}

export default ExpenseTable