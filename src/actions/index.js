export const FETCH_COSTS = 'FETCH_COSTS';
export const GET_MONTHS_COSTS = 'GET_MONTHS_COSTS';

// AJAX request to get costs

export function fetchCosts() {
  // AJAX request
  const promise = fetch("http://localhost:3000/costs/").then(response => response.json());
  console.log(promise);
  return {
    type: FETCH_COSTS,
    payload: promise
  };
}

export function fetchMonthsCosts() {
  // const currentDate = new Date();
  // console.log(promise);
  // let monthsCosts = [];

  // // const filterCurrentMonth = (cost) => {
  // //   const createdAtDate = new Date(cost.createdAt);
  // //   if (createdAtDate.getMonth() === currentDate.getMonth()) {
  // //     monthsCosts.push(cost);
  // //   }
  // // };

  // monthsCosts = promise.map((cost) => {
  //   return cost.createdAtDate.getMonth() === currentDate.getMonth();
  // });

  // // for (const cost of promise) {
  // //   filterCurrentMonth(cost);
  // // }

  // console.log(monthsCosts);

  // return {
  //   type: GET_MONTHS_COSTS,
  //   payload: monthsCosts
  // };
const promise = fetch("http://localhost:3000/costs/").then(response => response.json()); //remove duplicate
  return {
    type: GET_MONTHS_COSTS,
    payload: promise
  };
}
