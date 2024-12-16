import React from 'react';
import './Inputsection.css'

export default function Inputsection ({label,amount, currencyOptions = [],selectCurrency = "usd",amountDisabled=false, onAmountChange, onCurrencyChange}) {
  return (
    <div className='inputsection'>
        <div className='leftsection'>
            <label htmlFor="">{label}</label>
            <br />
            <br />
            <input type="number" disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
        </div>
        
        <div className='rightsection'>
            <p>Currency type</p>
            <br />
            <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        </div>
        
    </div >
  )
}
