import React from 'react';
import styles from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm({ onAddContact }) {
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ ...state });
    state.name = '';
    state.number = '';
  };

  return (
    <form className={styles.TaskEditor} onSubmit={handleSubmit}>
      <label className={styles.TaskEditor_label}>
        Name
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.TaskEditor_label}>
        Number
        <input
          className={styles.TaskEditor_input}
          type="text"
          name="number"
          value={state.number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.TaskEditor_button} type="submit">
        Add contact
      </button>
    </form>
  );
}
