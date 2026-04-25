import axios, {
  AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { useEffect, useState, type PropsWithChildren } from 'react';
import { useNavigate } from 'react-router';
import { BASE_API_URL } from '../../constants';
import { useToastNotification } from '../../hooks/useToastNotification';

declare module 'axios' {
  export interface AxiosRequestConfig {
    disableErrorLogging?: boolean;
  }
}

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

function AxiosInterceptor({ children }: PropsWithChildren) {
  const { emitToast } = useToastNotification();
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();

  const getAccessTokenSilently = async () => {
    // TODO: Fix later
    return '';
  };

  useEffect(() => {
    const reqInterceptor = async (config: InternalAxiosRequestConfig<any>) => {
      const accessToken = await getAccessTokenSilently();
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      return config;
    };

    const resInterceptor = (response: AxiosResponse) => {
      return response;
    };

    const errInterceptor = (error: AxiosError) => {
      const disableErrorLogging = error.config?.disableErrorLogging;

      if (!disableErrorLogging && error.response?.data) {
        const message = (error.response?.data as string[]).join('\n');

        emitToast(message, 'error');
      }

      return Promise.reject(error);
    };

    const axiosReqInterceptor =
      axiosInstance.interceptors.request.use(reqInterceptor);

    const axiosResInterceptor = axiosInstance.interceptors.response.use(
      resInterceptor,
      errInterceptor,
    );

    setIsSet(true);
    return () => {
      axiosInstance.interceptors.request.eject(axiosReqInterceptor);
      axiosInstance.interceptors.response.eject(axiosResInterceptor);
    };
  }, [navigate]);

  return isSet && children;
}

export default AxiosInterceptor;
