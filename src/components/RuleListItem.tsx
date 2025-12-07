import { FunctionalComponent } from "preact";
import { SeverityBadge } from "./SeverityBadge";
import { RuleSeverity } from "../types";

export interface RuleListItemProps {
    name: string;
    severity: RuleSeverity;
    tenantLabel: string;
    statusText: string;
    lastChangeText: string;
    active: boolean;
    onClick: () => void;
}

export const RuleListItem: FunctionalComponent<RuleListItemProps> = ({
    name,
    severity,
    tenantLabel,
    statusText,
    lastChangeText,
    active,
    onClick,
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            class={[
                "group w-full rounded-xl border px-3 py-3 text-left transition",
                "flex flex-col gap-2 bg-slate-800/70",
                "hover:border-slate-500 hover:bg-slate-800",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                active
                    ? "border-blue-400 bg-slate-900 shadow-md"
                    : "border-transparent",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div class="flex items-center justify-between">
                <span class="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                    {tenantLabel}
                </span>
                <SeverityBadge severity={severity} />
            </div>

            <div class="leading-tight">
                <div class="text-[13px] font-semibold text-slate-50">{name}</div>
            </div>

            <div class="flex items-center justify-between text-[11px] text-slate-400">
                <span>{statusText}</span>
                <span>{lastChangeText}</span>
            </div>
        </button>
    );
};
