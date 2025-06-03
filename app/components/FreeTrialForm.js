'use client';

import { useState, useEffect } from 'react';
import { getDatabase, ref, push, query, orderByChild, equalTo, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';

export default function FreeTrialForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        board: '',
        grade: '',
        countryCode: ''
    });
    const [message, setMessage] = useState('setMessage');
    const [messageType, setMessageType] = useState('setMessageType');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form', form);
        setMessage('setMessage');
        setMessageType('setMessageType');
        const db = getDatabase();
        const dbRef = ref(db, 'freeTrialForm');
        
        try {
            // Check if email exists
            const emailQuery = query(dbRef, orderByChild('email'), equalTo(form.email));
            const snapshot = await get(emailQuery);
            
            if (snapshot.exists()) {
                setMessage('This email is already registered.');
                setMessageType('error');
                return;
            }

            // Write user data
            await push(dbRef, {
                username: form.name,
                email: form.email,
                phone: form.phone,
                board: form.board,
                grade: form.grade,
                countryCode: form.countryCode
            });

            setMessage('Registration successful!');
            setMessageType('success');
            setForm({
                name: '',
                email: '',
                phone: '',
                board: '',
                grade: '',
                countryCode: ''
            });
        } catch (error) {
            console.error('Error:', error);
            setMessage('Registration failed. Please try again.');
            setMessageType('error');
        }
    };

    useEffect(() => {
        initializeApp(firebaseConfig);
    }, []);

    return (
        <form className="free-trial-form" onSubmit={handleSubmit} autoComplete="off">
            {/* Row 1: Name, Email */}
            <input
                type="text"
                name="name"
                placeholder="*Name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="*Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            {/* Row 2: Country, Phone */}
            <select
                name="countryCode"
                value={form.countryCode}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select Country</option>
                <option value="+93">Afghanistan (+93)</option>
                <option value="+355">Albania (+355)</option>
                <option value="+213">Algeria (+213)</option>
                <option value="+376">Andorra (+376)</option>
                <option value="+244">Angola (+244)</option>
                <option value="+54">Argentina (+54)</option>
                <option value="+374">Armenia (+374)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+43">Austria (+43)</option>
                <option value="+994">Azerbaijan (+994)</option>
                <option value="+973">Bahrain (+973)</option>
                <option value="+880">Bangladesh (+880)</option>
                <option value="+375">Belarus (+375)</option>
                <option value="+32">Belgium (+32)</option>
                <option value="+975">Bhutan (+975)</option>
                <option value="+591">Bolivia (+591)</option>
                <option value="+55">Brazil (+55)</option>
                <option value="+359">Bulgaria (+359)</option>
                <option value="+855">Cambodia (+855)</option>
                <option value="+237">Cameroon (+237)</option>
                <option value="+1">Canada (+1)</option>
                <option value="+56">Chile (+56)</option>
                <option value="+86">China (+86)</option>
                <option value="+57">Colombia (+57)</option>
                <option value="+506">Costa Rica (+506)</option>
                <option value="+385">Croatia (+385)</option>
                <option value="+357">Cyprus (+357)</option>
                <option value="+420">Czech Republic (+420)</option>
                <option value="+45">Denmark (+45)</option>
                <option value="+20">Egypt (+20)</option>
                <option value="+372">Estonia (+372)</option>
                <option value="+251">Ethiopia (+251)</option>
                <option value="+358">Finland (+358)</option>
                <option value="+33">France (+33)</option>
                <option value="+995">Georgia (+995)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+30">Greece (+30)</option>
                <option value="+299">Greenland (+299)</option>
                <option value="+852">Hong Kong (+852)</option>
                <option value="+36">Hungary (+36)</option>
                <option value="+354">Iceland (+354)</option>
                <option value="+91">India (+91)</option>
                <option value="+62">Indonesia (+62)</option>
                <option value="+98">Iran (+98)</option>
                <option value="+964">Iraq (+964)</option>
                <option value="+353">Ireland (+353)</option>
                <option value="+972">Israel (+972)</option>
                <option value="+39">Italy (+39)</option>
                <option value="+81">Japan (+81)</option>
                <option value="+962">Jordan (+962)</option>
                <option value="+7">Kazakhstan (+7)</option>
                <option value="+254">Kenya (+254)</option>
                <option value="+82">Korea, South (+82)</option>
                <option value="+965">Kuwait (+965)</option>
                <option value="+856">Laos (+856)</option>
                <option value="+371">Latvia (+371)</option>
                <option value="+961">Lebanon (+961)</option>
                <option value="+218">Libya (+218)</option>
                <option value="+423">Liechtenstein (+423)</option>
                <option value="+370">Lithuania (+370)</option>
                <option value="+352">Luxembourg (+352)</option>
                <option value="+853">Macau (+853)</option>
                <option value="+389">Macedonia (+389)</option>
                <option value="+261">Madagascar (+261)</option>
                <option value="+60">Malaysia (+60)</option>
                <option value="+960">Maldives (+960)</option>
                <option value="+356">Malta (+356)</option>
                <option value="+52">Mexico (+52)</option>
                <option value="+377">Monaco (+377)</option>
                <option value="+976">Mongolia (+976)</option>
                <option value="+212">Morocco (+212)</option>
                <option value="+95">Myanmar (+95)</option>
                <option value="+977">Nepal (+977)</option>
                <option value="+31">Netherlands (+31)</option>
                <option value="+64">New Zealand (+64)</option>
                <option value="+234">Nigeria (+234)</option>
                <option value="+47">Norway (+47)</option>
                <option value="+968">Oman (+968)</option>
                <option value="+92">Pakistan (+92)</option>
                <option value="+507">Panama (+507)</option>
                <option value="+595">Paraguay (+595)</option>
                <option value="+51">Peru (+51)</option>
                <option value="+63">Philippines (+63)</option>
                <option value="+48">Poland (+48)</option>
                <option value="+351">Portugal (+351)</option>
                <option value="+974">Qatar (+974)</option>
                <option value="+40">Romania (+40)</option>
                <option value="+7">Russia (+7)</option>
                <option value="+966">Saudi Arabia (+966)</option>
                <option value="+65">Singapore (+65)</option>
                <option value="+421">Slovakia (+421)</option>
                <option value="+386">Slovenia (+386)</option>
                <option value="+27">South Africa (+27)</option>
                <option value="+34">Spain (+34)</option>
                <option value="+94">Sri Lanka (+94)</option>
                <option value="+46">Sweden (+46)</option>
                <option value="+41">Switzerland (+41)</option>
                <option value="+886">Taiwan (+886)</option>
                <option value="+66">Thailand (+66)</option>
                <option value="+216">Tunisia (+216)</option>
                <option value="+90">Turkey (+90)</option>
                <option value="+971">UAE (+971)</option>
                <option value="+44">UK (+44)</option>
                <option value="+380">Ukraine (+380)</option>
                <option value="+1">USA (+1)</option>
                <option value="+598">Uruguay (+598)</option>
                <option value="+998">Uzbekistan (+998)</option>
                <option value="+58">Venezuela (+58)</option>
                <option value="+84">Vietnam (+84)</option>
                <option value="+967">Yemen (+967)</option>
                <option value="+260">Zambia (+260)</option>
                <option value="+263">Zimbabwe (+263)</option>
            </select>
            <input
                type="tel"
                name="phone"
                placeholder="*Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
            />
            {/* Row 3: Board, Grade */}
            <select
                name="board"
                value={form.board}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Board</option>
                <option value="cbse">CBSE</option>
                <option value="igcse">IGCSE</option>
                <option value="icse">ICSE</option>
                <option value="sat">SAT</option>
                <option value="ap">AP</option>
                <option value="ib">IB</option>
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="as/o-level">AS/O-LEVEL</option>
                <option value="cambridge">CAMBRIDGE</option>
            </select>
            <select
                name="grade"
                value={form.grade}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Grade</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
            {/* Button spans both columns */}
            <button type="submit">Book Your FREE DEMO</button>
            {/* Message */}
            {message && (
                <div id="clickPrompt" className={messageType} style={{ gridColumn: "1 / span 2" }}>{message}</div>
            )}
        </form>
    );
}