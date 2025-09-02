import React, { useEffect, useState } from 'react';



function ProgressBar() {
    const [completion, setCompletion] = useState(0);
    const [direc, setDirec] = useState(true);
    const [bgColor, setbgColor] = useState('blue');

    useEffect(() => { 
        if (completion < 20) { setbgColor('red') }
        else if (completion >= 20 && completion < 45) {
            setbgColor('orange')
        }
        else {
            setbgColor('blue')
        }
    }, [completion])

    useEffect(() => {
        // if (completion >= 100) return;

        let timm = setInterval(() => {
            
            setCompletion((prev) => {
                if (prev >= 100) {
                    setDirec(false)
                    // clearInterval(timm);
                    
                    return 95
                }
                if (prev <= 0) {
                    setDirec(true)
                    // clearInterval(timm);

                    return 5
                }
                return direc ? prev + 5: prev-5
            });
        }, 500);
        return () => clearInterval(timm);
    }, [direc]);


    return (
        <div className="progress-container" style={{ border: "1px solid black", height: 20,overflow:"hidden", borderRadius: 10 }}>
            <div style={{ width: `${completion}%`, height: 20, backgroundColor: `${bgColor}`, color: "white", display: "flex", justifyContent: "center", transition: "width 0.5s ease-in-out" }}>`{completion}%{direc}`</div>
            {/* Implement the ProgressBar component logic here */}
           

        </div>
    );
}

export default ProgressBar;
