import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ChatScreen from './pages/chatScreen';
import Home from './pages/home';

// import ChatScreen from './components/pages/chatScreen';
// import Home from './components/pages/home';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Error from "./pages/Error"
const router= createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        errorElement: <Error></Error>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/chat', element: <ChatScreen/>},
            {path: '/login', element: <Login/>},
            {path: '/signup', element: <Signup/>}
        ],
    }
])

function App() {
 return <RouterProvider router ={router}/>
}

export default App;
