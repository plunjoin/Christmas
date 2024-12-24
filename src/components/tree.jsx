import React from 'react';
import '../css/tree.css'; // 引入CSS文件

const Tree = () => {
    return (
        <div className='tree-container'>
            {/* 添加圆角五角星SVG */}
            {/* <svg className="blinking-star" width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glassEffect">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
                        <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lighting-color="#ffffff" result="specOut">
                            <fePointLight x="-5000" y="-10000" z="20000" />
                        </feSpecularLighting>
                        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                    </filter>
                </defs>
                <path d="M12 2L14.09 8.26L20.18 8.27L15.64 11.97L17.73 18.18L12 14.54L6.27 18.18L8.36 11.97L3.82 8.27L9.91 8.26L12 2Z" fill="gold" stroke="gold" stroke-width="1" stroke-linejoin="round" filter="url(#glassEffect)" opacity="0.9"/>
            </svg> */}
        </div>
    );
};

export default Tree;