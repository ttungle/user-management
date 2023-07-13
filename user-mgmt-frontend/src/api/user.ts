import axiosClient from './axios';

export const userApi = {
  getAllUsers(): Promise<any> {
    const url = '/users';
    return axiosClient.get(url);
  },

  getUser(userId: number): Promise<any> {
    const url = `/users/${userId}`;
    return axiosClient.get(url);
  },

  createUser(payload: any): Promise<any> {
    const url = '/users';
    return axiosClient.post(url, payload);
  },

  updateUser(userId: number, payload: any): Promise<any> {
    const url = `/users/${userId}`;
    return axiosClient.put(url, payload);
  },

  deleteUser(userId: number) {
    const url = `/users/${userId}`;
    return axiosClient.delete(url);
  },
};
