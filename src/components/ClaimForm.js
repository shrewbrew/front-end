import React, { useState } from 'react'
import classNames from "classnames";
import PersonalInfo from './sections/FormInfo/PersonalInfo';
import PaymentInfo from './sections/FormInfo/PaymentInfo';


function ClaimForm({ className }) {
    const [page, setPage] = useState(0);

    const formTitles = ["PART 1: YOUR NAME AND KEY DETAILS", "PART 1: PAYMENT OPTIONS"]

    const pageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo />
        } else if (page === 1) {
            return <PaymentInfo />
        }
    }

    const outerClasses = classNames(
        "section center-content",
        className
    );
    return (
        <section className={outerClasses}>
            <div className='container'>
                <div className='header'>
                    <h1>{formTitles[page]}</h1>
                </div>
                <div className='body'>
                    {pageDisplay()}
                </div>
                <div className='footer'></div>
                {/* <button disabled={page === 0} onClick={() => { setPage((currentPage) => currentPage - 1) }} >Prev</button> */}
                {/* <button disabled={page === formTitles.length - 1} onClick={() => { setPage((currentPage) => currentPage + 1) }} form='form-part' type="submit">Next</button> */}
            </div>

        </section>
    )
}

export default ClaimForm