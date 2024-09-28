import React from 'react';
import { generateWidgets } from '../../utils/generateWidgets';

interface AnalyzingVoiceProps {
    setWidgets: (widgets: React.ReactNode[]) => void;
    setConfigState: (configState: boolean) => void;
}

const AnalyzingVoice = (props: AnalyzingVoiceProps) => {

    const onConfigGeneration = () => {
        localStorage.setItem('config', "");
        props.setConfigState(false);
    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
            <div>
            <h1>Analyzing Voice</h1>
            <p>This component is responsible for analyzing voice data.</p>
            <button onClick={onConfigGeneration}></button>
            </div>
        </div>
    );
};

export default AnalyzingVoice;