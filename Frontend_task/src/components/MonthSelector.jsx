/* eslint-disable react/prop-types */
const MonthSelector = ({ month, setMonth }) => {
  return (
    <div className="mb-6">
      <label htmlFor="month-select" className="block text-sm font-medium text-gray-700 mb-2">Select Month:</label>
      <select 
        id="month-select"
        value={month} 
        onChange={(e) => setMonth(e.target.value)}
        className="p-2 border rounded w-full md:w-auto"
      >
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
    </div>
  );
};

export default MonthSelector;
