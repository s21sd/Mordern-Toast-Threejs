// AnotherComponent.js
import React, { useEffect, useState } from 'react';
import ToastContainer from './Component/Toastcontaier';

const AnotherComponent = () => {
  const [successToastTriggered, setSuccessToastTriggered] = useState(false);
  const login = () => {
    try {
      triggerSuccessToast();
    } catch (error) {
      console.log(error);
    }
  }

  const triggerSuccessToast = () => {
    setSuccessToastTriggered(true);
  };
  useEffect(() => {
    login()
  }, [])

  return (
    <div>
      <ToastContainer triggerSuccessToast={successToastTriggered} />

    </div>
  );
};

export default AnotherComponent;
