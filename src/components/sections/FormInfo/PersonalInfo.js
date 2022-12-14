import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

function PersonalInfo() {

    const [streetInput, setStreetInput] = useState(true)
    const [poBoxInput, setPoBoxInput] = useState(false)
    const [selectedCountry, setSelectedCOuntry] = useState('Canada')
    const [selectedFirstNation, setSelectedFirstNation] = useState('No')
    const [selectedGId, setSelectedGId] = useState('No')
    const [firstNationNameInput, setFirstNationNameInput] = useState(false)

    const [fname, setFname] = useState('');
    const [mname, setMname] = useState('');
    const [lname, setLname] = useState('');
    const [oname, setOname] = useState('');
    const [dob, setDOB] = useState('');
    const [sin, setSIN] = useState('');
    const [iscn, setISCN] = useState('');
    const [brn, setBRN] = useState('');
    const [bandName, setBandName] = useState('');
    const [provinceName, setProvinceName] = useState('');
    const [streetName, setStreetName] = useState('');
    const [unitNumber, setUnitNumber] = useState('');
    const [poBox, setPOBox] = useState('');
    const [ctc, setCTC] = useState('');
    const [province, setProvince] = useState('');
    const [postal, setPostal] = useState('');
    const [telephone, setTelephone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [firstNationName, setFirstNationName] = useState('')
    const [cname, setCName] = useState('');
    const [gID, setGID] = useState(false);

    const [span, setSpan] = useState('Data submission ongoing....')

    const url = 'https://localhost:44378/api/ClaimManagement/SectionOne';


    const toggleInput = () => {
        if (streetInput && !poBoxInput) {
            setStreetInput(false)
            setPoBoxInput(true)
        }
        else {
            setPoBoxInput(false)
            setStreetInput(true)
        }

    }
    const toggleCOuntry = (e) => {
        setSelectedCOuntry(e.target.value)
    }
    const toggleFirstNation = (e) => {
        setSelectedFirstNation(e.target.value)
    }

    const toggleGId = (e) => {
        setSelectedGId(e.target.value)
    }

    const isRadioSelected = (value) => selectedCountry === value
    const isSelected = (value) => selectedFirstNation === value
    const isChecked = (value) => selectedGId === value


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(url, {

                // claimID: 0,
                firstName: fname,
                middleName: mname,
                lastName: lname,
                otherName: oname,
                dateOfBirth: dob,
                socialInsuranceNumber: sin,
                indianStatusCardNumber: iscn,
                bandRegistrationNumber: brn,
                bandNameMemberOf: bandName,
                provinceBandLocated: provinceName,
                streetNameAndNumber: streetName,
                UnitNumber: unitNumber,
                poBox: poBox,
                city: ctc,
                country: selectedCountry,
                province: province,
                postalCode: postal,
                telephoneNumber: telephone,
                mobileNumber: mobile,
                email: email,
                firstNationNameOfContactAddress: selectedFirstNation,
                nameOfNation: firstNationName,
                COname: cname,
                IsGovernmentIssuedID: selectedGId,
                // GovernmentIDFile: '',
            })
            .then((result) => {
                console.log(result.data)
                setSpan('Data submitted successfully');
            })
            .catch((error) => {
                alert(error);
            });
    };
    return (
        <div className='container border'>
            <form className='personal-info-form' onSubmit={handleSubmit}>
                <h6>
                    Please fill in all you can here, so we can process your claim. What
                    you write down should match what is on your government-issued ID. If a
                    box doesn’t apply to you, please just leave it blank.
                </h6>
                <label htmlFor='First'>First Name:</label>
                <input
                    value={fname}
                    type='text'
                    id='fname'
                    name='fname'
                    onChange={(e) => {
                        setFname(e.target.value);
                    }}
                />
                <label htmlFor='First'>Middle Name(s) (if applicable)</label>
                <input
                    value={mname}
                    type='text'
                    id='mname'
                    name='mname'
                    onChange={(e) => {
                        setMname(e.target.value);
                    }}
                />
                <label htmlFor='First'>Last Name:</label>
                <input
                    value={lname}
                    type='text'
                    id='lname'
                    name='lname'
                    onChange={(e) => {
                        setLname(e.target.value);
                    }}
                />
                <label htmlFor='First'>Other Name(s) know by (if applicable)</label>
                <input
                    value={oname}
                    type='text'
                    id='oname'
                    name='oname'
                    onChange={(e) => {
                        setOname(e.target.value);
                    }}
                />
                <label htmlFor='dob'>Date of Birth</label>
                <input
                    value={dob}
                    type='date'
                    id='dob'
                    name='dob'
                    onChange={(e) => {
                        setDOB(e.target.value);
                    }}
                />
                <h6>
                    We understand that you might not have all this information, but please
                    fill in all you can. Note that you must provide the Province and the
                    name of your Band, and either your Indian Status Card Number and/or
                    your Band Registration Number
                </h6>
                <label htmlFor=''>Social Insurance Number (If available)</label>
                <input
                    value={sin}
                    type='text'
                    id='sin'
                    name='sin'
                    onChange={(e) => {
                        setSIN(e.target.value);
                    }}
                />
                <label htmlFor='iscn'>Indian Status Card Number(If available)</label>
                <input
                    value={iscn}
                    type='text'
                    id='iscn'
                    name='iscn'
                    onChange={(e) => {
                        setISCN(e.target.value);
                    }}
                />
                <label htmlFor='brn'>Band Registration Number(If available)</label>
                <input
                    value={brn}
                    type='text'
                    id='brn'
                    name='brn'
                    onChange={(e) => {
                        setBRN(e.target.value);
                    }}
                />
                <label htmlFor='bandName'>Name of the Band you are a Member of</label>
                <input
                    value={bandName}
                    type='text'
                    id='bandName'
                    name='bandName'
                    onChange={(e) => {
                        setBandName(e.target.value);
                    }}
                />
                <label htmlFor='provinceName'>Province Where Your Band is Located</label>
                <input
                    value={provinceName}
                    type='text'
                    id='provinceName'
                    name='provinceName'
                    onChange={(e) => {
                        setProvinceName(e.target.value);
                    }}
                />
                <h6>
                    What we need here is your current mailing address or an address where
                    you can be reached. We also ask for your phone number and email, but
                    if you don’t have those that’s fine, please just leave those boxes
                    blank.
                </h6>
                <h6>Current mailing address or the address where you can be reached</h6>
                <label htmlFor='streetName'>
                    <input

                        type='radio'
                        name='address'
                        id='street'
                        onClick={toggleInput}
                        checked={streetInput}

                    />Street Name and Number
                </label>
                {streetInput && <>
                    <input value={streetName} id='streetName' name='streetName' onChange={(e) => { setStreetName(e.target.value); }} />
                    <label htmlFor='unitNumber'>Unit Number(if applicable)</label>
                    <input
                        value={unitNumber}
                        type='text'
                        id='unitNumber'
                        name='unitNumber'
                        onChange={(e) => {
                            setUnitNumber(e.target.value);
                        }}
                    /></>}
                <label htmlFor='po'>
                    <input
                        type='radio'
                        id='po'
                        name='address'
                        onClick={toggleInput}
                    />PO Box
                </label>
                {poBoxInput && <input value={poBox} id='poBox' name='poBox' onChange={(e) => { setPOBox(e.target.value); }} />}



                <label htmlFor='ctc'>City/Town/Community</label>
                <input
                    value={ctc}
                    type='text'
                    id='ctc'
                    name='ctc'
                    onChange={(e) => {
                        setCTC(e.target.value);
                    }}
                />
                <label htmlFor='country'>
                    <input

                        type='radio'
                        name='country'
                        value="Canada"
                        checked={isRadioSelected('Canada')}
                        onChange={toggleCOuntry}
                    />Canada
                </label>
                <label htmlFor='country'>
                    <input

                        type='radio'
                        name='country'
                        value="United States of America"
                        checked={isRadioSelected('United States of America')}
                        onChange={toggleCOuntry}

                    />United States of America
                </label>
                <label htmlFor='country'>
                    <input

                        type='radio'
                        name='country'
                        value="Other"
                        checked={isRadioSelected("Other")}
                        onChange={toggleCOuntry}

                    />Other
                </label>
                <label htmlFor='province'>Province/Territory</label>
                <input
                    value={province}
                    type='text'
                    id='province'
                    name='province'
                    onChange={(e) => {
                        setProvince(e.target.value);
                    }}
                />
                <label htmlFor='postal'>Postal Code</label>
                <input
                    value={postal}
                    type='text'
                    id='postal'
                    name='postal'
                    onChange={(e) => {
                        setPostal(e.target.value);
                    }}
                />
                <label htmlFor='telephone'>Home Telephone Number:</label>
                <input
                    value={telephone}
                    type='text'
                    id='telephone'
                    name='telephone'
                    onChange={(e) => {
                        setTelephone(e.target.value);
                    }}
                />
                <label htmlFor='mobile'>Mobile Telephone Number(if applicable):</label>
                <input
                    value={mobile}
                    type='text'
                    id='mobile'
                    name='mobile'
                    onChange={(e) => {
                        setMobile(e.target.value);
                    }}
                />
                <label htmlFor='email'>
                    Email Address (This email will also be used for electronic
                    communication):
                </label>
                <input
                    value={email}
                    type='email'
                    id='email'
                    name='email'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <h6>
                    If this address is in a First Nation, please indicate the name of the
                    nation
                </h6>
                <label htmlFor='first'>
                    <input

                        type='radio'
                        name='first'
                        value='No'
                        checked={isSelected('No')}
                        onChange={toggleFirstNation}
                        onClick={() => setFirstNationNameInput(false)}

                    />No
                </label>
                <label htmlFor='first'>
                    <input

                        type='radio'
                        name='first'
                        value='Yes'
                        checked={isSelected('Yes')}
                        onChange={toggleFirstNation}
                        onClick={() => setFirstNationNameInput(true)}
                    />Yes
                </label>
                {firstNationNameInput &&
                    <>
                        <label htmlFor='firstNation'>First Nation Name of Contact Address</label>
                        <input
                            value={firstNationName}
                            type='text'
                            id='firstNationName'
                            name='firstNationName'
                            onChange={(e) => {
                                setFirstNationName(e.target.value)
                            }} />
                    </>

                }
                <label htmlFor='cname'>C/O Name(if applicable):</label>
                <input
                    value={cname}
                    type='text'
                    id='cname'
                    name='cname'
                    onChange={(e) => {
                        setCName(e.target.value);
                    }}
                />
                <h6>
                    Is Government Issued ID of Claimant available for upload? If NO,
                    Sworn/Affirmed Declaration will be required
                </h6>
                <label htmlFor='gid'>
                    <input

                        type='radio'
                        name='gid'
                        value='No'
                        checked={isChecked('No')}
                        onChange={toggleGId}
                    />No
                </label>
                <label htmlFor='gid'>
                    <input

                        type='radio'
                        name='gid'
                        value='Yes'
                        checked={isChecked('Yes')}
                        onChange={toggleGId}
                    />Yes
                </label>
                <h4>{span}</h4>
                <button>Submit</button>
            </form>
            {/* <button className='link-btn' onClick={() => onFormSwitch('register')}>Don't have an account? Register</button> */}
        </div>
    );
}

export default PersonalInfo;
