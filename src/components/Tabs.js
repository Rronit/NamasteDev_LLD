import React, { useState } from 'react';
import './styles.css'

function Tabs({ tabs }) {
    if (!tabs.length) {
        return <>{"No tabs available"}</>
    }
    const [selected, setSelected] = useState(tabs[0]);

    function changeTab(title) {
        setSelected(tabs.find(temp => temp.title === title));
    }
   

    return (
        <div>
            {/* Implement the Tabs component logic here */}
            <div style={{ display: "flex", justifyContent: "space-evenly"  }}>
                {tabs.map((tab,idx) => {
                    return <div key={tab.title} style={{ padding: "10px 40px", cursor: "pointer", borderBottom: selected.title === tab.title ? "3px solid blue" : undefined }} onClick={() => changeTab(tab.title)}>{tab.title ? tab.title : `Tab ${idx+1}`}</div>
                })}
            </div>
            <div style={{ marginTop: 20 }}>{selected.content ? selected.content : "No content available"}</div>
           
        </div>
    );
}

export default Tabs;
