import Header from "./Components/UI/Header";
import Form from "./Components/Form/Form";
import Table from "./Components/Tabel/Table";
import { useState } from "react";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    const newYearlyData = [];

    let currentSavings = +userInput["current-savings"];
    let totalIntrestOfYear = 0;
    let totalInvestedCapital = currentSavings;
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalIntrestOfYear += yearlyInterest;
      totalInvestedCapital = totalInvestedCapital + yearlyContribution;
      newYearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        investedCapital: yearlyContribution * (i + 1),
        totalIntrestOfYear: totalIntrestOfYear,
        totalInvestedCapital: totalInvestedCapital,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setYearlyData(newYearlyData);
  };

  const resetHandler = () => {
    setYearlyData([]);
  };

  return (
    <div>
      <Header />
      <Form addYearlyData={calculateHandler} onReset={resetHandler} />
      <Table data={yearlyData} />
    </div>
  );
}

export default App;
