export const FETCH_COSTS = 'FETCH_COSTS';
// export const GET_MONTHS_COSTS = 'GET_MONTHS_COSTS';

// AJAX request to get costs
const promise = fetch("http://localhost:3000/costs/")
  .then(response => response.json());

export function fetchCosts() {
  // AJAX request
  console.log(promise);
  return {
    type: FETCH_COSTS,
    payload: promise
  };
}

// export function fetchMonthsCosts() {
//   const date = new Date();
//   const monthsCosts = [];
//   for (const cost of promise) {
//     if (cost.createdAt.getMonth() === date.getMonth()) {
//       monthsCosts.push(cost);
//     }
//   }

//   return {
//     type: GET_MONTHS_COSTS,
//     payload: monthsCosts
//   };
// }

