import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

function SwornDeclaration() {
  const [fileSelected, setFileSelected] = useState();

  const history = useHistory();

  const outerClasses = classNames(
    'section center-content',
    'illustration-section-01'
  );
  const url = 'https://localhost:44378/api/ClaimManagement/SectionFive';

  const saveFileSelected = (e) => {
    //in case you wan to print the file selected
    //console.log(e.target.files[0]);
    setFileSelected(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('swornFile', fileSelected);
    formData.append('claimID', localStorage.getItem('claimID'))
    try {
      const res = await axios.put(url, formData);
      alert("Form submitted successfully");
    } catch (error) {
      alert(error);
    }
    // history.push('/claim/paymentinfo');
  };
  return (
    <section className={outerClasses}>
      <div className='container border'>
        <h2>PART 5: SWORN / AFFIRMED DECLARATION</h2>
        <form
          id='form-part'
          className='personal-info-form'
          onSubmit={handleSubmit}
        >
          <p>You DO NOT need to complete this part UNLESS...</p>
          <ul>
            <li>
              you are making a claim in Part 4 for Specified Injuries
              compensation because you suffered serious and specific injuries
              that were directly caused by the Long-Term Drinking Water
              Advisory, either because you used treated or tap water in
              accordance with the advisory but still got sick, or because you
              didn’t have proper access to treated or tap water,{' '}
              <strong>or</strong>
            </li>
          </ul>
          <ul>
            <li>you don’t have a copy of your Personal ID</li>
          </ul>
          &nbsp;
          <p>
            <em>
              If either of the above apply to you, please complete this part
            </em>
            <br></br>
            &nbsp;
          </p>
          <p>
            This part of the Claim Form contains a “sworn declaration” where you
            swear or solemnly affirm, in front of a guarantor, that everything
            you have told us about your injuries in Part 4, or your identity in
            Part 1, is true
          </p>
          <p>
            If you are claiming for injuries, in this section you will also
            swear or solemnly affirm in front of your guarantor that those
            injuries were directly caused by the Long-Term Drinking Water
            Advisory, either because you used treated or tap water in accordance
            with the advisory but still got sick, or because you didn’t have
            proper access to treated or tap water
          </p>
          <p>Your guarantor must be one of the following…</p>
          <ul style={{ 'margin-left': '40px' }}>
            <li>
              <i>
                {' '}
                a community leader such as your Chief or a member of council
              </i>
            </li>
            <li>
              <i>any other elected official</i>
            </li>
            <li>
              <i>a Notary Public</i>
            </li>
            <li>
              <i>a Commissioner of Oaths</i>
            </li>
            <li>
              <i>a lawyer (including Class Counsel), doctor, or accountant</i>
            </li>
            <li>
              <i>a police officer</i>
            </li>
            <li>
              <i>
                any other person listed in the ‘Guarantor’ section of the FAQ
                page at{' '}
                <a href='https://www.firstnationsdrinkingwater.ca'>
                  www.firstnationsdrinkingwater.ca
                </a>
                <i></i>
              </i>
            </li>
            <i>
              <i></i>
            </i>
          </ul>
          <i>
            <i>
              <p>
                Your guarantor must witness you signing this section of the
                Claim Form. They do NOT need to read what you’ve written in this
                Claim Form but they DO need to confirm that the name you have
                provided is accurate
              </p>
              &nbsp;
              <p>
                Your guarantor also needs to describe their office and provide
                their contact information
              </p>
            </i>
          </i>
          <br></br>
          <p>
            <strong>Please complete the Authorization </strong>
          </p>
          <p>You can only upload a single file at a time.</p>
          <p>
            You can upload an Image, PDF, or Word Document.
            <li>
              Click to Download, sign, and upload a completed Authorization.
            </li>
            <button>Click to Download</button>
          </p>
          <br></br>
          <br></br>
          <span>Upload Completed Authorization</span>
          <input type='file' onChange={saveFileSelected} />
          <button>Next and Save</button>
        </form>
      </div>
    </section>
  );
}

export default SwornDeclaration;
