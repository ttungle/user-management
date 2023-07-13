import { create } from 'zustand';
import { UserData } from '../models';

type State = {
  isUserDialogVisible: boolean;
  showDeleteConfirm: boolean;
  userData: UserData;
};

type Action = {
  setIsUserDialogVisible: (isUserDialogVisible: State['isUserDialogVisible']) => void;
  setUserData: (userData: State['userData']) => void;
  setShowDeleteConfirm: (showDeleteConfirm: State['showDeleteConfirm']) => void;
};

const useStore = create<State & Action>((set) => ({
  isUserDialogVisible: false,
  showDeleteConfirm: false,
  userData: {} as UserData,
  setIsUserDialogVisible: (isUserDialogVisible) => set(() => ({ isUserDialogVisible })),
  setUserData: (userData: UserData) => set(() => ({ userData })),
  setShowDeleteConfirm: (showDeleteConfirm) => set(() => ({ showDeleteConfirm })),
}));

export default useStore;
