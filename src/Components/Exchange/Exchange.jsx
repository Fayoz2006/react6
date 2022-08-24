import React, { useState, useEffect } from "react";
import "./../../CSS/production/Exchange.css";
import "./../SVG/SVGicons";
import SVGicons from "./../SVG/SVGicons";
import axios from "axios";
import CurrencyInput from "../CurrencyInput/CurrencyInput";

const Exchange = () => {
  const [currency1, setCurrency1] = useState("AED");
  const [currency2, setCurrency2] = useState("AED");
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [rates, setRates] = useState({});

  const API_KEY = "OYeiyc9oN039bVH5Q05aOvsXMviXd9il";

  useEffect(() => {
    axios
      .get(`https://api.apilayer.com/fixer/latest?base=USD&apikey=${API_KEY}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setRates(res.data.rates);
        }
      });
  }, []);

  function handleChangeAmount1(amount1) {
    setAmount2(+Math.round((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }
  function handleChangeCurrency1(currency1) {
    setAmount2(+Math.round((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleChangeAmount2(amount2) {
    setAmount1(+Math.round((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }
  function handleChangeCurrency2(currency2) {
    setAmount2(+Math.round((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <div className="screen-exchange">
      <h1>Exchange</h1>
      <div className="currency">
        <div className="item">
          <p>From</p>
          {/* <div>
            <select className="choose-valuet">
              <option value="RUB">RUB</option>
            </select>
            <form>
              <input type="text" />
              <span>RUB</span>
            </form>
          </div> */}
          <CurrencyInput
            onChangeAmount={handleChangeAmount1}
            onChangeCurrency={handleChangeCurrency1}
            amount={amount1}
            currency={currency1}
            rates={Object.keys(rates)}
          />
        </div>
        <div className="item">
          <p>To</p>
          <CurrencyInput
            onChangeAmount={handleChangeAmount2}
            onChangeCurrency={handleChangeCurrency2}
            amount={amount2}
            currency={currency2}
            rates={Object.keys(rates)}
          />
          {/* <div>
            <select className="choose-valuet">
              <option value="RUB">RUB</option>
            </select>
            <form>
              <input type="text" />
              <span>RUB</span>
            </form>
          </div> */}
        </div>
      </div>
      <div className="result">
        <div>
          <b>{amount1}</b>
          <b>{currency1}</b>
        </div>
        <SVGicons icon="arrow" />
        <div>
          <b>{amount2}</b>
          <b>{currency2}</b>
        </div>
      </div>
      <button className="exchange">Exchange</button>
    </div>
  );
};

export default Exchange;
