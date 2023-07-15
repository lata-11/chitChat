import Auth from './components/authentication/auth';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import ChatScreen from './components/pages/chatScreen';
import Home from './components/pages/home';

const router= createBrowserRouter([
    {
        path:'/',
        element: <Home/>,
        children: [
            {path: '/', element: <Home/>},
            {path: '/chat', element: <ChatScreen/>},
            {path: '/signup', element: <Auth/>},
        ],
    }
])

function App() {
 return <RouterProvider router ={router}/>
}

export default App;
