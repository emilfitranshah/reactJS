import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import App from "./components/Home/App";
import Contact from "./components/page/contact";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/halaman-kontak">Kontak</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={App} />
      <Route path="/halaman-kontak" component={Contact} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
