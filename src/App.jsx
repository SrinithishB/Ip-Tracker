import { useState } from "react";
import "./App.css";

const App = () => {
    const [ip, setIp] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchIPInfo = async () => {
        setError(null);
        setData(null);
        
        try {
            const response = await fetch(`https://ipinfo.io/${ip}/json?token=6faa06ae25b390`);
            const result = await response.json();
            if (response.ok) {
                setData(result);
            } else {
                setError(result.error?.message || "Failed to fetch data");
            }
        } catch (err) {
            setError("An error occurred while fetching data");
        }
    };

    return (
        <>
            <nav id="nav"><h1>IP Tracker</h1></nav>
            <div id="content">
                <div id="box">
                    <input 
                        value={ip} 
                        type="text" 
                        onChange={(e) => setIp(e.target.value)} 
                        placeholder="Enter IP Address" 
                    />
                    <button onClick={fetchIPInfo}>Track</button>
                    {error && <p className="error-message">{error}</p>}
                    {data && (
                        <div id="result">
                            <p><strong>IP:</strong> {data.ip}</p>
                            <p><strong>City:</strong> {data.city}</p>
                            <p><strong>Region:</strong> {data.region}</p>
                            <p><strong>Country:</strong> {data.country}</p>
                            <p><strong>Location:</strong> {data.loc}</p>
                            <p><strong>ISP:</strong> {data.org}</p>
                            <div id="map-container">
                                <iframe 
                                    title="location-map" 
                                    src={`https://maps.google.com/maps?q=${data.loc}&output=embed`} 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default App;
