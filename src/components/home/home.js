import React from "react";
import { connect } from "react-redux";

const Home = (state) => {
  return <div>HOME</div>;
};

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(Home);
