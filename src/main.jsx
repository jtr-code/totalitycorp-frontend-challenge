import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/productContext";
import { CartProvider } from "./context/cartContext";
import { FilterContextProvider } from "./context/filterContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <AppProvider>
                <FilterContextProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterContextProvider>
            </AppProvider>
        </Auth0Provider>
    </React.StrictMode>
);
