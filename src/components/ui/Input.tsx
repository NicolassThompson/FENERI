import React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, id, required, ...props }, ref) => {
    const inputId = id || React.useId();
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-textMain flex items-center justify-between"
          >
            <span>
              {label} {required && <span className="text-red-500">*</span>}
            </span>
          </label>
        )}
        <input
          type={type}
          id={inputId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          required={required}
          className={cn(
            "min-h-[44px] px-4 py-2.5 rounded-sm border border-gray-300 bg-white text-textMain text-base transition-colors focus:border-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker disabled:bg-gray-100 disabled:opacity-60",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-xs font-medium text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, required, ...props }, ref) => {
    const textareaId = id || React.useId();
    const errorId = `${textareaId}-error`;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-semibold text-textMain flex items-center justify-between"
          >
            <span>
              {label} {required && <span className="text-red-500">*</span>}
            </span>
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          required={required}
          className={cn(
            "min-h-[120px] px-4 py-3 rounded-sm border border-gray-300 bg-white text-textMain text-base transition-colors focus:border-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker disabled:bg-gray-100 disabled:opacity-60",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <span id={errorId} className="text-xs font-medium text-red-600">
            {error}
          </span>
        )}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
