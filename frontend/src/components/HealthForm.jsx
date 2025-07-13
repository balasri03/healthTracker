import React, { useState } from "react";
import axios from "axios";

const HealthForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    calories: "",
    sleep: "",
    workouts: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/health", {
      ...form,
      calories: Number(form.calories),
      sleep: Number(form.sleep),
      workouts: Number(form.workouts)
    });
    setForm({ date: "", calories: "", sleep: "", workouts: "" });
    if (onAdd) onAdd();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 space-y-4 ml-60">
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
        className="p-2 rounded border ml-4"
      />
      <input
        type="number"
        name="calories"
        value={form.calories}
        onChange={handleChange}
        placeholder="Calories"
        required
        className="p-2 rounded border ml-4"
      />
      <input
        type="number"
        name="sleep"
        value={form.sleep}
        onChange={handleChange}
        placeholder="Sleep (hrs)"
        required
        className="p-2 rounded border ml-4"
      />
      <input
        type="number"
        name="workouts"
        value={form.workouts}
        onChange={handleChange}
        placeholder="Workouts"
        required
        className="p-2 rounded border ml-4"
      />
      <button type="submit" className="bg-blue-500 text-2xl text-bold text-white p-2 rounded p-3 ml-5">
        Add Entry
      </button>
    </form>
  );
};

export default HealthForm;