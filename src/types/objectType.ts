import { Tag } from "@site/src/types/tag";
import React from "react";

export type ObjectType = {
    name: React.ReactNode;
    src?: string;
    prefix?: React.ReactNode;
    baseType?: React.ReactNode;
    implementations?: React.ReactNode[];
    identityFormat?: React.ReactNode;
    description?: React.ReactNode;
    seeAlso: React.ReactNode[];
};
