let intervals = [[1,4],[2,5],[7,9]];

const overlappingInterval = (intervals) => {
  let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
  let result = [];
  let start = sortedIntervals[0][0];
  let end = sortedIntervals[0][1];
  for (let i = 1; i < sortedIntervals.length; i++) {
    if (sortedIntervals[i][0] <= end) {
      end = Math.max(end, sortedIntervals[i][1]);
    } else {
      result.push([start, end]);
      start = sortedIntervals[i][0];
      end = sortedIntervals[i][1];
    }
  }
  result.push([start, end]);
  return result;
}

console.log(overlappingInterval(intervals));

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
const Output = [[1,3], [4,7], [8,12]];

const insertInterval = (intervals, newInterval) => {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];

    // If overlaps
    if (Math.max(interval[0], newInterval[0]) <= Math.min(interval[1], newInterval[1])) {
        newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])];
        continue;
    }

    // If lower
    if (interval[0] > newInterval[1]) {
        result.push(newInterval, ...intervals.slice(i));
        return result;
    }

    result.push(interval);
  }

  result.push(newInterval);
  return result;
}
// console.log(insertInterval([[1,3], [5,7], [8,12]], [4,6]))
// console.log(insertInterval([[1,3], [5,7], [8,12]], [4,10]))
