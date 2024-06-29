import "./App.css";
import optechHiveLogo from "./assets/images/optech-logo-512x512.png";

function App() {
    return (
        <div className="flex flex-col justify-center items-center font-oswald h-[100vh] mx-4">
            <div className="text-container my-4">
                <p className="text-xl">Welcome to,</p>
                <h1 className="text-5xl">Optech Hive - Software Agency</h1>
            </div>
            <img
                src={optechHiveLogo}
                className="max-w-[256px] w-full rounded-3xl my-4"
                alt="Optech Hive Logo"
            />
            <p className="hover:text-blue-500">
                A trusted Software Agency
            </p>
        </div>
    );
}

export default App;
