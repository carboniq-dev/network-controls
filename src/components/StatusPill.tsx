import { FunctionalComponent } from "preact";

interface StatusPillProps {
    enabled: boolean;
}

export const StatusPill: FunctionalComponent<StatusPillProps> = ({ enabled }) => {
    const base =
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium";
    const on =
        "bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-200";
    const off =
        "bg-red-100 text-red-700 border border-red-200 dark:bg-red-900/40 dark:text-red-200";

    return (
        <span class={[base, enabled ? on : off].join(" ")}>
            <span>{enabled ? "Enabled" : "Disabled"}</span>
        </span>
    );
};
