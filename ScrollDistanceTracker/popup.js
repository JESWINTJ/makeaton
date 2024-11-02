
chrome.storage.local.get('scrollDistance', (data) => {
  const totalScrollDistance = data.scrollDistance || 0;
  const pixelsToKilometersConversionFactor = 0.00001; // Example conversion factor
  const scrolledDistanceInKilometers = totalScrollDistance * pixelsToKilometersConversionFactor;
  const distanceToMoon = 384400; // Distance to the Moon in kilometers
  const remainingDistanceToMoon = distanceToMoon - scrolledDistanceInKilometers;

  document.getElementById('distance').textContent = `${scrolledDistanceInKilometers.toFixed(2)} km`;
  document.getElementById('remaining-distance').textContent = `Remaining Distance to Moon: ${remainingDistanceToMoon.toFixed(2)} km`;
});
