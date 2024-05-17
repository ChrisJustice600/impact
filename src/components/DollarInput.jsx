import { useRef, useState } from "react";

const DollarInput = () => {
  const inputRef = useRef(null);
  const [formattedAmount, setFormattedAmount] = useState("0.00"); // State for formatted display value

  const handleChange = (event) => {
    const { value } = event.target;

    // Allow entering decimal point and numbers only
    const allowedChars = /^\d+\.?\d*$/;
    if (!allowedChars.test(value)) {
      return;
    }

    // Format value with commas on every keystroke
    const formattedValue = formatCents(value);
    setFormattedAmount(formattedValue);
  };

  const handleBlur = () => {
    // Ensure formatted value on blur (optional)
    const formattedValue = formatCents(inputRef.current.value);
    setFormattedAmount(formattedValue);
  };

  const formatCents = (valueString) => {
    const value = parseFloat(valueString) || 0;
    const cents = Math.floor(value * 100) % 100; // Get cents

    const formattedCents = cents < 10 ? `0${cents}` : cents.toString(); // Format cents with leading zero
    const formattedDollars = value
      .toFixed(2)
      .replace(/\d(?=(\d{3})+(?!\d))/g, ","); // Format dollars with commas

    return `${formattedDollars}.${formattedCents}`;
  };

  return (
    <div className="relative flex items-center w-full">
      <span className="absolute left-0 px-3 text-gray-400 pointer-events-none">
        $
      </span>
      <input
        type="text"
        ref={inputRef}
        value={formattedAmount} // Display formatted value
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <p>Montant saisi: ${formattedAmount}</p>
    </div>
  );
};

export default DollarInput;
