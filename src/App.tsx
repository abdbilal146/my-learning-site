
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'

// Components
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import MainContent from './components/main/MainContent'
import ModalElement from './components/main/ModalElement'
import Canva from './components/canvas/Canva'
import ContactMe from './components/contact-me/ContactMe'
import ArticleListPage from './components/article/ArticleListPage'


const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> 
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/', 
        element: <MainContent />,
        children: [
          {
            path: 'courses',
            element: <ModalElement />
          },
          {
            path: 'courses/session/:id',
            element: <ModalElement />
          }
        ]
      },
      {
        path: 'canvas',
        element: <Canva />
      },
      {
        path: 'contact-me',
        element: <ContactMe />
      },
      {
        path: 'articles',
        element: <ArticleListPage />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App