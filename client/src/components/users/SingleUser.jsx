import React from "react";
import PropTypes from "prop-types";

const SingleUser = props => {
  const toggleButton = () => {
    props.toggleButton(props.user);
  };

  return (
    <div className="mb-2">
      <div className="card">
        <div className="card-body">
          <button
            className={
              props.isDisplayed ? "btn btn-info" : "btn btn-outline-info"
            }
            onClick={toggleButton}
          >
            {props.formatName(props.user.name)}
          </button>
          <div>
            <span>
              {props.isDisplayed && (
                <div>
                  <div>{props.formatPhoneNumber(props.user.phone)}</div>
                  <div>
                    {props.user.address.street} {props.user.address.suite}
                  </div>
                  <div>
                    {props.user.address.city} {props.user.address.zipcode}
                  </div>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleUser.propTypes = {
  isDislayed: PropTypes.bool,
  formatName: PropTypes.func.isRequired,
  formatPhoneNumber: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired
    })
  })
};

export default SingleUser;
