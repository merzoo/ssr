import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../store/actions/home";

let Home = (props) => {
  useEffect(() => {
    if (props.list.length === 0) {
      props.getHomeList();
    }
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <ul className="list-group">
          {props.list.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Home = connect((state) => state.home, actions)(Home);

Home.loadData = (store) => {
  return store.dispatch(actions.getHomeList());
};

export default Home;
