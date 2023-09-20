import React, { useState, useRef, MouseEvent } from "react";
import "./App.css";

const App: React.FC = () => {
    const [redRectPosition, setRedRectPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const redRectRef = useRef<HTMLDivElement>(null);//tạo một tham chiếu (ref) đến phần tử <div> chứa hình vuông đỏ.
    const dragStartPoint = useRef({ x: 0, y: 0 }); // tạo một tham chiếu để lưu vị trí bắt đầu khi bắt đầu kéo thả.
    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (redRectRef.current) {
            setIsDragging(true);
            dragStartPoint.current = {
                x: e.clientX - redRectRef.current.getBoundingClientRect().left,
                y: e.clientY - redRectRef.current.getBoundingClientRect().top,
            };
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging) {
            const newX = e.clientX - dragStartPoint.current.x;
            const newY = e.clientY - dragStartPoint.current.y;
            setRedRectPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="App" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div
                className="RedRect"
                ref={redRectRef}
                style={{ left: redRectPosition.x, top: redRectPosition.y }}
                onMouseDown={handleMouseDown}
            >
                <div className="TextInRedRect">RedRect</div>
            </div>
            <div className="Coordinates">
               <div className="XCoord">X:{redRectPosition.x.toFixed(0)}</div>

               <div className="YCoord">Y:{redRectPosition.y.toFixed(0)}</div>
            </div>
        </div>
    );
};

export default App;
