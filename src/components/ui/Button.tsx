import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-darker focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-dark hover:bg-primary-darker text-white shadow-sm hover:shadow-md border border-transparent",
        secondary:
          "bg-secondary hover:bg-blue-800 text-white shadow-sm hover:shadow-md border border-transparent",
        outline:
          "bg-transparent border-2 border-primary-dark text-primary-dark hover:bg-bgGreen hover:text-primary-darker",
        ghost:
          "bg-transparent text-textMain hover:bg-gray-100 hover:text-primary-dark",
        light:
          "bg-white text-primary-darker hover:bg-gray-50 border border-gray-200 shadow-sm",
      },
      size: {
        sm: "h-9 px-3 py-1 text-sm rounded-sm min-h-[44px]",
        md: "h-11 px-5 py-2 text-base rounded-md min-h-[44px]",
        lg: "h-12 px-7 py-3 text-lg font-semibold rounded-md min-h-[48px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
