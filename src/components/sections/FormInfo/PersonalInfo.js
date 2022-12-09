import React, { useState } from 'react'
import axios from 'axios'
import "./style.css"

function PersonalInfo() {
    const [fname, setFname] = useState('')
    const [mname, setMname] = useState('')
    const [lname, setLname] = useState('')
    const [oname, setOname] = useState('')
    const [dob, setDOB] = useState('')
    const [ssn, setSSN] = useState('')

    const url = "https://localhost:44378/api/Account/Login"

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            // email: email,
            // password: pass
            // // Password: pass
        }
        // console.log(userData)

        axios.post(url, userData).then((result) => {
            alert(result.data)
        }).catch((error) => {
            alert(error)
        })


    }
    return (

        <div className="container">
            <form className="personal-info-form" onSubmit={handleSubmit}>
                <h6>Please fill in all you can here, so we can process your claim. What you write down should match what is on your government-issued ID. If a box doesn’t apply to you, please just leave it blank.</h6>
                <label htmlFor='First'>First Name:</label>
                <input value={fname} type='text' id='fname' name='fname' onChange={(e) => { setFname(e.target.value) }} />
                <label htmlFor='First'>Middle Name(s) (if applicable)</label>
                <input value={mname} type='text' id='mname' name='mname' onChange={(e) => { setMname(e.target.value) }} />
                <label htmlFor='First'>Last Name:</label>
                <input value={lname} type='text' id='lname' name='lname' onChange={(e) => { setLname(e.target.value) }} />
                <label htmlFor='First'>Other Name(s) know by (if applicable)</label>
                <input value={oname} type='text' id='oname' name='oname' onChange={(e) => { setOname(e.target.value) }} />
                <label htmlFor='dob'>Date of Birth</label>
                <input value={dob} type='date' id='dob' name='dob' onChange={(e) => { setDOB(e.target.value) }} />
                <h6>We understand that you might not have all this information, but please fill in all you can. Note that you must provide the Province and the name of your Band, and either your Indian Status Card Number and/or your Band Registration Number</h6>
                <table>
                    <tr>
                        <td>
                            <label htmlFor=''>Social Insurance Number (If available)</label>
                            <input value={ssn} type='text' id='ssn' name='ssn' onChange={(e) => { setSSN(e.target.value) }} />
                        </td>
                        <td>
                            <label htmlFor=''>Indian Status Card Number(If available)</label>
                            <input value={ssn} type='text' id='ssn' name='ssn' onChange={(e) => { setSSN(e.target.value) }} />
                        </td>
                        <td>

                            <label htmlFor=''>Band Registration Number(If available)</label>
                            <input value={ssn} type='text' id='ssn' name='ssn' onChange={(e) => { setSSN(e.target.value) }} />
                        </td>
                    </tr>
                </table>
                <h6>What we need here is your current mailing address or an address where you can be reached. We also ask for your phone number and email, but if you don’t have those that’s fine, please just leave those boxes blank.</h6>
                <h6>Current mailing address or the address where you can be reached</h6>
                <table>
                    <tr>
                        <td>
                            <label htmlFor=''>Social Insurance Number (If available)</label>
                            <input value={ssn} type='text' id='ssn' name='ssn' onChange={(e) => { setSSN(e.target.value) }} />
                        </td>
                        <td>
                            <label htmlFor=''>Indian Status Card Number(If available)</label>
                            <input value={ssn} type='text' id='ssn' name='ssn' onChange={(e) => { setSSN(e.target.value) }} />
                        </td>
                        <td>

                            <label htmlFor=''>Band Registration Number(If available)</label>
                            <input value={ssn} type='text' id='ssn' name='ssn' onChange={(e) => { setSSN(e.target.value) }} />
                        </td>
                    </tr>
                </table>
                <label htmlFor='First'>First Name:</label>
                <input value={fname} type='text' id='fname' name='fname' onChange={(e) => { setFname(e.target.value) }} />
                <label htmlFor='First'>Middle Name(s) (if applicable)</label>
                <input value={mname} type='text' id='mname' name='mname' onChange={(e) => { setMname(e.target.value) }} />
                <label htmlFor='First'>Last Name:</label>
                <input value={lname} type='text' id='lname' name='lname' onChange={(e) => { setLname(e.target.value) }} />
                <label htmlFor='First'>Other Name(s) know by (if applicable)</label>
                <input value={oname} type='text' id='oname' name='oname' onChange={(e) => { setOname(e.target.value) }} />
                <label htmlFor='dob'>Date of Birth</label>
                <input value={dob} type='date' id='dob' name='dob' onChange={(e) => { setDOB(e.target.value) }} />

            </form>
            {/* <button className='link-btn' onClick={() => onFormSwitch('register')}>Don't have an account? Register</button> */}
        </div>
    )
}

export default PersonalInfo