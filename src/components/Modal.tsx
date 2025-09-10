import React from 'react';

interface ModalProps {
    isVisible: boolean;
    content: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, content, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {content}
            </div>
        </div>
    );
};

export default Modal;