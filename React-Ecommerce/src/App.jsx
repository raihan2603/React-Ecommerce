
import { BrowserRouter } from 'react-router';
import AllRoutes from './Routes.Jsx';
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <BrowserRouter>
        <AllRoutes/>
        <Toaster position="top-right"/>
    </BrowserRouter>
  )
}

export default App
