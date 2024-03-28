import { useState } from 'react';
import { TiTick } from "react-icons/ti";

const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const createToast = (text, color) => {
        const date = new Date();
        const sec = date.getSeconds();
        const newToast = {
            id: sec,
            icon: <TiTick color='white' size={26} />,
            text,
            color
        };
        setToasts((prevToasts) => [...prevToasts, newToast]);

        setTimeout(() => removeToast(newToast.id), 5000);
    };

    const removeToast = (id) => {
        setToasts((prevToasts) => {
            return prevToasts.filter(toast => toast.id !== id);
        });
    };

    return {
        createSuccessToast: () => createToast('Success: This is a success toast.', 'var(--success)'),
        createErrorToast: () => createToast('Error: This is an error toast.', 'var(--error)'),
        createWarningToast: () => createToast('Warning: This is a warning toast.', 'var(--warning)'),
        createInfoToast: () => createToast('Info: This is an information toast.', 'var(--info)'),
        toasts
    };
};

export default useToast;
