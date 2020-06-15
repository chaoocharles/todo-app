import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";

const NavItems = ({ signOut, uid }) => {
  if (uid) {
    return (
      <Link to="/signin" className="nav-link" onClick={signOut}>
        Sign Out
      </Link>
    );
  } else {
    return (
      <>
        <Link to="/signup" className="nav-link">
          Sign Up
        </Link>
        <Link to="/signin" className="nav-link">
          Sign In
        </Link>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(NavItems);
