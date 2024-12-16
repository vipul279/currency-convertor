import React, { useState } from 'react';
import Inputsection from './Inputsection';
import './Convertorform.css';
import useCurrency from '../hooks/useCurrency';

export default function Convertorform() {

    const [amount,setAmount]=useState(0);
    const [convertedAmount,setConvertedAmount]=useState(0);
    const [from,setFrom]=useState('usd')
    const [to,setTo]=useState('inr');

    const currencyinfo=useCurrency(from);

    const options=Object.keys(currencyinfo);

    const swap=()=>{
        setFrom(to);
        setTo(from);
    };

    const convert=()=>{
        setConvertedAmount(amount*currencyinfo[to]);
    }


  return (
    <div className='container'>
        <div className='convertor'>
            <Inputsection label="From"
                          amount={amount} 
                          currencyOptions={options}
                          selectCurrency={from}
                          onAmountChange={(amount)=>{setAmount(amount)}} 
                          onCurrencyChange={(currency)=>{setFrom(currency)}}
                          />

            <div className='swapping'>
                <button onClick={swap}>Swap</button>
            </div>
            <Inputsection label="To" amount={convertedAmount} currencyOptions={options} selectCurrency={to} onCurrencyChange={(currency)=>{setTo(currency)}}/>
            <div className='convertbutton'>
                <button onClick={convert}>Convert INR to USD</button>
            </div>
        </div>
    </div>
  )
}
