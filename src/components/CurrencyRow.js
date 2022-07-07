import React from 'react'

function CurrencyRow(props) {
    const {currencyOptions, selectedCurrency, onChangeCurrency, amount} = props
    console.log(props)
  return (
    <div>
        <input type='number' className="input" value={amount}/>
        <select value={selectedCurrency} onChange={onChangeCurrency}>
            {currencyOptions.map((option, i) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default CurrencyRow