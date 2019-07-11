import moment from 'moment-timezone';
moment.tz.setDefault("America/New_York");

export const getParsedCreationDate = uxitTimeStamp => {
  const parsedTimeStamp = moment.unix(uxitTimeStamp);
  const now = moment();

  if (now.diff(parsedTimeStamp, 'seconds') < 60) {
    return `${now.diff(parsedTimeStamp, 'seconds')} seconds ago`;
  } else if (now.diff(parsedTimeStamp, 'minutes') < 60) {
    return `${now.diff(parsedTimeStamp, 'minutes')} minutes ago`;
  } else {
    return `${now.diff(parsedTimeStamp, 'hours')} hours ago`;
  }
};