import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign =  transaction.amount < 0 ? '-' : '+';

  return (
    <>
        <li className={sign==='-'?"minus":"plus"}>
          {transaction.text} <span>{sign} {Math.abs(transaction.amount)} DH</span><button onClick={(e)=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li> 
    </>
  )
}
