import { useDispatch, useSelector } from "react-redux";
import { modalFunc } from "./redux/modalSlice";
import SelectState from "./components/selectState";
import { useState } from "react";

function App() {
  const [globalParsedValue, setParsedValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.modal);
  const stateVatValue = useSelector((state) => state.states.stateSlice);

  console.log("the modal situation is : ", modal);
  console.log("the state value is : ", stateVatValue);

  const handleInputChange = (event) => {
    const filteredValue = event.target.value.replace(/[^0-9,]/g, "");
    const parsedValue = parseFloat(filteredValue.replace(",", "."));
    setParsedValue(parsedValue);
  };

  console.log("Global parsed value : ", globalParsedValue);

  const handleButtonClick = () => {
    const modalState = true;
    if (stateVatValue !== null || stateVatValue === 0) {
      dispatch(modalFunc(modalState));
      setErrorMessage("");
    } else {
      setErrorMessage("This field is required !!");
    }
  };

  var taxValue = globalParsedValue * (stateVatValue / 100);
  taxValue = Number(taxValue.toFixed(3));
  const totalValue = globalParsedValue + taxValue;
  console.log(`tax value : ${taxValue}      amount : ${totalValue}`);

  return (
    <div className="App bg-[#282c34] h-full w-screen flex items-center flex-col">
      <div className="bg-[#e2e8f0] max-w-screen-md w-full h-full flex flex-col mt-8 p-4">
        <h1 className="text-4xl font-mono subpixel-antialiased ml-4 mt-4">
          Sales Tax Calculator
        </h1>
        <div className="flex flex-col mt-4 md:flex-row md:justify-between">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">
                Sale or purchase price<p className="text-gray-500">(required)</p>
              </label>
              <input
                className="mt-2 w-full md:w-[325px] h-[45px] border p-3 border-gray-400 rounded-sm"
                id="price"
                onChange={handleInputChange}
              ></input>
            </div>
            <div className="w-64 h-12 mt-4">
            <button
              className={`bg-[#008254] w-full md:w-[325px] h-[45px] ${
                globalParsedValue === null || stateVatValue === null
                  ? "opacity-50"
                  : ""
              }`}
              onClick={handleButtonClick}
              disabled={globalParsedValue === null || stateVatValue === null}
            >
              Calculate
            </button>
            </div>
          </div>

          <div className="mt-4 md:mt-0 font-semibold">
            <SelectState />{" "}
            <p className="font-semibold text-red-600">{errorMessage}</p>
          </div>
        </div>
        <div>
          {modal && (
            <div className="flex flex-col mt-4">
              <h1 className="text-4xl font-mono subpixel-antialiased ml-4 mt-4 w-full">
                Sales tax summary
              </h1>
              <div className="flex flex-col md:flex-row justify-between mt-2">
                <div className="flex flex-col ml-4">
                  <h1 className="font-semibold">
                    The state sales tax on your purchase is:
                  </h1>
                  <p className="mt-2 text-blue-600 text-4xl font-bold">
                    $ {isNaN(taxValue) ? 0 : taxValue}
                  </p>
                  <p className="text-gray-500">
                    Note: This calculator only considers state taxes.
                    <br></br>Local taxes may apply.
                  </p>
                </div>
                <div className="flex flex-col mt-2 md:mt-0 mr-4">
                  <h1 className="font-semibold">
                    Total (after-tax) purchase price:
                  </h1>
                  <p className="mt-2 text-blue-600 text-4xl font-bold">
                    $ {isNaN(totalValue) ? 0 : totalValue}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

        
      <table className="bg-[#e2e8f0] border-collapse border-2 border-gray-500 w-full mt-4 md:w-auto">
            <thead>
              <tr className="h-[60px]">
                <th className="border border-gray-500 p-2">State</th>
                <th className="border border-gray-500 p-2">State Tax Rate</th>
                <th className="border border-gray-500 p-2">Avg. Local Tax Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Alabama</td>
                <td className="border border-gray-500 p-2">4 %</td>
                <td className="border border-gray-500 p-2">5.24 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Alask</td>
                <td className="border border-gray-500 p-2">0 %</td>
                <td className="border border-gray-500 p-2">1.81 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Arizona</td>
                <td className="border border-gray-500 p-2">5.60 %</td>
                <td className="border border-gray-500 p-2">2.77 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Arkansas</td>
                <td className="border border-gray-500 p-2">6.50 %</td>
                <td className="border border-gray-500 p-2">2.94 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">California</td>
                <td className="border border-gray-500 p-2">7.25 %</td>
                <td className="border border-gray-500 p-2">1.60 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Colorado</td>
                <td className="border border-gray-500 p-2">2.90 %</td>
                <td className="border border-gray-500 p-2">4.89 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Connecticut</td>
                <td className="border border-gray-500 p-2">6.35 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Delaware</td>
                <td className="border border-gray-500 p-2">0 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Florida</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">1.02 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Georgia</td>
                <td className="border border-gray-500 p-2">4 %</td>
                <td className="border border-gray-500 p-2">3.39 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Hawai</td>
                <td className="border border-gray-500 p-2">4 %</td>
                <td className="border border-gray-500 p-2">0.44 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Idaho</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0.02 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Illionis</td>
                <td className="border border-gray-500 p-2">6.25 %</td>
                <td className="border border-gray-500 p-2">2.59 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Indiana</td>
                <td className="border border-gray-500 p-2">7 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Iowa</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0.93 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Kansas</td>
                <td className="border border-gray-500 p-2">6.50 %</td>
                <td className="border border-gray-500 p-2">2.25 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Kentucky</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Louisiana</td>
                <td className="border border-gray-500 p-2">4.45 %</td>
                <td className="border border-gray-500 p-2">5.10 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Maine</td>
                <td className="border border-gray-500 p-2">5.50 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Maryland</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Massachusetts</td>
                <td className="border border-gray-500 p-2">6.25 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Michigan</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Minnesota</td>
                <td className="border border-gray-500 p-2">6.88 %</td>
                <td className="border border-gray-500 p-2">0.65 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Mississippi</td>
                <td className="border border-gray-500 p-2">7 %</td>
                <td className="border border-gray-500 p-2">0.06 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Missouri</td>
                <td className="border border-gray-500 p-2">4.23 %</td>
                <td className="border border-gray-500 p-2">4.14 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Montana</td>
                <td className="border border-gray-500 p-2">0 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Nebraska</td>
                <td className="border border-gray-500 p-2">5.50 %</td>
                <td className="border border-gray-500 p-2">1.47 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Nevada</td>
                <td className="border border-gray-500 p-2">6.85 %</td>
                <td className="border border-gray-500 p-2">1.39 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">New Hampshire</td>
                <td className="border border-gray-500 p-2">0 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">New Jersey</td>
                <td className="border border-gray-500 p-2">6.63 %</td>
                <td className="border border-gray-500 p-2">-0.02 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">New Mexico</td>
                <td className="border border-gray-500 p-2">4.88 %</td>
                <td className="border border-gray-500 p-2">2.73 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">New York</td>
                <td className="border border-gray-500 p-2">4 %</td>
                <td className="border border-gray-500 p-2">4.53 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">North Carolina</td>
                <td className="border border-gray-500 p-2">4.75 %</td>
                <td className="border border-gray-500 p-2">2.25 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">North Dakota</td>
                <td className="border border-gray-500 p-2">5 %</td>
                <td className="border border-gray-500 p-2">2.04 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Ohio</td>
                <td className="border border-gray-500 p-2">5.75 %</td>
                <td className="border border-gray-500 p-2">1.49 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Oklahoma</td>
                <td className="border border-gray-500 p-2">4.50 %</td>
                <td className="border border-gray-500 p-2">4.49 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Oregon</td>
                <td className="border border-gray-500 p-2">0 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Pennsylvania</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0.34 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Rhode Island</td>
                <td className="border border-gray-500 p-2">7 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">South Carolina</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">1.50 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">South Dakota</td>
                <td className="border border-gray-500 p-2">4.20 %</td>
                <td className="border border-gray-500 p-2">1.91 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Tennessee</td>
                <td className="border border-gray-500 p-2">7 %</td>
                <td className="border border-gray-500 p-2">2.55 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Texas</td>
                <td className="border border-gray-500 p-2">6.25 %</td>
                <td className="border border-gray-500 p-2">1.95 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Utah</td>
                <td className="border border-gray-500 p-2">6.10 %</td>
                <td className="border border-gray-500 p-2">1.10 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Vermont</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0.36 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Virginia</td>
                <td className="border border-gray-500 p-2">5.30 %</td>
                <td className="border border-gray-500 p-2">0.47 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Washington</td>
                <td className="border border-gray-500 p-2">6.50 %</td>
                <td className="border border-gray-500 p-2">2.90 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">West Virginia</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0.57 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Wisconsin</td>
                <td className="border border-gray-500 p-2">5 %</td>
                <td className="border border-gray-500 p-2">0.43 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">Wyoming</td>
                <td className="border border-gray-500 p-2">4 %</td>
                <td className="border border-gray-500 p-2">1.44 %</td>
              </tr>
              <tr className="h-[60px]">
                <td className="border border-gray-500 p-2">D.C</td>
                <td className="border border-gray-500 p-2">6 %</td>
                <td className="border border-gray-500 p-2">0 %</td>
              </tr>
              
            </tbody>
          </table>

    </div>
  );
}

export default App;
