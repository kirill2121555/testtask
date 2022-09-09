import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Fullfoto from '../Component/Fullfoto';
import Listposts from '../Component/Listposts';

const AppRouter = () => {
  
    return (
        <Routes>
            <Route path="/" element={<Listposts/>} />
            <Route path="/fullphoto/:id" element={<Fullfoto/>} />
            <Route
                path="*"
                element={<h1>Page not Found</h1>}
            />
        </Routes>
    )
}

export default AppRouter