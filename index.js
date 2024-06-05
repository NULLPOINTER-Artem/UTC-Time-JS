// Convert UTC timestamp into local timestamp
const getLocalFromUTCTimestamp = (timestamp) =>
    new Date(timestamp - (new Date().getTimezoneOffset() * 60000)).getTime();

// Get timestamp in UTC
const getTimestampInUTC = (date = new Date()) => {
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    ).getTime();
};

// OR
/*
    Every date save in UTC format in DB (ex - '2024-06-05T13:38:31.785Z') (new Date().toISOString())
    Then new Date('2024-06-05T13:38:31.785Z') on frontend
*/