import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'; // Import SelectChangeEvent

interface Program {
    id: string;
    programName: string;
}

interface ProgramSelectionProps {
    programs: Program[];
    value: any;
    onChange?: (event: SelectChangeEvent<any>) => void;
}

const ProgramSelection: React.FC<ProgramSelectionProps> = ({ programs, value, onChange }) => {
    return (
        <>
            {programs && programs.length > 0 ? (
                <Select autoComplete='' className="w-[381px]" value={value} name="program" onChange={onChange}>
                    {programs.map((program) => (
                        <MenuItem key={program.id} value={program.programName}>
                            {program.programName}
                        </MenuItem>
                    ))}
                </Select>
            ) : (
                <div>Programs are not available!</div>
            )}
        </>
    );
};

export default ProgramSelection;