import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.accordion}>
      <div style={styles.header} onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div style={styles.content}>{content}</div>}
    </div>
  );
}

const styles = {
  accordion: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px 0',
  },
  header: {
    padding: '10px',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
  },
  content: {
    padding: '10px',
    backgroundColor: '#fafafa',
  },
};

export default Accordion;
