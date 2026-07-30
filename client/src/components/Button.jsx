import { Link } from "react-router-dom";

export default function Button({
    children,
    to,
    variant = "primary",
    onClick
}) {

    const base =
        "px-6 py-3 rounded-xl font-semibold transition duration-300";

    const styles = {

        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "border border-slate-700 hover:bg-slate-800 text-white"

    };

    if (to) {
        return (
            <Link
                to={to}
                className={`${base} ${styles[variant]}`}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${base} ${styles[variant]}`}
        >
            {children}
        </button>
    );
}