import React, {useCallback} from 'react';
import './Tube.css';


function Tube({tube, isSelected, onSelect}) {
    const onSelectCallback = useCallback(() => onSelect(tube.id), [tube, onSelect]);
    return (
        <div className="tube"
             style={{borderColor: isSelected ? 'black' : 'gainsboro'}}
             onClick={onSelectCallback}>
            <div className="liquid" style={{backgroundColor: tube.colors[3]}}/>
            <div className="liquid" style={{backgroundColor: tube.colors[2]}}/>
            <div className="liquid" style={{backgroundColor: tube.colors[1]}}/>
            <div className="liquid" style={{backgroundColor: tube.colors[0]}}/>
        </div>
    );
}

export default Tube;
