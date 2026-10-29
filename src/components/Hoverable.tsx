export type HoverableProps = {
    hover: React.ReactNode;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

import styles from "./Hoverable.module.css";

export function Hoverable({ hover, children, ...props }: HoverableProps) {
    return (
        <div {...props} className={styles.hoverable}>
            <span className={styles.content}>
                {children}
            </span>
            <div className={styles.hovered}>
                {hover}
            </div>
        </div>
    )
}
