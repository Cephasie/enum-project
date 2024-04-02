import React from 'react';
import { MenuItem, Select } from '@mui/material';

interface Program {
    id: string;
    programName: string;
}

interface ProgramSelectionProps {
    programs: Program[];
    value: any;
    onChange?: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const ProgramSelection: React.FC<ProgramSelectionProps> = ({ programs, value, onChange }) => {
    return (
        <>
            {programs && programs.length > 0 ? (
                <Select autoComplete='' className="w-[381px]" value={value} name="program" onChange={onChange}>
                    {programs.map((program) => (
                        <MenuItem key={program.id} value={program.programName}> {/* Render the program's name as the value */}
                            {program.programName}
                        </MenuItem>
                    ))}
                </Select>
            ) : (
                <div>No Programs Available yet...</div>
            )}
        </>
    );
};

export default ProgramSelection;