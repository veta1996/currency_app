import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import CurrencyRow from './components/CurrencyRow';

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  //const [data, setData] = useState([])
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [rate, setRate] = useState(0)
  const [amountToConvert, setAmountToConvert] = useState(1)
  const [output, setOutput] = useState()

  useEffect(() => {
    const fetchData = async() => {
    const urlWithOptions = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
    const resp = await fetch(urlWithOptions);
    const postData = await resp.json();
    setCurrencyOptions(Object.keys(postData))
  }
fetchData()
}, [])
  console.log(currencyOptions)

 const handleConvert = async(e) => {
   e.preventDefault()
  const urlToConvert = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency}/${toCurrency}.json`;
  const convertData = await axios(urlToConvert);
  setRate(convertData.data[toCurrency]);
  setOutput(rate * amountToConvert)
 // countOutput(rate, amountToConvert)
  console.log(urlToConvert, 'urlToConvert')
  console.log(convertData, 'convertData')
 }
 
 console.log(rate, 'RATE')
 console.log(amountToConvert, 'amountToConvert')
 
 console.log(output, "BBBBBBB")
  
 
  return (
    <div className="App">
      
      <form>
        <label>From Currency: </label>
    
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            {currencyOptions.map((option, i) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <br/>
        <br/>
        <br/>
        <label>Amount: </label>
        <input type='number' value={amountToConvert} 
        onChange={(e) => setAmountToConvert(e.target.value)}/>
        <br/>
        <br/>
        <br/>
        <label>To Currency: </label>
        <select value={toCurrency}  onChange={(e) => setToCurrency(e.target.value)}>
            {currencyOptions.map((option, i) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <br/>
        <br/>
        <br/>
        <button onClick={handleConvert}>Convert</button>
      </form>
    {!!rate && <h5>Rate: One {toCurrency} is equal to {rate} of {fromCurrency} </h5>}
    <br/>
        <br/>
        <br/>
        Output: {!!output&& output}
    </div>
  );
}

export default App;

/* const fetchDatafromApi = () => {
  const urlWithOptions = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
  fetch(urlWithOptions)
  .then(res => res.json())
  .then(data => {
    setData(Object.keys(data))
  })

}
console.log(data, 'data')




<CurrencyRow 
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        
      />
      <div className='equals'>=</div>
      <CurrencyRow 
      currencyOptions={currencyOptions}
      selectedCurrency={toCurrency}
      onChangeCurrency={(e) => setToCurrency(e.target.value)}
      />



<button onClick={fetchDatafromApi}>Click here</button>
{data.map((item, i) => {
      return <ul>
        <li key={i}>{item}</li>
      </ul>
    })}
*/