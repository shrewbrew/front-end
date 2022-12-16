import React from 'react'
import classNames from "classnames";


function InjuryDetails() {
    const outerClasses = classNames(
        "section center-content",
        "illustration-section-01"
    );
    return (
        <section className={outerClasses}>
            <div className='container border'>
                <h1>PART 4: SPECIFIED INJURIES<br></br>
                    (This section is optional)</h1>
                <table>
                    <tr>
                        <th>Harm Category</th>
                        <th>Specified Injuries (Medical Diagnosis)</th>
                        <th>Symptoms</th>
                        <th>LEVEL 1</th>
                        <th>LEVEL 2</th>
                        <th>Claim</th>
                    </tr>
                    <tbody>
                        <tr>
                            <th>1. Digestive
                                <br></br>
                                (Gastro-enterological)
                                <br></br>
                                <br></br>
                                <i>(disorders affecting the stomach, intestines and associated organs) </i>
                            </th>
                            <td>
                                <ul>
                                    <li>Ingestion of Bacteria</li>
                                    <li>Viral infection</li>
                                    <li>Ingestion of chemicals in quantities harmful to human health</li>
                                    <li>Stomach ulcers</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    stomach cramps, nausea, diarrhea, abdominal pain, dehydration, constipation.
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>2. Respiratory/
                                Breathing
                            </th>
                            <td>
                                <ul>
                                    <li>Chlorine toxicity</li>
                                    <li>Ingestion of chemicals in quantities harmful to human health, resulting in respiratory or breathing injuries</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    significant trouble breathing, painfully irritated airways or lungs, significant chest pain, shortness of breath, blue skin
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>3. Dermatological
                                <br></br>
                                <br></br>
                                <i>(condition involving skin, hair, and nails) </i>
                            </th>
                            <td>
                                <ul>
                                    <li>Skin Infections</li>
                                    <li>Dermal (Skin) lesions</li>
                                    <li>Chlorine toxicity</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    cellulitis (bacterial infection, swelling, redness), boils, dermal lesions, skin pigmentation, blisters, skin discoloration and fever
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>4. Liver

                            </th>
                            <td>
                                <ul>
                                    <li>Viral Infection<br></br>(Hepatitis A)</li>
                                    <li>Ingestion of Bacteria</li>
                                    <li>Liver damage (cysts, lesions, toxicity)</li>
                                    <li>Ingestion of chemicals in quantities harmful to human health resulting in liver injuries</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    discoloration of eyes and skin, swelling in legs and ankles, chronic fatigue, loss of appetite, abdominal pain, liver inflammation, liver failure
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>5. Neurological
                                <br></br>
                                (Brain/Nervous System)

                            </th>
                            <td>
                                <ul>
                                    <li>Ingestion of chemicals in quantities harmful to human health, resulting in neurological injuries</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    irritability, poor attention span, headache, insomnia, dizziness, memory loss, IQ deficits, behavioural effects in children
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>6. Bloodstream Infections

                            </th>
                            <td>
                                <ul>
                                    <li>Infections contracted from using water for injections/ syringes/needles, including endocarditis</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    aching joints and muscles, chest pain, fatigue, flu-like symptoms, night sweats, shortness of breath, lower body swelling, heart murmurs
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>7. Kidney

                            </th>
                            <td>
                                <ul>
                                    <li>Ingestion of chemicals in quantities harmful to human health, resulting in kidney injuries</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    kidney damage, kidney lesions, kidney failure
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th>8. Tumors or Cancer

                            </th>
                            <td>
                                <ul>
                                    <li>Ingestion of chemicals in quantities harmful to human health, resulting in tumors or cancer</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    tumors, cancer
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>
                            <th rowSpan={8}>9. Mental Health

                            </th>
                            <td>
                                <ul>
                                    <li><strong>Depression </strong>(Major depressive disorder or Persistent depressive disorder)</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    Depressed Mood, Diminished Interest or Pleasure, Significant Weight Loss or Weight Gain, Insomnia or trouble with sleep, Agitation, Fatigue, loss of energy, inability to distinguish between what is real and what only seems to be real, Diminished ability to think or concentrate, or indecisiveness, Recurrent thoughts of death, suicide attempt
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Panic Disorder </strong>(an abrupt surge of intense fear or intense discomfort that reaches a peak within minutes)</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    Palpitations, pounding heart, or accelerated heart rate, Sweating, Trembling or shaking, Shortness of breath or smothering, Feelings of choking, Chest pain/discomfort, Nausea, Dizzy, lightheaded or faint, Chills or heat sensations, Numbness or tingling sensations, feelings of unreality, or being detached from oneself, Fear of losing control, Fear of dying
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Substance Addictions/Use Disorders</strong></li>
                                </ul>
                                <br></br>
                                <strong>Any one of the following</strong>:
                                <ul>
                                    <li>Alcohol Use Disorder</li>
                                    <li>Cannabis Use Disorder</li>
                                    <li>Tobacco Use Disorder</li>
                                    <li>Sedative, Hypnnotic, Anxiolytic Use Disorder</li>
                                </ul>
                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    Consumption of large amounts substances or over long period of time, Cannot cut down or control use, Time spent to obtain, use, or recover from consumption, Strong desire/urge to use, Unable to fulfil obligations at work, school or home due to use, Social, occupational, or recreational activities given up because of use, Using even if physically hazardous, A need for increased amounts to achieve intoxication or desired effect, Taken to relieve or avoid withdrawal symptoms
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Post-traumatic Stress Disorder (PTSD)</strong></li>
                                    (Exposure to actual or threatened death, serious injury)
                                </ul>

                            </td>
                            <td>
                                <p>
                                    <strong> Symptoms may include</strong>
                                    Experiencing repeated or extreme exposure to aversive details of the traumatic event(s), Experiencing repeated or extreme exposure to details of the traumatic events, Avoidance of distressing memories, thoughts, or feelings about traumatic event(s), Negative changes in brain functioning (thinking) and mood associated with the traumatic event(s), Marked changes in behaviour, typically expressed as verbal or physical acting out toward people or objects, Duration of disturbance is more than 1 month, Behavioural problems that have such a negative impact on daily life that help was needed from the healthcare system
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Specific Phobia  (PTSD)</strong></li>
                                    (Fear or anxiety about a specific object or situation e.g., flying, heights, animals, seeing blood, etc.)
                                </ul>

                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    The phobic object/situation provokes immediate fear or anxiety, actively avoided or endured with intense fear or anxiety, is out of proportion to the actual danger posed, is persistent, typically lasting for 6 months or more, causes clinically significant distress or impairment in social, occupational, or other important areas of functioning. Symptoms are not explained by another mental disorder.
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Specific Phobia  (PTSD)</strong></li>
                                    (Fear or anxiety about a specific object or situation e.g., flying, heights, animals, seeing blood, etc.)
                                </ul>

                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    The phobic object/situation provokes immediate fear or anxiety, actively avoided or endured with intense fear or anxiety, is out of proportion to the actual danger posed, is persistent, typically lasting for 6 months or more, causes clinically significant distress or impairment in social, occupational, or other important areas of functioning. Symptoms are not explained by another mental disorder.
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Adjustment Disorder</strong></li>
                                </ul>

                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    Marked distress that is out of proportion to the severity or intensity of the stressor, significant impairment in social, occupational, or other important areas of functioning
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                        <tr>

                            <td>
                                <ul>
                                    <li><strong>Generalized Anxiety Disorder</strong></li>
                                </ul>

                            </td>
                            <td>
                                <p>
                                    <strong>Symptoms may include </strong>
                                    Excessive anxiety and worry, Difficulty controlling worry, Restlessness or feeling on edge, being easily fatigued, Difficulty concentrating or mind going blank, Irritability, Muscle tension, Difficulty falling or staying asleep, or restless/ unsatisfying sleep, Causes clinically significant distress or impairment in social, occupational, or other important areas of functioning
                                </p>
                            </td>
                            <td>
                                <i>More than 1 month, but less than 1 year</i>
                            </td>
                            <td>
                                <i>1 year or more</i>
                            </td>
                            <button style={{ "margin-top": "60%" }}>Click to Review/Edit</button>
                        </tr>
                    </tbody>
                </table>


            </div>
        </section>



    )
}

export default InjuryDetails
