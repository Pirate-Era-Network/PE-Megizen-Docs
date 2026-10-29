import React from "react";
import styles from "./DetailsTable.module.css";

export function DetailsTable(details: Record<React.ReactNode, React.ReactNode>) {
    return (
        <div className="entryboxBody">
            <tbody>
                {Object.entries(details).map(([key, value]) => (
                    <tr key={key} className={styles.entryRow}>
                        <td className={styles.entryKey}>{key.replace(/\_/g, " ")}</td>
                        <td>{value}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}
