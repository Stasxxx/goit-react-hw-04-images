import { useEffect } from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import { Overlay, Modal } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root')

export const ModalImg = ({ onClose, imageURL }) => {
    

    useEffect(() => {
        const handleKeyDown = e => {
                  
            if (e.code === 'Escape') {
                
                onClose()
            }
    }
        window.addEventListener('keydown',handleKeyDown)
        
        
        return () => {
            window.removeEventListener('keydown',handleKeyDown)
        }
    }, [onClose]);


   const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose()
        }
    }
    
        
        return createPortal(
            <Overlay  onClick={handleBackdropClick}>
                <Modal>
                    <img src={imageURL} alt="" />
                </Modal>
            </Overlay>, modalRoot,
        )
    
}

ModalImg.propTypes = {
    onClose: PropTypes.func.isRequired,
    imageURL: PropTypes.string.isRequired,
    }