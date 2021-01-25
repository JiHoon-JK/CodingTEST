
// 1 gigasecond = 1,000,000,000,000 seconds
const GIGASECOND = 1000000000000;

export const gigasecond = (startDate) => {
  // 주어진 시간에 1 gigasecond를 더하고 날짜로 바꿔주면 됨.
  // Just add 1 gigasecond to the startDate and convert it to a date.
  // 그렇게 하기 위해서, 주어진 시간을 second 로 변환.
  // To do so, convert the startDate to second. (using getTime())
  const startTime = startDate.getTime();
  // 변환된 second와 변환된 GIGASECOND를 더하고 날짜로 바꿔준다.
  // The converted second and converted GIGASECOND are added and converted into a date.
  const endDate = new Date(startTime + GIGASECOND);
  return endDate;
};

