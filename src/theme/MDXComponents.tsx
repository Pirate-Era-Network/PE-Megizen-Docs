import { DetailsTable } from "@site/src/components/DetailsTable";
import { ObjectType } from "@site/src/components/ObjectType";
import { MetaEntry, EntryHeader } from "@site/src/components/MetaEntry";
import MDXComponents from "@theme-original/MDXComponents";
import { Event } from "../components/Event";
import { Hoverable } from "../components/Hoverable";

export default {
    // Re-use the default mapping
    ...MDXComponents,

    MetaEntry,
    EntryHeader,

    Event,

    Hoverable,

    DetailsTable,

    ObjectType,
};
