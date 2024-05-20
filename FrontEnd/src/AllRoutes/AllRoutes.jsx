import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Success from '../Pages/Success'
import Failure from '../Pages/Failure'
import Reason from "../Pages/Reason"
import Payment from '../Pages/Payment'
import PrivacyPolicy from '../Pages/privacy'
import Footer from '../components/Footter'
import BottomBar from '../components/BottomBar'
import TermsConditions from '../Pages/termscondition'
import Refund from '../Pages/refund'
import ContactUs from '../Pages/Contactus'


const AllRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/payment" element={<Payment />} />
                <Route path='/success' element={<Success />} />
                <Route path='/failure' element={<Failure />} />
                <Route path='/reason:reasonid' element={<Reason />} />
                <Route path='/privacy' element={<PrivacyPolicy/>}/>
                <Route path='/termscondition' element={<TermsConditions/>}/>
                <Route path='/refund' element={<Refund/>}/>
                <Route path='/ContactUs' element={<ContactUs/>}/>
            </Routes>
            <Footer/>
            <BottomBar/>
        </>
    )
}

export default AllRoutes