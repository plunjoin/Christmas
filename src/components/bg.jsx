import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

function Snowfall() {
    const canvasRef = useRef(null);
    const appRef = useRef(null);

    useEffect(() => {
        async function initApp() {
            if (!canvasRef.current) return;

            appRef.current = new PIXI.Application();
            await appRef.current.init({
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 0x00000,
                backgroundAlpha: 0,
                transparent: true
            });
            try {
                canvasRef.current.appendChild(appRef.current.canvas);
            } catch (error) {
                console.log(appRef.current);
            }

            const snowflakes = [];
            const totalSnowflakes = 100;

            for (let i = 0; i < totalSnowflakes; i++) {
                const snowflake = new PIXI.Graphics();
                snowflake.beginFill(0xFFFFFF);
                snowflake.drawCircle(0, 0, Math.random() * 3 + 1);
                snowflake.endFill();
                snowflake.x = Math.random() * appRef.current.renderer.width;
                snowflake.y = Math.random() * appRef.current.renderer.height;
                snowflake.speed = Math.random() * 2 + 1;
                appRef.current.stage.addChild(snowflake);
                snowflakes.push(snowflake);
            }

            appRef.current.ticker.add(() => {
                snowflakes.forEach(snowflake => {
                    snowflake.y += snowflake.speed;
                    if (snowflake.y > appRef.current.renderer.height) {
                        snowflake.y = 0;
                        snowflake.x = Math.random() * appRef.current.renderer.width;
                    }
                });
            });
        }

        initApp();

        return () => {
            if (appRef.current) {
                appRef.current;
            }
        };
    }, []);

    return <div ref={canvasRef} style={{ width: '100%', height: '100%' }} className='snow-container' />;
}

export default Snowfall;