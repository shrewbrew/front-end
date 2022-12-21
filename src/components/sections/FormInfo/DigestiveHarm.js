import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function DigestiveHarm() {
  const [pname, setPName] = useState();
  const [level, setLevel] = useState(
    'Level 1: More than 1 month, but less than 1 year'
  );
  const [levelOneInput, setLevelOneInput] = useState(true);
  const [levelTwoInput, setLevelTwoInput] = useState(false);
  const [levelOne, setLevelOne] = useState('');
  const [levelTwo, setLevelTwo] = useState('');
  const [diagnosisInfo, setDiagnosisInfo] = useState({
    diagnosis: [],
  });

  const isSelected = (value) => level === value;
  const toggleChange = (e) => {
    setLevel(e.target.value);
    setLevelOne('');
    setLevelTwo('');
    if (!levelOneInput) {
      setLevelOneInput(true);
      setLevelTwoInput(false);
    }
    if (!levelTwoInput) {
      setLevelTwoInput(true);
      setLevelOneInput(false);
    }
  };

  const handleChange = (e) => {
    const { value, checked } = e.target;
    const { diagnosis } = diagnosisInfo;

    if (checked) {
      setDiagnosisInfo({
        diagnosis: [...diagnosis, value],
      });
    } else {
      setDiagnosisInfo({
        diagnosis: diagnosis.filter((e) => e !== value),
      });
    }
  };

  console.log(diagnosisInfo.diagnosis.toString())

  const url = 'https://localhost:44378/api/ClaimManagement/Section4B';

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ClaimID: parseInt(localStorage.getItem('claimID')),
      Test: diagnosisInfo.diagnosis,
      digestiveLevelOne : levelOne,
      digestiveLevelTwo : levelTwo,
      digestiveNameOfPractitioner : pname,
       
    }
    // formData.append('daignosis', diagnosisInfo.diagnosis);
    // formData.append('pname', pname);
    // formData.append('levelOne', levelOne);
    // formData.append('levelTwo', levelTwo);

    try {
      const res = await axios.put(url, data);
      alert(res.data);
    } catch (error) {
      alert(error);
    }

    history.push('/claim/specinjury-2')
  };
  return (
    <section className='section center-content'>
      <div className='container border' style={{ 'text-align': 'left' }}>
        <h2>
          <strong>Digestive (Gastroenterological) Harm</strong> <br></br>
          <small>
            <i>
              {' '}
              (disorders affecting the stomach, intestines and associated
              organs){' '}
            </i>
          </small>
        </h2>
        <strong> Specified Injuries (Medical Diagnosis) </strong>
        <br></br>
        <br></br>
        Select (✔) any that apply
        <br></br>
        <form
          id='form-part'
          className='personal-info-form'
          onSubmit={handleSubmit}
        >
          <label>
            <input
              type='checkbox'
              name='diagnosis'
              value='Ingestion of Bacteria'
              onChange={handleChange}
            />

            <b> Ingestion of Bacteria </b>
          </label>
          <label>
            <input
              type='checkbox'
              name='diagnosis'
              value='Viral infection'
              onChange={handleChange}
            />

            <b> Viral infection </b>
          </label>
          <label>
            <input
              type='checkbox'
              name='diagnosis'
              value='Ingestion of chemicals in quantities harmful to human health'
              onChange={handleChange}
            />

            <b>
              {' '}
              Ingestion of chemicals in quantities harmful to human health{' '}
            </b>
          </label>
          <label>
            <input
              type='checkbox'
              name='diagnosis'
              value='Stomach ulcers'
              onChange={handleChange}
            />

            <b> Stomach ulcers </b>
          </label>
          <br></br>
          {diagnosisInfo.diagnosis}
          <div
            style={{ 'border-top': '3px solid black', 'padding-top': '5px' }}
          >
            &nbsp;
            <h4> Symptoms &amp; Health Care Provider(s) </h4>
            Please provide the name of health care practitioner(s) from whom
            they sought or received medical treatment for this injury
            <br></br>
            <br></br>
            <strong> Symptoms may include </strong> stomach cramps, nausea,
            diarrhea, abdominal pain, dehydration, constipation
            <br></br>
            <br></br>
            <p>
              <strong>Digestive Harm Level</strong>
            </p>
          </div>
          <label htmlFor='harm'>
            <input
              type='radio'
              name='harm'
              value='Level 1: More than 1 month, but less than 1 year'
              checked={isSelected(
                'Level 1: More than 1 month, but less than 1 year'
              )}
              onChange={toggleChange}
            />
            Level 1: More than 1 month, but less than 1 year
          </label>
          <label htmlFor='harm'>
            <input
              type='radio'
              name='harm'
              value='Level 2: 1 year or more'
              checked={isSelected('Level 2: 1 year or more')}
              onChange={toggleChange}
            />
            Level 2: 1 year or more
          </label>
          <br></br>
          <p>
            <strong>Practitioner Details</strong>
          </p>
          <label htmlFor='practioner'>Name of Practitioner</label>
          <input
            value={pname}
            type='text'
            id='pname'
            name='pname'
            onChange={(e) => {
              setPName(e.target.value);
            }}
          />
          <br></br>
          <p>
            <strong>Practitioner Type</strong>
          </p>
          {levelOneInput && (
            <>
              <label htmlFor='level1'>
                Level 1 Harm Health Practitioner Type
              </label>
              <input
                value={levelOne}
                type='text'
                id='levelOne'
                name='levelOne'
                onChange={(e) => {
                  setLevelOne(e.target.value);
                }}
              />
            </>
          )}
          {levelTwoInput && (
            <>
              <label htmlFor='level2'>
                Level 2 Harm Health Practitioner Type
              </label>
              <input
                value={levelTwo}
                type='text'
                id='levelTwo'
                name='levelTwo'
                onChange={(e) => {
                  setLevelTwo(e.target.value);
                }}
              />
            </>
          )}
          <button>Save</button>
        </form>
      </div>
    </section>
  );
}

export default DigestiveHarm;
