import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './Redux/store.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './Redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
        <PersistGate persistor={persistor}>
                <Provider store={Store}>
                        <App />
                </Provider>
        </PersistGate>
)
