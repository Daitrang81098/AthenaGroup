import React from "react";

interface CoordinatesProps {
    x: number;
    y: number;
}

const Coordinates: React.FC<CoordinatesProps> = ({ x, y }) => {
    return (
        <div className="Coordinates">
            <div className="XCoord">X:{x.toFixed(0)}</div>
            <div className="YCoord">Y:{y.toFixed(0)}</div>
        </div>
    );
};

export default Coordinates;
