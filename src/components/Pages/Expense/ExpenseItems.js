import React, { Fragment, useContext, useState } from 'react'
import { StoreData } from '../../storeOfData/Store';

const ExpenseItems = () => {

    const [amount,setAmount]=useState();
    const [catagory,setCatagory]=useState();
    const [discription,setDiscription]=useState();
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
    const submitHandler=(e)=>{
        e.preventDefault();
       ctx.addItem({
        amount:amount,
        catagory:catagory,
        decription:discription
       });
       console.log(ctx.items);
        
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