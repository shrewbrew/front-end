import React, { useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './style.css';

function PaymentInfo() {
  const [option, setOption] = useState(
    'Cheque mailed to me - Payment will be mailed to you at the above address'
  );
  const [paymnent, setPayment] = useState(false);
  const [fileSelected, setFileSelected] = useState();

  const outerClasses = classNames(
    'section center-content',
    'illustration-section-01'
  );

  const togglePayOption = (e) => {
    setOption(e.target.value);
  };
  const saveFileSelected = (e) => {
    //in case you wan to print the file selected
    //console.log(e.target.files[0]);
    setFileSelected(e.target.files[0]);
  };

  const history = useHistory()

  const isChecked = (value) => option === value;
  const url = '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('CheckorDepositFile', fileSelected);
    try {
      const res = await axios.post(url, formData);
      alert(res.data);
    } catch (error) {
      alert(error);
    }
    history.push('/claim/residenceinfo')

  };

  return (
    <section className={outerClasses}>
      <h1>PART 1: PAYMENT OPTIONS</h1>
      <div className='container border'>
        <li>
          If you'd like a direct deposit, you must attach a void cheque or
          direct deposit form to this claim form, so we know where to send the
          money.
        </li>

        <li>
          The bank account needs to be in your name. We can't send money to
          someone else's account. If your account changes, please contact the
          Administrator.
        </li>

        <li>We can only deposit to Canadian bank accounts.</li>

        <li>
          Please make sure the information you give us is correct. Once the
          money is deposited, we can't get it back or make replacement payments.
          For example, if you provide a family member's banking information
          instead of your own, we can't get that money back for you.
        </li>

        <li>
          If the void cheque or direct deposit form are invalid, we will mail
          your cheque instead.
        </li>
        <br></br>
        <h6>
          <em>Tips and Pointers for Direct Deposits</em>
        </h6>
        <br></br>
        <li>
          If you'd like a direct deposit, you must attach a void cheque or
          direct deposit form to this claim form, so we know where to send the
          money.
        </li>

        <li>
          The bank account needs to be in your name. We can't send money to
          someone else's account. If your account changes, please contact the
          Administrator.
        </li>

        <li>We can only deposit to Canadian bank accounts.</li>

        <li>
          Please make sure the information you give us is correct. Once the
          money is deposited, we can't get it back or make replacement payments.
          For example, if you provide a family member's banking information
          instead of your own, we can't get that money back for you.
        </li>

        <li>
          If the void cheque or direct deposit form are invalid, we will mail
          your cheque instead.
        </li>

        <h6>
          If your claim is approved, we can pay you by cheque or by direct
          deposit. Which would you prefer?
        </h6>

        <form
          id='form-part'
          className='personal-info-form'
          onSubmit={handleSubmit}
        >
          <label htmlFor='payment'>
            <input
              type='radio'
              name='pay'
              value='Cheque mailed to me - Payment will be mailed to you at the above address'
              checked={isChecked(
                'Cheque mailed to me - Payment will be mailed to you at the above address'
              )}
              onChange={togglePayOption}
              // onClick={toggleUpload}
            />
            Cheque mailed to me - Payment will be mailed to you at the above
            address
          </label>
          <label htmlFor='payment'>
            <input
              type='radio'
              name='pay'
              value='Direct deposit (must provide direct deposit form or void cheque)'
              checked={isChecked(
                'Direct deposit (must provide direct deposit form or void cheque)'
              )}
              onChange={togglePayOption}
              onClick={() => setPayment(true)}
            />
            Direct deposit (must provide direct deposit form or void cheque)
          </label>
          {paymnent && (
            <>
              {/* <button >Upload Void Cheque / Direct Deposit Form</button> */}
              <input id='files' type='file' onChange={saveFileSelected}></input>
            </>
          )}
          <button>Next and Save</button>
        </form>
      </div>
    </section>
  );
}

export default PaymentInfo;
