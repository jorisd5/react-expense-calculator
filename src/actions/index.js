export const FETCH_COSTS = 'FETCH_COSTS';
export const GET_MONTHS_COSTS = 'GET_MONTHS_COSTS';

const today = new Date();
const currentMonth = today.getMonth() + 1;

export function fetchCosts() {
  // AJAX request
  const promise = fetch("http://localhost:3000/costs/").then(response => response.json());
  console.log(promise);
  return {
    type: FETCH_COSTS,
    payload: promise
  };
}

export function fetchMonthsCosts(month = currentMonth) {
  const promise = fetch(`http://localhost:3000/costs/month/${month}`).then(response => response.json());
  return {
    type: GET_MONTHS_COSTS,
    payload: promise
  };
}
