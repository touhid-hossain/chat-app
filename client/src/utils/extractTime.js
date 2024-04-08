export function extractTime(dateString) {
	const date = new Date(dateString);
	const hours = date.getHours();
	const minutes = padZero(date.getMinutes());
	const amPm = hours >= 12 ? 'PM' : 'AM';
	const displayHours = hours % 12 || 12;
  
	return `${displayHours}:${minutes} ${amPm}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
	return number.toString().padStart(2, "0");
  }