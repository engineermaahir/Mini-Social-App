import { createRoot } from 'react-dom/client'
import App from './App'

const Container = document.getElementById('root')
const root = createRoot(Container)
root.render(<App />)