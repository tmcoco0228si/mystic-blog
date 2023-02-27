import Link from "next/link";
import React from "react";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Hamburger from "hamburger-react";

export const Burger = () => {
  const [toggled, setToggled] = useState(false);
  return (
    <div>
      <Menu>
      <Hamburger
        color="#4FD1C5"
        onToggle={(toggled) => {
          if (toggled) {
            //open menu
            console.log(toggled);
            setToggled(false);
            return (
              <>
                <h1>閉じた</h1>
              </>
            );
          } else {
            //close menu
            console.log(toggled);
            setToggled(true);
            return (
              <>
                <h1>開いた</h1>
              </>
            );
          }
        }}
        
      />
      </Menu>
    </div>
    
  );
};
