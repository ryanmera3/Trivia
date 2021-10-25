

// @ts-ignore
export const questionApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&type=boolean',
  timeout: 4000
})