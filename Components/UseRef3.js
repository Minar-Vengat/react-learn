import React, {  useRef } from 'react';

function UseRef3() {
    const colorParagraph = useRef(null);
    const getRandomHexColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const styleParagraph = () => {
        const randomColor = getRandomHexColor();
        colorParagraph.current.style.color = randomColor;
    };
    return (
        <div style={{
            marginBottom:'50px'
        }}>
            <hr />
            <p ref={colorParagraph}>RANDOM COLOR</p>
            <button onClick={styleParagraph}>Click me!</button>
        </div>
    );
}
export default UseRef3;