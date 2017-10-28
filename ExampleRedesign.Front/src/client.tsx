
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { App } from "./components/App";

const root = document.getElementById('App');

ReactDOM.render(
    <AppContainer>
        <App id='firstApp' />
    </AppContainer>,
    root
);

if(module.hot){
    module.hot.accept('./components/App',()=>{
        const NextApp = require<{default: typeof App}>('./components/App').default;

        ReactDOM.render(
            <AppContainer>
              <NextApp id='firstApp' />
            </AppContainer>,
            root
          );
    });

}