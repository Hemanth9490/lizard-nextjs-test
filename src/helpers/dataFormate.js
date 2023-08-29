export const timeAgo = (timestamp) => {
  const now = new Date();
  const updatedTime = new Date(timestamp);
  const timeDifference = now - updatedTime;

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (timeDifference < minute) {
    return 'Updated just now';
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return `Updated ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return `Updated ${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (timeDifference < month) {
    const days = Math.floor(timeDifference / day);
    return `Updated ${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (timeDifference < year) {
    const months = Math.floor(timeDifference / month);
    return `Updated ${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(timeDifference / year);
    return `Updated ${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};
