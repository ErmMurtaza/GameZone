import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import CreateRoom from "./pages/CreateRoom";
import JoinRoom from "./pages/JoinRoom";
import Room from "./pages/Room";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/create-room"
                        element={<CreateRoom />}
                    />

                    <Route
                        path="/join-room"
                        element={<JoinRoom />}
                    />
                    
                    <Route
                        path="/room/:roomId"
                        element={<Room />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}