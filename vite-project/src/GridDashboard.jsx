import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Power } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb as solidLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as regularLightbulb } from "@fortawesome/free-regular-svg-icons";

const GridDashboard = () => {
  const [gridState, setGridState] = useState({
    0: true,
    1: false,
    2: false,
    3: false,
  });

  // Simulate receiving updates from the backend
  useEffect(() => {
    const socket = new WebSocket("ws://your-backend-url/ws");

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setGridState((prevState) => ({
        ...prevState,
        [data.gridIndex]: data.isActive,
      }));
    };

    return () => {
      socket.close();
    };
  }, []);

  const renderGrid = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Object.entries(gridState).map(([index, isActive]) => (
          <Card
            key={index}
            className={`p-6 px-7 rounded-3xl backdrop-blur-md ${
              isActive ? "bg-white/40 text-white shadow-lg" : "bg-white/5"
            }`}
          >
            <FontAwesomeIcon
              icon={isActive ? solidLightbulb : regularLightbulb}
              className={`text-5xl ${
                isActive
                  ? "text-[rgb(247,197,33)] drop-shadow-[0_0_10px_rgba(220,180,15,0.7)]"
                  : "text-white/50"
              }`}
            />
            <CardContent className="mt-6">
              <div className="mt-2 text-sm flex items-center space-x-2">
                <h1 className="text-xl font-semibold">
                  Zone {parseInt(index) + 1}
                </h1>
              </div>
              <p className=" text-xs opacity-40">
                ESP8266-{parseInt(index) + 1}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  const [showVideoFeed, setShowVideoFeed] = useState(false);

  const toggleVideoFeed = () => {
    setShowVideoFeed((prevState) => !prevState);
  };

  return (
    <div className="max-w-4xl py-20 mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Room Monitor</h1>
      {renderGrid()}
      <div className="mt-6 p-4 px-6 bg-gray-50/10 backdrop-blur-2xl rounded-3xl">
        <h2
          onClick={toggleVideoFeed}
          className="text-lg cursor-pointer w-full font-semibold"
        >
          Live Video Feed
        </h2>
        {showVideoFeed && (
          <img
            src="http://10.9.84.177:4747/video"
            alt="Live video feed"
            width="425"
            height="319"
            className="shrinkToFit bg-white/40 w-full rounded-xl my-2"
          />
        )}
      </div>
    </div>
  );
};

export default GridDashboard;
