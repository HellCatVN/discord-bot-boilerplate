exports.bold = function(content) {
  let bold_content = `**${content}**`;
  return bold_content;
};

exports.under_bold = function(content) {
  let u_bold_content = `__**${content}**__`;
  return u_bold_content;
};

exports.under_bold_italic = function(content) {
  let under_bold_italic = `***${content}***`;
  return under_bold_italic;
};

exports.under_bold = function(content) {
  let u_bold_content = `__***${content}***__`;
  return u_bold_content;
};

exports.italic = function(content) {
  let italic_content = `*${content}*`;
  return italic_content;
};

exports.under_italic = function(content) {
  let u_italic_content = `__**__`;
  return u_italic_content;
};

exports.underline = function(content) {
  let underline_content = `__${content}__`;
  return underline_content;
};

exports.strike = function(content) {
  let strike_content = `~~${content}~~`;
  return strike_content;
};

exports.dateString = function(inputDate, sLng) {
  let timeStamp = new Date(inputDate).getTime();
  let toDate = new Date(timeStamp).getDate();
  let toMth = new Date(timeStamp).getMonth() + 1;
  let toYear = new Date(timeStamp).getFullYear();
  let dateStr = `${
    sLng === 'vi'
      ? `${toDate}.th${toMth}.${toYear}`
      : `${toMth}-${toDate}-${toYear}`
  }`;
  return dateStr;
};

exports.timeString = function(inputTime) {
  let timeStamp = new Date(inputTime).getTime();
  let toMin = new Date(timeStamp).getMinutes();
  let toHrs = new Date(timeStamp).getHours();
  let timeStr = `${toHrs}:${toMin}`;
  return timeStr;
};

exports.shortDateTime = function(inputTime, sLng) {
  let timeStamp = new Date(inputTime).getTime();
  let toDate = new Date(timeStamp).getDate();
  let toMth = new Date(timeStamp).getMonth() + 1;
  let toYear = new Date(timeStamp).getFullYear();
  let dateStr = `${
    sLng === 'vi'
      ? `${toDate}.${toMth}.${toYear}`
      : `${toMth}-${toDate}-${toYear}`
  }`;
  let toMin = new Date(timeStamp).getMinutes();
  let toHrs = new Date(timeStamp).getHours();
  let shortStr = `${dateStr} ${toHrs}:${toMin}`;
  return shortStr;
};
