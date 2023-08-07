'use client';
import { Provider } from 'react-redux';
import store from './Redux/store'; 
import RootLayout from './layout'; 
function MyApp({ Component, pageProps,children }) {
    return (
        <Provider store={store}>
            {/* <RootLayout>
                <Component {...pageProps} />
            </RootLayout> */}
            {children}
        </Provider>
    );
}

export default MyApp;
