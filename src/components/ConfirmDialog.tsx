import { Button } from "@/design-system/Button";

export const ConfirmDialog = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onCancel} />
      <div className="bg-white p-4 rounded shadow-md z-10 w-80">
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-between">
          <Button variant="secondary" onClick={onCancel}>
            Annuler
          </Button>
          <Button onClick={onConfirm}>Confirmer</Button>
        </div>
      </div>
    </div>
  );
};
