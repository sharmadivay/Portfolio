import { useEffect } from "react";

const Notification = ({ message, type, onClose }) => {
  const getClassName = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-700 text-white";
    }
  };

  useEffect(() => {
    // Set a timer to automatically hide the notification after 5 seconds (5000 ms)
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    // Cleanup timer if the component is unmounted or if the notification is manually closed
    return () => clearTimeout(timer);
  }, [onClose]);

  const className = getClassName();

  return (
    <div
      className={` top-5 right-5 px-4 py-2 rounded-md shadow-lg ${className} z-50`}
      role="alert"
    >
      <div
        className={`flex justify-between items-center bg-${
          type === "success"
            ? "green-500"
            : type === "error"
            ? "red-500"
            : "gray-700"
        } text-white`}
      >
        <span
          className={`bg-${
            type === "success"
              ? "green-500"
              : type === "error"
              ? "red-500"
              : "gray-700"
          } text-white`}
        >
          {message}
        </span>
      </div>
    </div>
  );
};

export default Notification;
