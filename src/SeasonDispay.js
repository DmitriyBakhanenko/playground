import React, { useState, useEffect } from 'react';

export default function SeasonDispay() {
  const loadingStatesData = [
    'loading',
    'loading .',
    'loading ..',
    'loading ...'
  ];
  const [data, setData] = useState(null);
  const [loadingStatus, setloadingStatus] = useState(loadingStatesData[0]);
  const [counter, setCounter] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('start effect');
    if (data === null && error === '') {
      if (counter > 3) return setCounter(0);
      else {
        setTimeout(() => {
          setloadingStatus(loadingStatesData[counter]);
          setCounter(counter + 1);
        }, 350);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  setTimeout(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setData(position),
      err => setError(err.message)
    );
  }, 5000);

  const errorRender = <h2>{error}</h2>;

  const dataRender = (
    <>
      <div>
        <h2>
          Latitude: {data !== null ? data.coords.latitude : loadingStatus}
        </h2>
      </div>
      <div>
        <h2>
          Longitude: {data !== null ? data.coords.longitude : loadingStatus}
        </h2>
      </div>
    </>
  );

  return <>{error ? errorRender : dataRender}</>;
}
