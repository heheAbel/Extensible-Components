export const timestamp: Function = (
  date?: Date | number | string,
  style?: string
): string => {
  let provisionalityTime: string = "MM-DD-YYYY HH:mm:ss";
  let timeData: Date = new Date();
  if (style) {
    provisionalityTime = style;
  }
  if (date) {
    if (Object.prototype.toString.call(date) === "[object String]") {
      const regExp = /[y|Y]{4}|[m|M|D|d|H|h|s]{2} /;
      if (regExp) {
        provisionalityTime = date as string;
      } else {
        timeData = new Date(date as string);
      }
    } else {
      timeData = new Date(date as Date | number);
    }
  }
  const year = (timeData as Date).getFullYear().toString();
  const month = (timeData.getMonth() + 1).toString();
  const day = timeData.getDate().toString();
  const hours = timeData.getHours().toString();
  const minutes = timeData.getMinutes().toString();
  const seconds = timeData.getSeconds().toString();
  provisionalityTime = provisionalityTime.replace("YYYY", year);
  provisionalityTime = provisionalityTime.replace("yyyy", year);
  provisionalityTime = provisionalityTime.replace(
    "MM",
    month.length === 1 ? `0${month}` : month
  );
  provisionalityTime = provisionalityTime.replace(
    "DD",
    day.length === 1 ? `0${day}` : day
  );
  provisionalityTime = provisionalityTime.replace(
    "dd",
    day.length === 1 ? `0${day}` : day
  );
  provisionalityTime = provisionalityTime.replace(
    "HH",
    hours.length === 1 ? `0${hours}` : hours
  );
  provisionalityTime = provisionalityTime.replace(
    "hh",
    hours.length === 1 ? `0${hours}` : hours
  );
  provisionalityTime = provisionalityTime.replace(
    "mm",
    minutes.length === 1 ? `0${minutes}` : minutes
  );
  provisionalityTime = provisionalityTime.replace(
    "SS",
    seconds.length === 1 ? `0${seconds}` : seconds
  );
  provisionalityTime = provisionalityTime.replace(
    "ss",
    seconds.length === 1 ? `0${seconds}` : seconds
  );
  return provisionalityTime;
};
