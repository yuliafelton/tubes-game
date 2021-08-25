import React, {useCallback} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import Tube from '../Tube/Tube';
import {addTube, setSelectedTube, setTubes} from "../../store/appSlice";
import {spillToTubes} from "../../utils/tubeUtils";
import AddButton from "../AddButton/AddButton";

function App() {
    const tubes = useSelector(state => state.appSlice.tubes);
    const selectedTube = useSelector(state => state.appSlice.selectedTube);
    const dispatch = useDispatch();

    const handleSelectTube = useCallback((id) => {
        if (selectedTube !== null && selectedTube !== id) {
            const newTubes = spillToTubes(tubes, selectedTube, id);
            dispatch(setSelectedTube(null));
            dispatch(setTubes(newTubes));
        } else {
            dispatch(setSelectedTube(id));
        }
    }, [tubes, dispatch, selectedTube]);

    const handleAddButton = useCallback(() => {
        dispatch(addTube({
            colors: [],
            id: 6
        }));
    }, [dispatch]);

    return (
        <div className="app-container">
            <div className="tube-container">
            {tubes.map((tube) => (
                <Tube key={tube.id}
                      tube={tube}
                      isSelected={selectedTube === tube.id}
                      onSelect={handleSelectTube}
                />
            ))}
            </div>
            <AddButton onAdd={handleAddButton} />
        </div>
    );
}

export default App;
