import { useState } from "react";

const InputField = ({ label, type = "text", value, setValue }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all duration-300 ${focus || value ? "top-2 text-xs text-green-500" : "text-base"}`}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg dark:shadow-none"
        onFocus={() => setFocus(true)}
        onBlur={(e) => !e.target.value && setFocus(false)}
        required
      />
    </div>
  );
};

const SelectField = ({ label, options, value, setValue }) => {
  return (
    <div className="relative w-full">
      {/* <label className="block text-gray-500 text-sm mb-1">{label}</label> */}
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full p-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg dark:shadow-none"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    productName: "",
    color: "",
    length: "",
    width: "",
    depth: "",
    inches: "",
    note: ""
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-10 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          <InputField label="Your Name" value={formData.name} setValue={(val) => handleChange("name", val)} />
          <InputField label="Your Email" type="email" value={formData.email} setValue={(val) => handleChange("email", val)} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <InputField label="Your Phone" type="tel" value={formData.phone} setValue={(val) => handleChange("phone", val)} />
        <InputField label="Quantity" type="number" value={formData.quantity} setValue={(val) => handleChange("quantity", val)} />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <InputField label="Product Name" value={formData.productName} setValue={(val) => handleChange("productName", val)} />
        <SelectField label="Select Color" options={["Red", "Green", "Blue", "Black", "White"]} value={formData.color} setValue={(val) => handleChange("color", val)} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <InputField label="L" type="number" value={formData.length} setValue={(val) => handleChange("length", val)} />
          <InputField label="W" type="number" value={formData.width} setValue={(val) => handleChange("width", val)} />
          <InputField label="D" type="number" value={formData.depth} setValue={(val) => handleChange("depth", val)} />
          <InputField label="Inches" type="text" value={formData.inches} setValue={(val) => handleChange("inches", val)} />
        </div>
        
        <textarea
          className="w-full p-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg dark:shadow-none"
          placeholder="Write Note"
          value={formData.note}
          onChange={(e) => handleChange("note", e.target.value)}
          rows="4"
          required
        ></textarea>
        <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition">Submit</button>
      </form>
    </section>
  );
}
