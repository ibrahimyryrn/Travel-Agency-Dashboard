//@ts-nocheck

import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";
import { useEffect, useRef } from "react";

const MobileSidebar = () => {
  const sidebarRef = useRef<SidebarComponent>(null);

  useEffect(() => {
    sidebarRef.current?.hide();
  }, []);
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />

          <h1>Tourvisto</h1>
        </Link>

        <button onClick={() => sidebarRef.current?.toggle()}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <SidebarComponent
        width={270}
        ref={sidebarRef}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
