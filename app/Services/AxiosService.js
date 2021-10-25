

// @ts-ignore
export const questionApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=18&type=boolean',
  timeout: 4000
})