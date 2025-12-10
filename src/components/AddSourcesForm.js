import React, { useState } from "react";

export default function AddSourcesForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function submit(e) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) return;

    onAdd({ name: trimmedName, email: trimmedEmail });
    setName("");
    setEmail("");
  }

  return (
    <form className="source-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Hana"
            aria-label="Name"
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. hp2739@barnard.edu"
            aria-label="Email"
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">Add Source</button>
      </div>
    </form>
  );
}
