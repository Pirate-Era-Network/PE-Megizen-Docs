import React from "react";
export type EntryBoxProps = {
    header: React.ReactNode;
    children: React.ReactNode;
};

export function EntryBox({ header, children }: EntryBoxProps) {
    return (
        <div className="entrybox">
            <div className="entryboxHeader">{header}</div>
            <div className="entryboxBody">{children}</div>
        </div>
    );
}
