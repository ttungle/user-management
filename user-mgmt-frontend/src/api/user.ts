import axiosClient from './axios';

export const userApi = {
  getAllUsers(): Promise<any> {
    const url = '/users';
    return axiosClient.get(url);
  },

  createUser(payload: any): Promise<any> {
    const url = '/users';
    return axiosClient.post(url, payload);
  },
};
