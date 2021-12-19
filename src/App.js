import "./app.css";
import * as React from "react";
import { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { listTripEntries } from "./API";
import TripEntryForm from "./TripEntryForm";
import Register from "./components/register/register";

function App() {
  const currentUser = null;
  const [tripEntries, setTripEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 41.890251,
    longitude: 12.492373,
    zoom: 4,
  });

  useEffect(() => {
    (async () => {
      const tripEntries = await listTripEntries();
      setTripEntries(tripEntries);
    })();
  }, []);

  const showAddMarkedPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddEntryLocation({
      longitude,
      latitude,
    });
  };

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1Ijoia2FybGl0YXphc3MiLCJhIjoiY2t4M2lkY21yMDRpaDJ4bzVlMHd1aW9tciJ9.nvlsu8H3P_5hQBXH3LZwVA"
        // {process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        onDblClick={showAddMarkedPopup}
        mapStyle="mapbox://styles/karlitazass/ckx4bamw83zzj15p5y8mu0tg3"
      >
        {/* statinis */}
        <Marker latitude={52} longitude={12} offsetLeft={-12} offsetTop={-24}>
          <svg
            className="svgMarker"
            style={{
              width: "24px",
              height: "24px",
            }}
            viewBox="0 0 24 24"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </Marker>

        {tripEntries.map((entry) => (
          <>
            <Marker
              key={entry._id}
              latitude={52}
              longitude={12}
              offsetLeft={-12}
              offsetTop={-24}
            >
              <svg
                className="svgMarker"
                onClick={() =>
                  setShowPopup({
                    [entry._id]: true,
                  })
                }
                style={{
                  width: "24px",
                  height: "24px",
                }}
                viewBox="0 0 24 24"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>

            {showPopup[entry._id] ? (
              <Popup
                latitude={entry.latitude}
                longitude={entry.longitude}
                closeButton={true}
                closeOnClick={false}
                dynamicPosition={true}
                onClose={() => setShowPopup({})}
                anchor="left"
              >
                <div className="card">
                  <label>Place</label>
                  <h4 className="place">Berlyno parlamentas</h4>
                  <label>Review</label>
                  <p className="review">aprasymas</p>
                  <label>info</label>
                  <span className="username">kas suskure</span>
                  <span className="date">kada sukurta</span>
                </div>
              </Popup>
            ) : null}
          </>
        ))}

        {addEntryLocation ? (
          <>
            <Marker
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              offsetLeft={-12}
              offsetTop={-24}
            >
              <svg
                className="svgMarker"
                style={{
                  width: "24px",
                  height: "24px",
                }}
                viewBox="0 0 24 24"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </Marker>
            <Popup
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => addEntryLocation(null)}
              anchor="left"
            >
              <div className="card">
                <TripEntryForm />
              </div>
            </Popup>
          </>
        ) : null}
        {currentUser ? (
          <button className="btn_logout">Log out</button>
        ) : (
          <div>
            <button className="btn_login">Login</button>
            <button className="btn_register">Register </button>
          </div>
        )}

        {/* <Register/> */}
      </ReactMapGL>
    </div>
  );
}

export default App;
