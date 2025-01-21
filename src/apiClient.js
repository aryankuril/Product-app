import APIBase from '../src/api-base';

const apiClient = new APIBase({
  baseURL: 'http://localhost:3000/',
  defaultHeaders: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds
  tokenKey: 'access_token', // Key used for storing JWT token
  retryLimit: 3, // Number of retries for failed requests
  debounceDelay: 200, // Delay for debouncing requests
});

export default apiClient;