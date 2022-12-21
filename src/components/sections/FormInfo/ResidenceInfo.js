import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './style.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function ResidenceInfo() {
  let [tableData, setTableData] = useState([])
  const outerClasses = classNames(
    'section center-content',
    'illustration-section-01'
  );
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await axios.get('https://localhost:44378/api/ClaimManagement/LookUpRecords')
      .then((res) => {
        setTableData([...res.data])
      })

  }
  // console.log(tableData)


  const [table, setTable] = useState(true);
  const [nationName, setNationName] = useState('');
  const [sDate, setSDate] = useState('');
  const [eDate, setEDate] = useState('');
  const [band, setBand] = useState('');
  const [prov, setProv] = useState('');
  const [sMonth, setSMonth] = useState('');
  const [eMonth, setEMonth] = useState('');
  const [sYear, setSYear] = useState('');
  const [eYear, setEYear] = useState('');

  const [isChecked, setIsChecked] = useState([]);
  const history = useHistory()



  const handleChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setTable(false);
    }
    if (!checked) {
      setTable(true);
    }
  };
  const toggleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }

  };
  // console.log('isChecked', isChecked);

  const inputFill = (e) => {
    e.preventDefault()
    if (isChecked.length === 1) {
      let arr = tableData.filter((el) => el.reserveID == isChecked[0]);
      let startDate = new Date(arr[0].startDateOfWaterAdvisory)
      let endDate = new Date(arr[0].endDateOfWaterAdvisory)
      setNationName(arr[0].name)
      setSDate((startDate.getFullYear() + '-' + ((startDate.getMonth() > 8) ? (startDate.getMonth() + 1) : ('0' + (startDate.getMonth() + 1))) + '-' + ((startDate.getDate() > 9) ? startDate.getDate() : ('0' + startDate.getDate()))).toString())
      setEDate((endDate.getFullYear() + '-' + ((endDate.getMonth() > 8) ? (endDate.getMonth() + 1) : ('0' + (endDate.getMonth() + 1))) + '-' + ((endDate.getDate() > 9) ? endDate.getDate() : ('0' + endDate.getDate()))).toString())
      setBand(arr[0].firstNationBandNumber)
      setProv(arr[0].proviences)
    }
  };
  const url = 'https://localhost:44378/api/ClaimManagement/SectionTwo'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      claimID: parseInt(localStorage.getItem('claimID')),
      nameOfFirstNation: nationName,
      waterAdvisoryStartDate: sDate,
      waterAdvisoryEndDate: eDate,
      firstNationBandNumber: band,
      provinceOrTerritory: prov,
      fromMonth: sMonth,
      toMonth: eMonth,
      fromYear: sYear,
      toYear: eYear
    }


    console.log(data)
    try {
      const res = await axios.post(url, data);
      history.push('/claim/authorization')
    } catch (error) {
      alert(error);
    }

  };

  return (
    <section className={outerClasses}>
      <div className='container border'>
        <h1>PART 2: WHERE YOU LIVED</h1>
        <form id='form-part' className='personal-info-form' onSubmit={handleSubmit}>
          <p>
            In this section, you'll{' '}
            <strong>
              tell us about what reserve (or reserves) you lived on, and when.
            </strong>{' '}
            We will use that information to figure out how much compensation you
            are eligible for
          </p>
          <p>
            There’s a long list for all the First Nations that had known
            long-term drinking water advisories in the timeframes covered by the
            settlement. As a reminder, a ‘long-term drinking water advisory’
            means one that lasted for a year or longer.
          </p>
          <p>
            Beside the name of each First Nation, there are date boxes. Please{' '}
            <strong>
              fill in the date boxes next to the First Nation where you lived
            </strong>
            , starting with the month and year you began living there, and
            ending with the month and year you stopped living there (if
            applicable).
          </p>
          <p>
            <em>If you were born before November 20, 1995,</em> then please
            share with us where you lived from{' '}
            <strong>November 20, 2013 to June 20, 2021</strong>.{' '}
          </p>
          <p>
            <em>If you were born on or after November 20, 1995,</em> then please
            share with us where you lived from{' '}
            <strong>November 20, 1995 to June 20, 2021</strong>.
          </p>
          <br></br>
          <p>
            <strong>Tips and Pointers for Part 2</strong>
          </p>
          <li>
            You only need to share times and locations that you were living on
            any of the First Nations listed. You don't need to share information
            about other times and locations.
          </li>
          <li>
            If you were under 18 when you lived on reserve and moved away from
            your community to attend school, that time should be treated as time
            spent living on reserve and included in the table below.
          </li>
          <li>
            If you lived in more than one First Nation on the list provided,
            that's fine. Please complete the date information for{' '}
            <strong>all</strong> the listed First Nations that you lived in.
          </li>
          <li>
            If you have questions about why we're only asking for certain
            timeframes based on when you were born, please see the 'Limitations
            Periods' section of the online FAQ page. You can find it at{' '}
            <a href='www.firstnationsdrinkingwater.ca'>
              www.firstnationsdrinkingwater.ca
            </a>
          </li>
          <li>
            If you think your First Nation had a drinking water advisory that
            lasted a year or more, but you can't find it on the list provided,
            please call the Administrator at 1-833-252-4220, or include the
            information by clicking the 'Add Impacted First Nation' button for
            further details.
          </li>
          {/* <button>Add Impacted First Nation</button> */}
          <br></br>
          <p>
            <strong>
              In this section, tell us about what reserve (or reserves) the
              Claimant lived on, and when. We will use this information to
              figure out how much compensation the Claimant is eligible for.
            </strong>
          </p>
          {table && (
            <>
              <label htmlFor='First'>
                <strong>List of Impacted First Nation</strong>
              </label>
              <br></br>
              <table
                aria-relevant='additions'
                role='grid'
              // class='table table-fluid table-hover'
              >
                <thead>
                  <tr>
                    <th
                      scope='col'
                      //   style='width:2.2988505747126435%;'
                      class='sort-disabled'
                      aria-label='Select'
                    >
                      <span class='fa fa-check' aria-hidden='true'></span>{' '}
                      <span class='sr-only'>Select</span>
                    </th>
                    <th
                      scope='col'
                      //   style='width:34.48275862068966%;'
                      class='sort-enabled'
                    >
                      {/* <a href='#' role='button' aria-label='Name' tabindex='0'> */}
                      Name
                      {/* <span class='sr-only sort-hint'>. sort descending</span> */}
                      {/* </a> */}
                    </th>
                    <th
                      scope='col'
                      //   style='width:17.24137931034483%;'
                      class='sort-enabled sort sort-asc'
                      aria-sort='ascending'
                    >
                      {/* <a href='#' role='button' aria-label='Provinces' tabindex='0'> */}
                      Provinces{' '}
                      {/* <span class='fa fa-arrow-up' aria-hidden='true'></span> */}
                      {/* <span class='sr-only sort-hint'>. sort ascending</span> */}
                      {/* </a> */}
                    </th>
                    <th
                      scope='col'
                    // style='width:11.494252873563218%;'
                    // class='sort-enabled'
                    >
                      {/* <a
                    href='#'
                    role='button'
                    aria-label='First Nation Band Number'
                    tabindex='0'
                  > */}
                      First Nation Band Number
                      {/* <span class='sr-only sort-hint'>. sort descending</span> */}
                      {/* </a> */}
                    </th>
                    <th
                      scope='col'
                    // style='width:17.24137931034483%;'
                    // class='sort-enabled'
                    >
                      {/* <a
                    href='#'
                    role='button'
                    aria-label='Start Date of Water Advisory'
                    tabindex='0'
                  > */}
                      Start Date of Water Advisory
                      {/* <span class='sr-only sort-hint'>. sort descending</span> */}
                      {/* </a> */}
                    </th>
                    <th
                      scope='col'
                    // style='width:17.24137931034483%;'
                    // class='sort-enabled'
                    >
                      {/* <a
                    href='#'
                    role='button'
                    aria-label='End Date of Water Advisory'
                    tabindex='0'
                  > */}
                      End Date of Water Advisory
                      {/* <span class='sr-only sort-hint'>. sort descending</span>
                  </a> */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowdata, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type='checkbox'
                          value={rowdata.reserveID}
                          checked={rowdata.isChecked}
                          onChange={toggleCheckBox}
                        // onClick={inputFill}
                        />
                      </td>
                      <td>{rowdata.name}</td>
                      <td>{rowdata.proviences}</td>
                      <td>{rowdata.firstNationBandNumber}</td>
                      <td>{rowdata.startDateOfWaterAdvisory}</td>
                      <td>{rowdata.endDateOfWaterAdvisory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={inputFill} style={{ width: "50%", marginLeft: "25%" }}>Select</button>
            </>
          )}
          <br></br>
          <label>
            <input
              type='checkbox'
              name='manual'
              value='Yes'
              onChange={handleChange}
            />

            <b>
              {' '}
              Impacted First Nation Not Found on List - Click here ONLY if you
              can't find your First Nation on the list above.
            </b>
          </label>
          <label htmlFor='First'>Name of First Nation</label>
          <input
            value={nationName}
            type='text'
            id='nationName'
            name='nationName'
            onChange={(e) => {
              setNationName(e.target.value);
            }}
            disabled={table}
          />
          <label htmlFor='First'>
            Water Advisory Start Date for this First Nation
          </label>
          <input
            value={sDate}
            type='date'
            id='sDate'
            name='sDate'
            onChange={(e) => {
              setSDate(e.target.value);
            }}
            disabled={table}
          />
          <label htmlFor='First'>
            Water Advisory End Date for this First Nation
          </label>
          <input
            value={eDate}
            type='date'
            id='eDate'
            name='eDate'
            onChange={(e) => {
              setEDate(e.target.value);
            }}
            disabled={table}
          />
          <label htmlFor='First'>First Nation Band Number</label>
          <input
            value={band}
            type='text'
            id='band'
            name='band'
            onChange={(e) => {
              setBand(e.target.value);
            }}
            disabled={table}
          />
          <label htmlFor='First'>Province/Territory</label>
          <input
            value={prov}
            type='text'
            id='prov'
            name='prov'
            onChange={(e) => {
              setProv(e.target.value);
            }}
            disabled={table}
          />
          <br></br>
          <p>
            Please include all months and years the Claimant lived on the
            Impacted First Nation(s), starting with the Month and Year the
            Claimant began living there to the Month and Year the Claimant
            stopped living there during the class period (November 20,1995 to
            June 20, 2021).
          </p>
          <p>Claimant lived on the Impacted First Nation FROM:</p>
          <div
            style={{
              display: 'flex',
              'justify-content': 'space-evenly',
              'flex-wrap': 'wrap',
            }}
          >
            <div
              style={{
                // 'max-width': '500px',
                // padding: '14px 6px',
                // margin: '4px',
                // padding: '0px 10px',
                'text-align': 'left',
              }}
            >
              <label htmlFor='First'>Month:</label>
              <br></br>
              <input
                value={sMonth}
                type='text'
                id='sMonth'
                name='sMonth'
                onChange={(e) => {
                  setSMonth(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                // 'max-width': '500px',
                // padding: '14px 6px',
                // margin: '4px',
                // padding: '0px 10px',
                'text-align': 'left',
              }}
            >
              <label htmlFor='First'>Year:</label>
              <br></br>
              <input
                value={sYear}
                type='text'
                id='sYear'
                name='sYear'
                onChange={(e) => {
                  setSYear(e.target.value);
                }}
                placeholder='----'
              />
            </div>
          </div>
          <br></br>
          <div
            style={{
              display: 'flex',
              'justify-content': 'space-evenly',
              'flex-wrap': 'wrap',
            }}
          >
            <div
              style={{
                // 'max-width': '500px',
                // padding: '14px 6px',
                // margin: '4px',
                // padding: '0px 10px',
                'text-align': 'left',
              }}
            >
              <label htmlFor='First'>Month:</label>
              <br></br>
              <input
                value={eMonth}
                type='text'
                id='eMonth'
                name='eMonth'
                onChange={(e) => {
                  setEMonth(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                // 'max-width': '500px',
                // padding: '14px 6px',
                // margin: '4px',
                // padding: '0px 10px',
                'text-align': 'left',
              }}
            >
              <label htmlFor='First'>Year:</label>
              <br></br>
              <input
                value={eYear}
                type='text'
                id='eYear'
                name='eYear'
                onChange={(e) => {
                  setEYear(e.target.value);
                }}
                placeholder='----'
              />
            </div>
          </div>
          <br></br>
          {/* <button onClick={toggleTable}>Search</button> */}
          <button>Next and Save</button>
        </form>
      </div>
    </section>
  );
}

export default ResidenceInfo;
