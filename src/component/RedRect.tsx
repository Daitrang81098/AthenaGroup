import React, {
    MouseEvent,
    TouchEvent
} from "react";

interface RedRectProps {
    redRectPosition: { x: number; y: number };
    redRectRef: React.RefObject<HTMLDivElement>;
    isDragging: boolean;
    startDragging: (clientX: number, clientY: number) => void;
    moveRedRect: (clientX: number, clientY: number) => void;
    stopDragging: () => void;
    handleMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
    handleTouchStart: (e: TouchEvent<HTMLDivElement>) => void;
}

const RedRect: React.FC<RedRectProps> = ({
                                             redRectPosition,
                                             redRectRef,
                                             handleMouseDown,
                                             handleTouchStart,
                                         }) => {
    return (
        <div
            className="RedRect"
            ref={redRectRef}
            style={{left: redRectPosition.x, top: redRectPosition.y}}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <div className="TextInRedRect">RedRect</div>
        </div>
    );
};

export default RedRect;
