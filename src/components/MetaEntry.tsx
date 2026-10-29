import { Tag } from "@site/src/types/tag";
import React from "react";

export function MetaEntry({ children }: { children: React.ReactNode }) {
    return <div className="entrybox">{children}</div>;
}

export function EntryHeader({ children }: { children: React.ReactNode }) {
    return <div className="entryboxHeader">{children}</div>;
}
