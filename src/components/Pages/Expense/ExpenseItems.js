import React, { Fragment, useContext, useEffect, useState } from 'react'
import { StoreData } from '../../storeOfData/Store';

const ExpenseItems = () => {

    const [amount,setAmount]=useState();
    const [catagory,setCatagory]=useState('Movie');
    const [discription,setDiscription]=useState();
    const [totalItem,settotalItem]=useState()
    const ctx=useContext(StoreData);

    const amountChangeHandler=(e)=>{
        setAmount(e.target.value)
    }
    const catagoryChangeHandler=(e)=>{
        setCatagory(e.target.value)
    }
    const discriptionChangeHandler=(e)=>{
        setDiscription(e.target.value)
    }

    const url='https://expancetrackerauth-default-rtdb.firebaseio.com/';

    const getDataFrom=async ()=>{
        const email=localStorage.getItem('email')
        const response= await fetch(`${url}${email}.json`,{
          method:'GET'
      });
      const data=await response.json();
      console.log('data111',data);
      const newItem=[];
      for(let key in data){
        newItem.push({id:key,...data[key]})
      }
      ctx.addItem(newItem);
      console.log('newItem',newItem);
     


    }


    const submitHandler= async(e)=>{
        e.preventDefault();
        const email=localStorage.getItem('email')
       console.log('ctx.items',ctx.items);
       const response = await fetch(`${url}${email}.json`,{
        method:'POST',
        body:JSON.stringify({
            amount:amount,
            catagory:catagory,
            decription:discription
        }),
        headers:{
            'Content-Type':'application/json'
        }
       });
       const data1=await response.json();
       console.log('data222',data1);
       getDataFrom();
    }

  return (
    <Fragment>
        <div>
        <div>
  <label className="form-label">Choose Expense</label>
  <div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="number" className="form-control"  placeholder='Enter Amount' onChange={amountChangeHandler} value={amount}/>
  
</div>
  </div> 
  
  <div className='chooseExpense'>
  <label  className="form-label">Choose Catagory</label>
<select className="form-select col" onChange={catagoryChangeHandler} value={catagory}>
<option >Movie</option>
<option >Shopping</option>
<option >Rent</option>
<option >Grocery</option>
</select>
  </div>
  </div>
  <div className="secondDiv">
  <div className="col">
  <label  className="form-label">Add Short Description</label>
    <input type="text" className="form-control" placeholder="Description" aria-label="Last name" onChange={discriptionChangeHandler} value={discription}/>
  </div>
  <button className="btn btn-primary mt-4 btn1" type="submit" onClick={submitHandler}>Submit</button>
 
  </div>
    </Fragment>
  )
}

export default ExpenseItems