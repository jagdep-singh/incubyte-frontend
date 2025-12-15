import { api } from '@/libs/api';
import { useEffect } from 'react';

const ServerPinger = () => {
  useEffect(() => {
    const pingServer = async () => {
      try {
        const response = await api.get('/status');
        if (response.status === 200) {
          console.log(response.data.message);
        } else {
          console.log('Ping failed:', response.status);
        }
      } catch (error) {
        console.log('Error during ping:', error);
      }
    };

    const intervalId = setInterval(pingServer, 10 * 60 * 1000);

    pingServer();

    return () => clearInterval(intervalId);
  }, []); 

  return null;
};

export default ServerPinger;
