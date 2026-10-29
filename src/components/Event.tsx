import { Hoverable } from "./Hoverable";

export type EventFlags = {
    cancellable?: boolean;
    hasLocation?: boolean;
    hasPlayer?: boolean | string;
}

export type EventProps = EventFlags & React.HTMLAttributes<HTMLDivElement>;

// export type EventFlag = "cancellable" | "hasPlayer" | "hasLocation";

const EVENT_FLAG_DATA: Record<keyof EventFlags, (value: EventFlags[keyof EventFlags]) => { text?: React.ReactNode; description: React.ReactNode; color?: string }> = {
    cancellable: () => ({
        text: "🚫 Cancellable",
        description: (
            <>
                This event is <a target="_blank" href="https://meta.denizenscript.com/Docs/Languages/Script%20Event%20Cancellation"><strong>cancellable</strong></a>. This adds:
                <ul>
                    <li>
                        The <code>{"<context.cancelled>"}</code> tag
                    </li>
                    <li>
                        The <code>- determine 'cancelled'</code> command
                    </li>
                    <li>
                        The <code>{"cancelled:<true/false>"}</code> event switch
                    </li>
                    <li>
                        The <code>'ignorecancelled:true'</code> event switch
                    </li>
                </ul>
            </>
        ),
        color: "var(--ifm-color-danger)",
    }),
    hasLocation: () => ({
        text: "📍 Has Location",
        description: (
            <>
                This event has a <a target="_blank" href="https://meta.denizenscript.com/Docs/ObjectTypes/LocationTag"><strong>location</strong></a>. This adds:
                <ul>
                    <li>
                        The <code>in:<a target="_blank" href="https://meta.denizenscript.com/Docs/ObjectTypes/AreaObject">{"<area>"}</a></code> event switch
                    </li>
                </ul>
            </>
        ),
        color: "var(--ifm-color-success)",
    }),
    hasPlayer: (value) => ({
        text: "👤 Has Player" + (value === true ? "" : " (Sometimes)"),
        description: (
            <>
                {value === true ? "This event always has a player." : value.toString().trim() + " "} This adds:
                <ul>
                    <li>
                        The <a target="_blank" href="https://meta.denizenscript.com/Docs/Tags/Player"><code>{"<player>"}</code></a> tag link to get the linked player.
                    </li>
                    <li>
                        The <a target="_blank" href="https://meta.denizenscript.com/Docs/Languages/Script%20Event%20Switches"><code>{"flag:<flag>"}</code></a> event switch
                    </li>
                    <li>
                        The <a target="_blank" href="https://meta.denizenscript.com/Docs/Languages/Script%20Event%20Switches"><code>{"permission:<node>"}</code></a> event switch
                    </li>
                </ul>
            </>
        ),
        color: "var(--ifm-color-warning)",
    }),
};

export function Event({ cancellable, hasLocation, hasPlayer, ...props }: EventProps) {
    const flags = { cancellable, hasLocation, hasPlayer };
    return (
        <div {...props} style={{
            padding: "0.5em",
        }}>
            <div style={{
                display: "flex",
                gap: "0.5em",
                flexWrap: "wrap",
                overflow: "visible",
            }}>
                {Object.entries(flags).map(([flag, value]) => {
                    if (!value) {
                        return null;
                    }
                    const data = EVENT_FLAG_DATA[flag](value);
                    return (
                        <Hoverable key={flag} hover={data.description}>
                            <span key={flag} className="badge" style={{ backgroundColor: data.color }}>
                                {data.text ?? ""}
                            </span>
                        </Hoverable>
                    );
                })}
            </div>
        </div>
    );
}
