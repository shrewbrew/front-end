import React, { useState } from 'react'
import axios from 'axios';
import classNames from "classnames";
import { useHistory } from 'react-router-dom'



function Authorization() {
    const url = 'https://localhost:44378/api/ClaimManagement/SectionThree'
    const [fileSelected, setFileSelected] = useState();

    const history = useHistory();

    const outerClasses = classNames(
        "section center-content",
        "illustration-section-01"
    );

    const saveFileSelected = (e) => {
        //in case you wan to print the file selected
        //console.log(e.target.files[0]);
        setFileSelected(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append("AuthorizationFile", fileSelected)
        try {
            const res = await axios.put(url, formData)
            alert(res.data)
        } catch (error) {
            alert(error)
        }
        history.push('/claim/paymentinfo')
    }
    return (
        <section className={outerClasses}>
            <div className='container border'>
                <h1>PART 3: AUTHORIZATION</h1>
                <form id='form-part' className='personal-info-form' onSubmit={handleSubmit}>
                    <p>In this section, we <strong>make sure that you acknowledge and agree to the following key terms and conditions</strong> as part of submitting your claim:</p>
                    <ol type="1">
                        <li>The Administrator’s job is to process applications carefully, fairly, and efficiently, based on the instructions they are given and the information they are sent. They don’t represent Canada, the First Nations, or First Nations members. They are not lawyers, and they don’t offer legal advice</li>

                        <li>Because the Administrator just administers the claims, it is not their job to identify or protect the legal rights of Canada, First Nations or First Nations members, or to raise issues that Canada, First Nations or First Nations members didn’t raise.
                            <ul><li style={{ "list-style-type": 'circle' }}><em>The Administrator handles claims applications, like the one you're making by submitting this form. </em></li></ul></li>

                        <li>Free legal advice is available to you from your lawyers. You can reach them toll-free on the Class Counsel Help Line at 1-833-265-7589.</li>

                        <li>As part of this claims process, the Administrator may contact you to ask for further information.</li>

                        <li>The Administrator, as part of this claims process, may disclose the information you provide and/or your amount of compensation, to any of the following groups: the First Nation where you are a member, the First Nation(s) where you lived, Canada, Class Counsel, the Third-Party Assessor, the Joint Committee, the Settlement Implementation Committee, and/or the First Nations Advisory Committee on Safe Drinking Water.
                            <ul><li style={{ "list-style-type": 'circle' }}><em>Privacy is important. The information you submit will be kept confidential except where we need to share it with others as part of this process.
                            </em></li></ul>
                        </li>
                        <li>
                            Canada, as part of this process, may disclose information in its possession to any of the following groups: the Administrator, Class Counsel, the Third-Party Assessor, the Joint Committee, the Settlement Implementation Committee, and/or the First Nations Advisory Committee on Safe Drinking Water

                            <ul><li style={{ "list-style-type": 'circle' }}><em>You can find out more about the roles and memberships of these groups in the FAQ page available online at www.firstnationsdrinkingwater.ca
                            </em></li></ul>
                        </li>
                        <li>We will be relying on the information you provide, and <strong>by signing and submitting the authorization form you are confirming that all the information you’ve provided is true to the best of your knowledge</strong>. Where someone has helped you fill out this form, you are also confirming that they read you everything they wrote on this form and everything they included with it or attached to it.</li>
                    </ol>
                    {/* <button>Add Impacted First Nation</button> */}
                    <br></br>
                    <p><strong>Please complete the Authorization </strong></p>
                    <p>You can only upload a single file at a time.</p>
                    <p>You can upload an Image, PDF, or Word Document.
                        <li>Click to Download, sign, and upload a completed Authorization.</li>
                        <button>Click to Download</button>
                    </p>
                    <br></br>
                    <br></br>
                    <span>Upload Completed Authorization</span>
                    <input
                        type='file'
                        onChange={saveFileSelected}
                    />
                    <button>Next and Save</button>
                </form>

            </div>
        </section>

    )
}

export default Authorization