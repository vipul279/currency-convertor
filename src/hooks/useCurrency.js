import  { useState,useEffect } from 'react'

export default function useCurrency(currency) {

    const [data,setData]=useState({});

    useEffect(() => {
      const fetchCurrency = async () => {
            try{
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
                const result=await response.json();
                setData(result[currency]||{});
            }
            catch(err){
                console.error(err);
            }
        }
        if (currency) {
            fetchCurrency();
          }
    }, [currency]);
    console.log(data);
    return data;
    
}
