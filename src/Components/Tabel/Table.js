import styles from "./Table.module.css";

const Table = (props) => {
  if (props.data.length === 0) {
    return (
      <div className={styles.result}>
        <p>No Investement Data Found!</p>
      </div>
    );
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>
                {data.savingsEndOfYear.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>
                {data.yearlyInterest.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>
                {data.totalIntrestOfYear.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>

              <td>
                {data.totalInvestedCapital.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
