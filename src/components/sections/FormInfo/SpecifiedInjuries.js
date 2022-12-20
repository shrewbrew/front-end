import React, { useContext, useState, createContext } from 'react';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function SpecifiedInjuries() {
  const [radio, setRadio] = useState('No');

  //   const radioState = useContext(RadioContext);
  const outerClasses = classNames(
    'section center-content',
    'illustration-section-01'
  );

  const isSelected = (value) => radio === value;

  const toggleChange = (e) => {
    setRadio(e.target.value);
  };

  const history = useHistory();
  const url = 'https://localhost:44378/api/ClaimManagement/SectionFourA'

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('injuryBtnValue', radio.toString());
    const data = {
      WillYouBeClaimingSpecifiedInjuries: radio,
      ClaimID: parseInt(localStorage.getItem('claimID')),
    }

    try {
      const res = await axios.put(url, data)
      history.push('/claim/specinjury-2');
    } catch (error) {
      alert(error)
    }

  };

  return (
    <section className={outerClasses}>
      <div className='container border'>
        <h1>
          PART 4: SPECIFIED INJURIES<br></br>
          (This section is optional)
        </h1>
        <form
          id='form-part'
          className='personal-info-form'
          onSubmit={handleSubmit}
        >
          <p>
            This part is optional. You don’t have to fill it out. The intention
            of this settlement is to offer recognition and comfort to those that
            have suffered. Unclean and unsafe drinking water leads to suffering
            for everyone, but some people suffered additional harms: serious and
            specific injuries directly caused by unclean water. If that happened
            to you, then you can fill out this part and make a claim for
            additional compensation.
          </p>
          <p>
            It is often difficult to talk about suffering. We don’t want to
            re-traumatize anyone, so we’ve tried to keep this form as simple and
            matter of fact as we can. If emotional support would be helpful,
            please connect with the Hope for Wellness Help Line at
            1-855-242-3310 or online at www.hopeforwellness.ca.
          </p>
          &nbsp;
          <div
            style={{
              'border-top': '1px solid black',
              'border-bottom': '1px solid black',
              'background-color': '#bcebff',
            }}
          >
            <p>
              <strong>
                <i>
                  There are two levels of additional compensation. Here are the
                  rules for making a claim:
                </i>
              </strong>
            </p>
          </div>
          &nbsp;
          <div
            style={{
              display: 'flex',
              'justify-content': 'space-evenly',
              'flex-wrap': 'wrap',
            }}
          >
            <div
              style={{
                border: '1px solid black',
                'max-width': '500px',
                padding: '14px 6px',
                margin: '4px',
                padding: '0px 10px',
                'text-align': 'left',
              }}
            >
              <strong>
                Harm Level 1 is for serious harms that lasted more than a month
                but less than a year.
              </strong>{' '}
              To be eligible you must meet <strong>all</strong> the following
              criteria:<br></br>
              <ol>
                <li>
                  They must have suffered significant and prolonged health
                  problems that harmed their quality of life and disrupted their
                  well-being and/or daily activities.
                </li>
                <li>
                  The injuries must have been directly caused by the Long-Term
                  Drinking Water Advisory , either because they used treated or
                  tap water in accordance with the advisory but still got sick,
                  or because they didn’t have proper access to treated or tap
                  water.
                </li>
                <li>
                  The health symptoms must have persisted for at least one year
                  of consecutive days.
                </li>
                <li>
                  The health symptoms must have persisted for at least one year
                  of consecutive days.
                </li>
              </ol>
            </div>
            <div
              style={{
                border: '1px solid black',
                'max-width': '500px',
                padding: '14px 6px',
                margin: '4px',
                padding: '0px 10px',
                'text-align': 'left',
              }}
            >
              <strong>
                Harm Level 2 is for serious harms that lasted more than one year
              </strong>
              . To be eligible you must meet <strong>all</strong> the following
              criteria:
              <ol>
                <li>
                  They must have suffered significant and prolonged health
                  problems that harmed their quality of life and disrupted their
                  well-being and/or daily activities.
                </li>
                <li>
                  The injuries must have been directly caused by the Long-Term
                  Drinking Water Advisory , either because they used treated or
                  tap water in accordance with the advisory but still got sick,
                  or because they didn’t have proper access to treated or tap
                  water.
                </li>
                <li>
                  The health symptoms must have persisted for at least one year
                  of consecutive days.
                </li>
                <li>
                  The health symptoms must have persisted for at least one year
                  of consecutive days.
                </li>
              </ol>
            </div>
          </div>
          <li>
            Compensation amounts for Specified Injuries will depend on how many
            eligible claims are made by Class Members. If you are eligible, your
            compensation will be based on the total number of eligible claims,
            the type of harm you suffered, and the level of that harm.
          </li>
          <li>
            You can choose more than one of the nine types harm in the list on
            the next page, but you can only choose one level of harm for each
            type. Please identify all that apply to you. If you choose several
            types of harm, the Administrator may contact you for additional
            clarification.
          </li>
          <li>
            You do not have to provide supporting documents or testimony to make
            a claim. But if you want to, when you submit your claim you can
            include things like (a) medical records of the injury and its cause;
            (b) other records, including written records, photographs, and
            videos, of the injury and its cause; (c) a written statement; or (d)
            oral testimony.
          </li>
          <h6>Will you be claiming Specified Injuries?</h6>
          <label htmlFor='injury'>
            <input
              type='radio'
              name='injury'
              value='No'
              checked={isSelected('No')}
              onChange={toggleChange}
            />
            No
          </label>
          <label htmlFor='injury'>
            <input
              type='radio'
              name='injury'
              value='Yes'
              checked={isSelected('Yes')}
              onChange={toggleChange}
            />
            Yes
          </label>
          <button>Next and Save</button>
        </form>
      </div>
    </section>
  );
}

export default SpecifiedInjuries;
