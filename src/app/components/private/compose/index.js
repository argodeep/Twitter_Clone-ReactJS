import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'app/components/common/backdrop-modal';
import Create from 'app/components/common/create-post';

export default function Compose() {
    const [isModalOpen, setModal] = useState(false);
    const route = useHistory();

    useEffect(() => {
        setModal(true);
        return (() => {
            console.log('Compose unmounted')
        })
    })

    return (
        <React.Fragment>
            {isModalOpen && (
                <Modal>
                    <div className="modal-container">
                        <div className="modal-view">
                            <div className="modal-header" onClick={() => route.replace('/home')}>×</div>
                            <div className="modal-body">
                                <Create isPosted={() => route.replace('/home')} rows={7} />
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </React.Fragment>
    )
}