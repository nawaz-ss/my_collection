import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as parkData from './Data/skateboard-parks.json'
import { MdSkateboarding } from "react-icons/md";


const accessToken = "pk.eyJ1IjoibmF3YXotc3MiLCJhIjoiY2t4NHlpcWllMmVscDJucDhsemd5dmQyNSJ9.VGR9rq7POZifNiZK9i2TKg"

function Mapbox() {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10,
        bearing: 0,
        pitch: 0
    })
    const [selectedPark, setSelectedPark] = useState(null)

    useEffect(() => {
        const listener = (e) => {
            if (e.key === "Escape"){
                setSelectedPark(null)
            }
        };
        window.addEventListener("keydown", listener)

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, [])

    return (
        <div className=''>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={accessToken}
                mapStyle={"mapbox://styles/nawaz-ss/ckx4z31s10hl814tddzsgrzuo"}
                onViewportChange={viewport => {
                    setViewport(viewport)
                }}
            >
                {parkData.features.map(park => (
                    <Marker
                        key={park.properties.PARK_ID}
                        latitude={park.geometry.coordinates[1]}
                        longitude={park.geometry.coordinates[0]}
                    >
                        <MdSkateboarding className='react-icon' onClick={e => {
                            e.preventDefault()
                            setSelectedPark(park)
                        }} />

                    </Marker>
                ))
                }
                {selectedPark ?
                    <Popup
                      latitude={selectedPark.geometry.coordinates[1]}
                      longitude={selectedPark.geometry.coordinates[0]}
                      onClose={() => setSelectedPark(null)}
                    >
                        <div>
                            <h3>{selectedPark.properties.NAME}</h3>
                            <p>{selectedPark.properties.DESCRIPTIO}</p>
                        </div>
                    </Popup>
                    : 
                    null
                }
            </ReactMapGL>
        </div>
    )
}

export default Mapbox