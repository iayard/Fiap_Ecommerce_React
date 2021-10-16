import React from "react";
import { useState } from "react/cjs/react.development";
import { CartIcon, FancyButton, TopBarContainer } from "./styles";

function TopBar(props) {
  console.log(props);

//const [showBtnLogin, setShowBtnLogin] = useState(true);

  return (
    <TopBarContainer>
      <a>
        <h1>{props.title}</h1>
      </a>
      <FancyButton to="/cart">
        <CartIcon />
        Checkout
      </FancyButton>
      {/*{showBtnLogin && <FancyButton>Login</FancyButton>}
      <button onClick={() => setShowBtnLogin(!showBtnLogin)}>Toggle Login</button>*/}
    </TopBarContainer>
  );
}

export default TopBar;

// class TopBar extends React.Component{

//     render(){
//         return <div>It's work TopBar</div>;
//     };
// }
