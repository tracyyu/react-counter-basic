import React from 'react';
import PropTypes from 'prop-types';

const Header = props=> (
    <nav className="navbar header navbar-dark bg-dark">
        <div className="container-fluid">
            <div className="row m-auto">
                <i className="far fa-arrow-alt-circle-right fa-4x text-white"></i>
                <div className="h1 ml-2 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.propTypes = {
    title: PropTypes.string
};
  
  export default Header;
  