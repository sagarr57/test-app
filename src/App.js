import { Nav, NavItem, Button, DropdownItem } from "react-bootstrap";

import React, { useState } from "react";

import Sidebar from "react-bootstrap-sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Invoice from "./InvoiceComponent/InvoiceListComponent";

const SidebarComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <Button bsStyle="primary" onClick={() => setIsVisible(true)}>
        <DropdownItem glyph="menu-hamburger" />
      </Button>
      <Sidebar
        side="left"
        isVisible={isVisible}
        onHide={() => setIsVisible(false)}
      >
        <Nav>
          <NavItem href="/invoices">Invoices</NavItem>
        </Nav>
      </Sidebar>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <SidebarComponent />
        <Route path="/invoices" component={Invoice} />
      </Router>
    </div>
  );
}

export default App;
