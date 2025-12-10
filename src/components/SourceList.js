import React from "react";

export default function SourceList({ items = [], onRemove }) {
  if (!items || items.length === 0) {
    return <p className="muted">No sources yet, start by adding one above.</p>;
  }

  return (
    <ul>
      {items.map((s) => (
        <li key={s.id} className="source-item">
          <div className="source-main">
            <div className="source-name">{s.name}</div>
            <div className="source-meta">{s.email}</div>
          </div>
          <button
            className="remove"
            onClick={() => onRemove(s.id)}
            aria-label={`Remove ${s.name}`}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
