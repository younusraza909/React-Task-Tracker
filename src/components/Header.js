import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = () => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color="green" text="Hello" onClick={onClick} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
