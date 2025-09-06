export default function Button({ variant, children }) {
    let cssClasses = "py-2 px-4 rounded-xl font-medium transition px-6 py-3";

    if (variant === "secondary") {
        cssClasses += " inline-block bg-cyan-500 hover:bg-cyan-600 text-white "
    } else if (variant === "text"){
        cssClasses += " text-stone-900"
    } else {
        cssClasses += " bg-blue-900 text-white hover:bg-blue-800"
    }

    return <button className={cssClasses}>{children}</button>
}