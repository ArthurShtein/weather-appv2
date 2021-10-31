export const locationService = {
  findMyLocation,
};

const findMyLocation = () => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  };

  const error = () => {
    console.log(" Unable to find location");
  };

  navigator.geolocation.getCurrentPosition(success, error);
};
