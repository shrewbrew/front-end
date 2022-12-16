import React, { useState } from 'react'
import classNames from "classnames";
import './style.css';



function ResidenceInfo() {

    const outerClasses = classNames(
        "section center-content",
        "illustration-section-01"
    );


    const [nationName, setNationName] = useState('')
    // const [table, setTable] = useState(false)

    // const toggleTable = () => {
    //     se
    // }
    return (
        <section className={outerClasses}>
            <div className='container border'>
                <h1>PART 2: WHERE YOU LIVED</h1>
                <form id='form-part' className='personal-info-form'>
                    <p>In this section, you'll <strong>tell us about what reserve (or reserves) you lived on, and when.</strong> We will use that information to figure out how much compensation you are eligible for</p>
                    <p>There’s a long list for all the First Nations that had known long-term drinking water advisories in the timeframes covered by the settlement. As a reminder, a ‘long-term drinking water advisory’ means one that lasted for a year or longer.</p>
                    <p>Beside the name of each First Nation, there are date boxes. Please <strong>fill in the date boxes next to the First Nation where you lived</strong>, starting with the month and year you began living there, and ending with the month and year you stopped living there (if applicable).</p>
                    <p><em>If you were born before November 20, 1995,</em> then please share with us where you lived from <strong>November 20, 2013 to June 20, 2021</strong>. </p>
                    <p><em>If you were born on or after November 20, 1995,</em> then please share with us where you lived from <strong>November 20, 1995 to June 20, 2021</strong>.</p>
                    <br></br>
                    <p><strong>Tips and Pointers for Part 2</strong></p>
                    <li>You only need to share times and locations that you were living on any of the First Nations listed. You don't need to share information about other times and locations.</li>

                    <li>If you were under 18 when you lived on reserve and moved away from your community to attend school, that time should be treated as time spent living on reserve and included in the table below.</li>

                    <li>If you lived in more than one First Nation on the list provided, that's fine. Please complete the date information for <strong>all</strong> the listed First Nations that you lived in.</li>

                    <li>If you have questions about why we're only asking for certain timeframes based on when you were born, please see the 'Limitations Periods' section of the online FAQ page. You can find it at <a href='www.firstnationsdrinkingwater.ca'>www.firstnationsdrinkingwater.ca</a></li>

                    <li>If you think your First Nation had a drinking water advisory that lasted a year or more, but you can't find it on the list provided, please call the Administrator at 1-833-252-4220, or include the information by clicking the 'Add Impacted First Nation' button for further details.</li>
                    {/* <button>Add Impacted First Nation</button> */}
                    <br></br>
                    <p><strong>In this section, tell us about what reserve (or reserves) the Claimant lived on, and when. We will use this information to figure out how much compensation the Claimant is eligible for.</strong></p>
                    <label htmlFor='First'>First Nation - List</label>
                    <input
                        value={nationName}
                        type='text'
                        id='nationName'
                        name='nationName'
                        disabled
                    // onChange={(e) => {
                    //     setFname(e.target.value);
                    // }}
                    />
                    {/* <button onClick={toggleTable}>Search</button> */}
                </form>

            </div>
        </section>
    )
}

export default ResidenceInfo