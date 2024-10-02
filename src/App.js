import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "./app/hooks/withRouter";
import AnimatedCursor  from "./app/hooks/AnimatedCursor";
import "./App.css";
import RenderComponents from "./routes";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="cursor__dot">
          <AnimatedCursor
              innerSize={15}
              outerSize={15}
              color="255, 0, 119"
              outerAlpha={0.4}
              innerScale={0.7}
              outerScale={5}
          />
        </div>
        <ScrollToTop>
          {/*<Headermain />*/}
          <RenderComponents />
        </ScrollToTop>
      </Router>
  );
}
