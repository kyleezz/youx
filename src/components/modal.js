import React from 'react';

const Modal = ({ show, onClose, domains }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Websites</h2>
        <ul>
          {domains.map((domain, index) => (
            <li key={index}>{domain}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;