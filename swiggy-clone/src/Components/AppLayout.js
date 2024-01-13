import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from '../utils/appStore'
function AppLayout() {
  return (
    <Provider store={appStore}>
    <div className='App'>
    <Header/>
    <Outlet/>
    </div>
    </Provider>
  )
}

export default AppLayout