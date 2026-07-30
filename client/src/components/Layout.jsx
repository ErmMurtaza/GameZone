import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <main className="min-h-screen bg-slate-950 text-white px-8 lg:px-20">
            <Navbar />
            <Outlet />
        </main>
    );
}