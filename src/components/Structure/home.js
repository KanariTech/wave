import React from 'react';
const Home = props => {
  return(
    <div {...props} className="max structure-home">
      {props.children}
    </div>
  )
}
export default Home;
