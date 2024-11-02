let totalScrollDistance = 0;
let lastScrollPosition = window.scrollY || document.documentElement.scrollTop;


chrome.storage.local.get('scrollDistance', (data) => {
  totalScrollDistance = data.scrollDistance || 0;
});


window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
  
  
  const scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition);
  
  
  totalScrollDistance += scrollDifference;

  
  lastScrollPosition = currentScrollPosition;

  
  chrome.storage.local.set({ scrollDistance: totalScrollDistance });
});


function calculateRemainingDistanceToMoon() {
  const pixelsToKilometersConversionFactor = 0.00001; // Example conversion factor
  const scrolledDistanceInKilometers = totalScrollDistance * pixelsToKilometersConversionFactor;
  const distanceToMoon = 384400; // Distance to the Moon in kilometers
  const remainingDistanceToMoon = distanceToMoon - scrolledDistanceInKilometers;

  console.log(`Total Scroll Distance: ${scrolledDistanceInKilometers.toFixed(2)} km`);
  console.log(`Remaining Distance to Moon: ${remainingDistanceToMoon.toFixed(2)} km`);
}


calculateRemainingDistanceToMoon();
