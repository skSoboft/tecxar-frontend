import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import your main App component
import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./redux/store"; // Import your Redux store configuration
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// );
