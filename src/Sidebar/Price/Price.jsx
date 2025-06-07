import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="1000-10000"
          title="₹1000 - ₹10000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="10000-20000"
          title="₹10000 - ₹20000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="20000-100000"
          title="Over ₹20000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;