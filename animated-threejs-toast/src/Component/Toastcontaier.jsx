import React, { useEffect, useState } from 'react';
import { TiTick } from "react-icons/ti";
import { BiSolidError } from "react-icons/bi";
import { MdError } from "react-icons/md";
import { CiCircleInfo } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

const ToastContainer = ({ triggerSuccessToast }) => {

    const [toasts, setToasts] = useState([]);

    const toastDetails = {
        success: {
            icon: <TiTick color='white' size={26} />,
            text: 'Success: This is a success toast.',
            color: 'var(--success)'
        },
        error: {
            icon: <MdError color='white' size={26} />,
            text: 'Error: This is an error toast.',
            color: 'var(--error)'
        },
        warning: {
            icon: <BiSolidError color='white' size={26} />,
            text: 'Warning: This is a warning toast.',
            color: 'var(--warning)'
        },
        info: {
            icon: <CiCircleInfo color='white' size={26} />,
            text: 'Info: This is an information toast.',
            color: 'var(--info)'
        }
    };
    const createSuccessToast = () => {
        createToast('success');
    };

    const createErrorToast = () => {
        createToast('error');
    };

    const createWarningToast = () => {
        createToast('warning');
    };

    const createInfoToast = () => {
        createToast('info');
    };

    const removeToast = (id) => {
        setToasts((prevToasts) => {
            return prevToasts.filter(toast => toast.id !== id);
        });
    };
    useEffect(() => {
        if (triggerSuccessToast) {
            createToast('success')
        }
    }, [triggerSuccessToast])

    const createToast = (id) => {
        const { icon, text, color } = toastDetails[id];
        const date = new Date();
        const sec = date.getSeconds();
        // console.log(sec);
        const newToast = {
            id: sec,
            icon,
            text,
            color
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(() => removeToast(newToast.id), 5000);
    };
    return (
        <div>
            <div className="notifications" style={{ position: 'fixed', top: '30px', right: '20px' }}>
                {toasts.map((toast, index) => (
                    <div key={index} className={`toast ${toast.id}`} style={{ width: '400px', position: 'relative', overflow: 'hidden', listStyle: 'none', borderRadius: '4px', padding: '16px 17px', marginBottom: '10px', background: toast.color, justifyContent: 'space-between', animation: 'show_toast 0.3s ease forwards' }}>
                        <div className="column" style={{ display: 'flex', alignItems: 'center' }}>
                            <div>
                                {toast.icon}
                            </div>
                            <span style={{ fontSize: '1.07rem', marginLeft: '12px', color: 'white' }}>{toast.text}</span>
                        </div>
                        <FaXmark size={20} className="fa-solid fa-xmark" style={{ color: 'white', cursor: 'pointer' }} onClick={() => removeToast(toast.id)} />
                        <div style={{ position: 'absolute', content: '', height: '4px', width: '100%', bottom: '0px', left: '0px', animation: 'progress 5s linear forwards', background: 'var(--light)' }}></div>
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button className="btn" id="success" onClick={() => createToast('success')}>Success</button>
                <button className="btn" id="error" onClick={() => createToast('error')}>Error</button>
                <button className="btn" id="warning" onClick={() => createToast('warning')}>Warning</button>
                <button className="btn" id="info" onClick={() => createToast('info')}>Info</button>
            </div>
        </div>
    );
};

export default ToastContainer;
