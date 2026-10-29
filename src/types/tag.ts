import React from "react";

export type Tag = {
    name: React.ReactNode;
    returns: React.ReactNode;
    description?: React.ReactNode;
    examples?: React.ReactNode[];
    mechanism?: React.ReactNode;
};
