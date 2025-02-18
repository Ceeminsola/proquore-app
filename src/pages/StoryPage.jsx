import React, { useState } from "react";

const Box = ({ id, label, isClickable, onClick }) => (
  <div
    onClick={isClickable ? onClick : undefined}
    className={`
      w-32 h-32 
      border-2 
      border-gray-400 
      flex flex-col
      justify-center
      items-center
      ${isClickable ? "cursor-pointer hover:bg-gray-100" : ""} 
      bg-white
      relative
    `}
  >
    <div className="text-sm">{id}</div>
    <div className="text-sm">{label}</div>
    <div className="text-sm">Link</div>
  </div>
);

const HorizontalArrow = () => (
<div className="w-full">
  <svg className="w-full h-2" viewBox="0 0 100 10" fill="none">
    <line x1="0" y1="5" x2="100" y2="5" stroke="gray" strokeWidth="2" />
    <polygon points="100,5 92,10 92,0" fill="gray" />
  </svg>
</div>

);

const VerticalConnector = ({ height }) => (
  <div
    className="absolute"
    style={{
      left: "64px",
      height: `${height}px`,
      width: "2px",
      backgroundColor: "#9CA3AF",
    }}
  />
);

const RightAngleArrow = ({ height }) => (
  //   <div className="absolute" style={{ left: '64px' }}>
  <div className="absolute" style={{ left: "-40px" }}>
    {/* Vertical line */}
    <div
      className="absolute bg-gray-400"
      style={{
        width: "2px",
        height: "130px",
        /* height: `${height}px`, */
        left: "0px",
        top: "-70px",
      }}
    />
    {/* Horizontal line */}
    <svg
      className="absolute"
      style={{
        width: "48px",
        height: "8px",
        left: "0px",
        top: `${height - 3}px`, // Adjusted to center the arrow vertically
      }}
    >
      <path
        d="M0 4 L40 4 M40 4 L32 0 M40 4 L32 8"
        stroke="#9CA3AF"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
);

const BoxNode = ({ data, onBoxClick, level = 0 }) => {
  const handleClick = () => {
    if (data.isClickable) {
      onBoxClick(data.path);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <Box
          id={data.id}
          label={data.label}
          isClickable={data.isClickable}
          onClick={handleClick}
        />
      </div>

      {data.children?.length > 0 && (
        <div
          className="absolute"
          style={{
            left: "0px",
            top: "132px", // Box height + small gap
          }}
        >
          {data.children.map((child, index) => (
            <div
              key={index}
              className="relative"
              style={{
                marginTop: index === 0 ? "0px" : "164px", // Box height + arrow height + gap
              }}
            >
              <RightAngleArrow height={60} />
              <div>
                {/* <div style={{ marginLeft: '112px' }}> */}
                <BoxNode
                  data={child}
                  onBoxClick={onBoxClick}
                  level={level + 1}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BoxFlow = () => {
  const [boxes, setBoxes] = useState([
    {
      id: "RFQ 0001",
      label: "CREATED",
      isClickable: false,
      path: [0],
      children: [],
    },
    {
      id: "QUO 0001",
      label: "QUO_CREATED",
      isClickable: true,
      path: [1],
      children: [],
    },
    {
      id: "PO 0001",
      label: "PO_CREATED",
      isClickable: true,
      path: [2],
      children: [],
    },
    {
      id: "INV 0001",
      label: "INV_CREATED",
      isClickable: true,
      path: [3],
      children: [],
    },
  ]);

  const getNextId = (baseId) => {
    const [prefix, number] = baseId.split(" ");
    const nextNumber = (parseInt(number) + 1).toString().padStart(4, "0");
    return `${prefix} ${nextNumber}`;
  };

  const handleBoxClick = (path) => {
    const newBoxes = [...boxes];
    let currentBox = newBoxes;

    for (let i = 0; i < path.length; i++) {
      if (i === path.length - 1) {
        const clickedBox = currentBox[path[i]];
        const newChild = {
          id: getNextId(clickedBox.id),
          label: clickedBox.label,
          isClickable: true,
          path: [...path, clickedBox.children.length],
          children: [],
        };
        clickedBox.children.push(newChild);
      } else {
        currentBox = currentBox[path[i]].children;
      }
    }

    setBoxes(newBoxes);
  };

  return (
    <div className="p-8">
      <div className="flex items-center">
        {boxes.map((box, index) => (
          <div key={index} className="flex items-center">
            <BoxNode data={box} onBoxClick={handleBoxClick} />
            {index < boxes.length - 1 && <HorizontalArrow />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxFlow;
