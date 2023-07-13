import { Button } from 'primereact/button';
import { UserData } from '../../../models';
import useStore from '../../../app/store';

export interface ActionCellProps {
  data: UserData;
}

export function ActionCell({ data }: ActionCellProps) {
  const [setIsUserDialogVisible, setUserData, setShowDeleteConfirm] = useStore((state) => [
    state.setIsUserDialogVisible,
    state.setUserData,
    state.setShowDeleteConfirm,
  ]);

  const handleEditClick = () => {
    setIsUserDialogVisible(true);
    setUserData(data);
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
    setUserData(data);
  };

  return (
    <>
      <Button label="View" size="small" className="mr-2" />
      <Button label="Edit" size="small" className="mr-2" severity="secondary" onClick={handleEditClick} />
      <Button label="Delete" size="small" severity="danger" onClick={handleDeleteClick} />
    </>
  );
}
