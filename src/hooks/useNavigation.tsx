import React from 'react';

export const useNavigation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [routes, setRoutes] = React.useState(null);

  const navigate = (destination: string) => {
    console.log('navigated to ', destination);
  };

  return {navigate, routes};
};
