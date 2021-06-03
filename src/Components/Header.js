import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("click");
  };

  return (
    // header className creates flexbox, look at index.css
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Add" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// Header.PropTypes = {
//   title: PropTypes.string.isRequired,
// };

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
