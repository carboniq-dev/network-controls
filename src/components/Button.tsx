import { FunctionalComponent, HTMLAttributes } from "preact";

type ButtonVariant = "primary" | "secondary" | "danger" | "ghost";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "border-transparent bg-blue-600 text-slate-50 hover:bg-blue-700 focus-visible:ring-blue-500",
    secondary:
        "border-slate-300 bg-slate-50 text-slate-800 hover:bg-white focus-visible:ring-slate-400",
    danger:
        "border-transparent bg-red-600 text-red-50 hover:bg-red-700 focus-visible:ring-red-500",
    ghost:
        "border-transparent bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400",
};

export const Button: FunctionalComponent<ButtonProps> = ({
    variant = "secondary",
    class: className,
    children,
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            type="button"
            class={[
                "inline-flex items-center justify-center border px-3 py-1.5 text-xs font-medium shadow-sm transition",
                "hover:-translate-y-px hover:shadow-md",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-60",
                variantClasses[variant],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </button>
    );
};
