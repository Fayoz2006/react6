import React from "react";

const CurrencyInput = (props) => {
  return (
    <div>
      <select
        onChange={(event) => props.onChangeCurrency(event.target.value)}
        className="choose-valuet"
      >
        {props.rates.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <form>
        <input
          type="number"
          value={props.amount}
          onChange={(event) => props.onChangeAmount(event.target.value)}
        />
        <span>{props.currency}</span>
      </form>
    </div>
  );
};

export default CurrencyInput;
