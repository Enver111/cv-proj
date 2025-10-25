import type { ReactNode } from "react";
import ErrorIcon from "../../assets/icons/error.svg"; // можешь заменить на любую иконку

type ErrorMessageProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
  actionLabel?: string;
  extra?: ReactNode;
};

export default function ErrorMessage({
  title = "Something went wrong",
  message = "We couldn’t load the content. Please try again later.",
  onRetry,
  actionLabel = "Retry",
  extra,
}: ErrorMessageProps) {
  return (
    <div className="h-[700px]">
      <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-red-500 shadow-lg max-w-lg m-auto ">
        {/* Иконка */}
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-500/20 mb-4">
          <img src={ErrorIcon} alt="Error" className="w-8 h-8" />
        </div>

        {/* Заголовок */}
        <h2 className="text-2xl font-semibold text-red-400">{title}</h2>

        {/* Сообщение */}
        <p className="mt-2 text-gray-300">{message}</p>

        {/* Дополнительный контент */}
        {extra && <div className="mt-4">{extra}</div>}

        {/* Кнопка */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
