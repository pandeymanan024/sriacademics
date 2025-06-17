"use client";

import { useState } from "react";
import { database } from "../firebase/config";
import {
  ref,
  push,
  query,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";

export default function FreeTrialForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    board: "",
    grade: "",
    countryCode: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted", form); // Debug log
    setIsSubmitting(true);
    setMessage("");

    try {
      // Validate form data
      if (
        !form.email ||
        !form.name ||
        !form.phone ||
        !form.board ||
        !form.grade ||
        !form.countryCode
      ) {
        throw new Error("Please fill in all required fields");
      }

      console.log("Creating database reference..."); // Debug log
      const dbRef = ref(database, "freeTrialForm");

      console.log("Checking email..."); // Debug log
      const emailQuery = query(
        dbRef,
        orderByChild("email"),
        equalTo(form.email)
      );
      const snapshot = await get(emailQuery);

      if (snapshot.exists()) {
        console.log("Email already exists"); // Debug log
        setMessage("This email is already registered.");
        setMessageType("error");
        return;
      }

      console.log("Preparing data..."); // Debug log
      const formData = {
        username: form.name,
        email: form.email,
        phone: form.phone,
        board: form.board,
        grade: form.grade,
        countryCode: form.countryCode,
        timestamp: new Date().toISOString(),
      };

      console.log("Writing to Firebase...", formData); // Debug log
      await push(dbRef, formData);
      console.log("Data written successfully"); // Debug log

      setMessage("Registration successful! We will contact you soon.");
      setMessageType("success");

      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        board: "",
        grade: "",
        countryCode: "",
      });
    } catch (error) {
      console.error("Detailed error:", error); // Debug log
      setMessage(error.message || "Registration failed. Please try again.");
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="free-trial-form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="form-row">
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
      </div>

      <div className="form-row">
        <select
          name="countryCode"
          value={form.countryCode}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Country
          </option>
          <option value="+91">India (+91)</option>
          <option value="+1">United States (+1)</option>
          <option value="+44">United Kingdom (+44)</option>
          <option value="+61">Australia (+61)</option>
          <option value="+1">Canada (+1)</option>
          <option value="+49">Germany (+49)</option>
          <option value="+33">France (+33)</option>
          <option value="+81">Japan (+81)</option>
          <option value="+39">Italy (+39)</option>
          <option value="+86">China (+86)</option>
          <option value="+7">Russia (+7)</option>
          <option value="+34">Spain (+34)</option>
          <option value="+971">United Arab Emirates (+971)</option>
          <option value="+82">South Korea (+82)</option>
          <option value="+55">Brazil (+55)</option>
          <option value="+27">South Africa (+27)</option>
          <option value="+31">Netherlands (+31)</option>
          <option value="+46">Sweden (+46)</option>
          <option value="+41">Switzerland (+41)</option>
          <option value="+90">Turkey (+90)</option>
          <option value="+47">Norway (+47)</option>
          <option value="+351">Portugal (+351)</option>
          <option value="+32">Belgium (+32)</option>
          <option value="+380">Ukraine (+380)</option>
          <option value="+48">Poland (+48)</option>
          <option value="+30">Greece (+30)</option>
          <option value="+65">Singapore (+65)</option>
          <option value="+60">Malaysia (+60)</option>
          <option value="+62">Indonesia (+62)</option>
          <option value="+63">Philippines (+63)</option>
          <option value="+66">Thailand (+66)</option>
          <option value="+92">Pakistan (+92)</option>
          <option value="+880">Bangladesh (+880)</option>
          <option value="+94">Sri Lanka (+94)</option>
          <option value="+977">Nepal (+977)</option>
          <option value="+98">Iran (+98)</option>
          <option value="+964">Iraq (+964)</option>
          <option value="+20">Egypt (+20)</option>
          <option value="+962">Jordan (+962)</option>
          <option value="+972">Israel (+972)</option>
          <option value="+968">Oman (+968)</option>
          <option value="+973">Bahrain (+973)</option>
          <option value="+974">Qatar (+974)</option>
          <option value="+975">Bhutan (+975)</option>
          <option value="+960">Maldives (+960)</option>
          <option value="+856">Laos (+856)</option>
          <option value="+84">Vietnam (+84)</option>
          <option value="+998">Uzbekistan (+998)</option>
          <option value="+993">Turkmenistan (+993)</option>
          <option value="+994">Azerbaijan (+994)</option>
          <option value="+996">Kyrgyzstan (+996)</option>
          <option value="+976">Mongolia (+976)</option>
          <option value="+975">Bhutan (+975)</option>
          <option value="+855">Cambodia (+855)</option>
          <option value="+213">Algeria (+213)</option>
          <option value="+221">Senegal (+221)</option>
          <option value="+256">Uganda (+256)</option>
          <option value="+254">Kenya (+254)</option>
          <option value="+234">Nigeria (+234)</option>
          <option value="+233">Ghana (+233)</option>
          <option value="+212">Morocco (+212)</option>
          <option value="+961">Lebanon (+961)</option>
          <option value="+962">Jordan (+962)</option>
          <option value="+53">Cuba (+53)</option>
          <option value="+58">Venezuela (+58)</option>
          <option value="+591">Bolivia (+591)</option>
          <option value="+593">Ecuador (+593)</option>
          <option value="+51">Peru (+51)</option>
          <option value="+56">Chile (+56)</option>
          <option value="+598">Uruguay (+598)</option>
          <option value="+505">Nicaragua (+505)</option>

          {/* Add other country codes as needed */}
        </select>
        <input
          type="tel"
          name="phone"
          placeholder="*Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <select
          name="board"
          value={form.board}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Board
          </option>
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
          <option value="" disabled>
            Grade
          </option>
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
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Book Your FREE DEMO"}
      </button>

      {message && (
        <div
          className={`message ${messageType}`}
          style={{
            marginTop: "10px",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            gridColumn: "1 / -1",
          }}
        >
          {message}
        </div>
      )}
    </form>
  );
}
