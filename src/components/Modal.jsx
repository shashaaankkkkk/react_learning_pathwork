import React, { useState } from 'react';

function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Modal Title</h2>
        <p>This is a simple modal component.</p>
        <button onClick={closeModal} style={styles.button}>Close</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: '#fff',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Modal;
