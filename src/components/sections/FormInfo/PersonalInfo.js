import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import './style.css';

function PersonalInfo() {

    const [streetInput, setStreetInput] = useState(true)
    const [poBoxInput, setPoBoxInput] = useState(false)
    const [selectedCountry, setSelectedCOuntry] = useState('Canada')
    const [selectedFirstNation, setSelectedFirstNation] = useState('No')
    const [selectedGId, setSelectedGId] = useState('No')
    const [firstNationNameInput, setFirstNationNameInput] = useState(false)
    const [fileSelected, setFileSelected] = useState();

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

    const [modal, setModal] = useState(false);
    const history = useHistory()



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
        setSelectedFirstNation(e.target.value);
        setFirstNationName('')

    }

    const toggleGId = (e) => {
        setSelectedGId(e.target.value)
    }

    const toggleModal = (e) => {
        e.preventDefault()
        setModal(!modal);
    };

    const toggleUpload = () => {
        setGID(false)
        setModal(false)
    }

    const saveFileSelected = (e) => {
        //in case you wan to print the file selected
        //console.log(e.target.files[0]);
        setFileSelected(e.target.files[0]);
    };



    // if (modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    const isRadioSelected = (value) => selectedCountry === value
    const isSelected = (value) => selectedFirstNation === value
    const isChecked = (value) => selectedGId === value


    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData()

        formData.append("firstName", fname)
        formData.append("middleName", mname)
        formData.append("lastName", lname)
        formData.append("otherName", oname)
        formData.append("dateOfBirth", dob)
        formData.append("socialInsuranceNumber", sin)
        formData.append("indianStatusCardNumber", iscn)
        formData.append("bandRegistrationNumber", brn)
        formData.append("bandNameMemberOf", bandName)
        formData.append("provinceBandLocated", provinceName)
        formData.append("streetNameAndNumber", streetName)
        formData.append("UnitNumber", unitNumber)
        formData.append("poBox", poBox)
        formData.append("city", ctc)
        formData.append("country", selectedCountry)
        formData.append("province", province)
        formData.append("postalCode", postal)
        formData.append("telephoneNumber", telephone)
        formData.append("mobileNumber", mobile)
        formData.append("email", email)
        formData.append("firstNationNameOfContactAddress", selectedFirstNation)
        formData.append("nameOfNation", firstNationName)
        formData.append("COname", cname)
        formData.append("IsGovernmentIssuedID", selectedGId)
        formData.append("GovernmentIDFile", fileSelected);

        // const config = {
        //     headers: { 'content-type': 'multipart/form-data' }
        // }


        // axios.post(url, formData, config)
        //     .then(response => {
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        try {
            const res = await axios.post(url, formData)
            alert(res.data)
        } catch (error) {
            alert(error)
        }
        // axios({
        //     method: "post",
        //     url: url,
        //     data: formData,
        //     headers: { "Content-Type": "multipart/form-data" },
        // })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });
        history.push('/claim/payment')
    };

    // const importFile = async (e) => {
    //     const formData = new FormData();
    //     formData.append("file", fileSelected);
    //     try {
    //         const res = await axios.post("https://localhost:44323/api/importfile", formData);
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // };
    return (
        <div className='container border'>
            <form id='form-part' className='personal-info-form' onSubmit={handleSubmit}>
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
                        onClick={toggleUpload}
                    />No
                </label>
                <label htmlFor='gid'>
                    <input

                        type='radio'
                        name='gid'
                        value='Yes'
                        checked={isChecked('Yes')}
                        onChange={toggleGId}
                        onClick={() => setGID(true)}

                    />Yes
                </label>
                {gID &&
                    <>
                        <label htmlFor='governmentID'>Please attach a copy of a government-issued ID for yourself (required)
                        </label>
                        <button onClick={toggleModal}>Upload ID</button>
                    </>
                }
                {/* {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                                id fugit, dignissimos maxime non natus placeat illo iusto!
                                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                                placeat tempora vitae enim incidunt porro fuga ea.
                            </p>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )} */}
                {modal &&
                    <>
                        <h6>
                            Please upload a scanned photocopy or photograph of one piece of current government issued identification (ID). This can include any of the following Federal, Provincial or Territorial government issued ID:
                        </h6>
                        <li>Driver's License (or Operator’s License, in some provinces)</li>
                        <li>Passport</li>
                        <li>Certificate of Indian Status</li>
                        <li>Secure Certificate of Indian Status</li>
                        <li>Land Claim Beneficiary Card (including NTI Enrolment Card)</li>
                        <li>Social Insurance Card (Paper or Card)</li>
                        <li>Birth Certificate</li>
                        <li>Old Age Security (OAS) Identification Card</li>
                        <li>Firearms Possession and Acquisition Licence (PAL)</li>
                        <li>Official Military ID</li>
                        <li>Nexus Card</li>
                        <li>Bring Your ID (BYID) Card (age of majority card)</li>
                        <li>Permanent Resident Card</li>
                        <li>U.S. State ID</li>
                        <li>Certificate of Canadian Citizenship</li>
                        <li>Northwest Territories Employee ID Card</li>
                        <li>Prison/Correctional ID</li>
                        <hr></hr>
                        <label htmlFor='upload'>Attach a file</label>
                        <input
                            type='file'
                            onChange={saveFileSelected}
                        />
                        {/* <input type="button" value="upload" onClick={importFile} /> */}
                    </>
                }

                <button>Submit</button>
            </form>
            {/* <button className='link-btn' onClick={() => onFormSwitch('register')}>Don't have an account? Register</button> */}
        </div>
    );
}

export default PersonalInfo;
