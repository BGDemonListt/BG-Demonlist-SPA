import {
  Bounce,
  toast,
  type ToastOptions,
  type TypeOptions,
} from 'react-toastify';

const commonOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Bounce,
};

export const useToastNotification = () => {
  const emitToast = (
    content: string,
    type: TypeOptions,
    customOptions?: ToastOptions,
  ) => {
    toast(content, {
      ...commonOptions,
      ...customOptions,
      type,
    });
  };

  return {
    emitToast,
  };
};
