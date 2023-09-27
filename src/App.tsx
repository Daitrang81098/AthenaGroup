import React, { useState, useRef, MouseEvent, TouchEvent } from "react";
import "./App.css";
import RedRect from "./component/RedRect.tsx";
import Coordinates from "./component/Coordinates";

const App: React.FC = () => {
    const [redRectPosition, setRedRectPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const redRectRef = useRef<HTMLDivElement>(null);
    const dragStartPoint = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        startDragging(e.clientX, e.clientY);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            moveRedRect(e.clientX, e.clientY);
        }
    };

    const handleMouseUp = () => {
        stopDragging();
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        const touch = e.touches[0];
        startDragging(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (isDragging) {
            const touch = e.touches[0];
            moveRedRect(touch.clientX, touch.clientY);
        }
    };

    const handleTouchEnd = () => {
        stopDragging();
    };

    const startDragging = (clientX: number, clientY: number) => {
        if (redRectRef.current) {
            setIsDragging(true);
            const rect = redRectRef.current.getBoundingClientRect();
            dragStartPoint.current = {
                x: clientX - rect.left,
                y: clientY - rect.top,
            };
        }
    };

    const moveRedRect = (clientX: number, clientY: number) => {
        const newX = clientX - dragStartPoint.current.x;
        const newY = clientY - dragStartPoint.current.y;
        setRedRectPosition({ x: newX, y: newY });
    };

    const stopDragging = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="App"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <RedRect
                redRectPosition={redRectPosition}
                redRectRef={redRectRef}
                isDragging={isDragging}
                startDragging={startDragging}
                moveRedRect={moveRedRect}
                stopDragging={stopDragging}
                handleMouseDown={handleMouseDown}
                handleTouchStart={handleTouchStart}
            />
            <Coordinates x={redRectPosition.x} y={redRectPosition.y} />
        </div>
    );
};

export default App;
