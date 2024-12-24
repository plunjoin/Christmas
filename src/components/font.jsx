// src/components/SnowText.jsx
import React from 'react';
import '../css/SnowText.css';

const SnowText = ({ text }) => {
    return (
        <div className="snow-text-container">
            <svg
                viewBox="0 0 100 300"
                preserveAspectRatio="xMidYMax meet"
                width="80%"
                overflow="visible"
            >
                <defs>
                    <filter id="snow-drift" filterUnits="userSpaceOnUse">
                        <feOffset in="SourceAlpha" dy="-1" result="stack-1"></feOffset>
                        <feOffset in="SourceAlpha" dy="-2" result="stack-2"></feOffset>
                        <feOffset in="SourceAlpha" dy="-2.5" result="stack-3"></feOffset>
                        <feMerge>
                            <feMergeNode in="stack-1"></feMergeNode>
                            <feMergeNode in="stack-2"></feMergeNode>
                            <feMergeNode in="stack-3"></feMergeNode>
                        </feMerge>
                        <feComposite in2="SourceAlpha" operator="xor"></feComposite>
                        <feGaussianBlur stdDeviation="1" result="snow-blur"></feGaussianBlur>
                        <feComponentTransfer in="snow-blur">
                            <feFuncA type="linear" slope="15" intercept="-4"></feFuncA>
                        </feComponentTransfer>
                        <feOffset dy="0.5" result="snow-back-shape"></feOffset>
                        <feFlood floodColor="#dde"></feFlood>
                        <feComposite in2="snow-back-shape" operator="in" result="snow-back"></feComposite>
                        <feComponentTransfer in="snow-blur" result="snow-mid-shape">
                            <feFuncA type="linear" slope="3" intercept="-1"></feFuncA>
                        </feComponentTransfer>
                        <feFlood floodColor="#c8c8ff"></feFlood>
                        <feComposite in2="snow-mid-shape" operator="in" result="snow-mid"></feComposite>
                        <feComponentTransfer in="snow-blur">
                            <feFuncA type="linear" slope="3.5" intercept="-2"></feFuncA>
                        </feComponentTransfer>
                        <feOffset dy="-0.5" result="snow-front-shape"></feOffset>
                        <feFlood floodColor="#fff"></feFlood>
                        <feComposite in2="snow-front-shape" operator="in" result="snow-front"></feComposite>
                        <feMerge result="snow-covered">
                            <feMergeNode in="SourceGraphic"></feMergeNode>
                            <feMergeNode in="snow-back"></feMergeNode>
                            <feMergeNode in="snow-mid"></feMergeNode>
                            <feMergeNode in="snow-front"></feMergeNode>
                        </feMerge>
                        <feOffset dx="0.5" dy="1" result="shadowPosition"></feOffset>
                        <feFlood floodColor="#113" floodOpacity="0.7" result="shadowColor"></feFlood>
                        <feComposite in2="shadowPosition" operator="in"></feComposite>
                        <feGaussianBlur stdDeviation="0.2" result="shadow"></feGaussianBlur>
                        <feMerge>
                            <feMergeNode in="shadow"></feMergeNode>
                            <feMergeNode in="snow-covered"></feMergeNode>
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#snow-drift)">
                    <text
                        className='text text-1'
                        x="50%"
                        y="20"
                        textAnchor="middle"
                        fill="white"
                        stroke="white"
                        strokeWidth="0.7"
                        fontSize="20"
                        fontFamily="crhistmas"
                    >
                        {text}
                    </text>
                    <image x="0" y="30" width="100" height="100" href="/src/assets/images/fb3ebf19f7550bc9af54ac3be9b92e9.png" />
                </g>
            </svg>
        </div>
    );
};

export default SnowText;

