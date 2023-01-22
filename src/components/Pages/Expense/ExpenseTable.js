import React, { Fragment, useContext, useEffect } from 'react'
import { StoreData } from '../../storeOfData/Store'

const ExpenseTable = () => {

    const ctx=useContext(StoreData);

    const url='https://expancetrackerauth-default-rtdb.firebaseio.com/';
    const email=localStorage.getItem('email')

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
    }, [])

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
        <tr>
        <th scope="row" key={item.id}>{indx+1}</th>
        <td>{item.amount}</td>
        <td>{item.catagory}</td>
        <td>{item.decription}</td>
        <td><button type='button' className='btn btn-warning' >Edit</button></td>
        <td><button type='button' className='btn btn-danger' >Delete</button></td>
      </tr>
    ))
}


      </tbody>
    </table>

    </Fragment>
  )
}

export default ExpenseTable