import { FunctionalComponent } from "preact";
import { RuleSeverity } from "../types";

interface SeverityBadgeProps {
    severity: RuleSeverity;
}

export const SeverityBadge: FunctionalComponent<SeverityBadgeProps> = ({ severity }) => {
    const base =
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide";

    const map: Record<RuleSeverity, string> = {
        critical: "bg-red-700 text-red-100",
        high: "bg-orange-600 text-orange-100",
        medium: "bg-amber-600 text-amber-100",
    };

    return (
        <span class={[base, map[severity]].join(" ")}>
            {severity === "critical"
                ? "Critical"
                : severity === "high"
                    ? "High"
                    : "Medium"}
        </span>
    );
};
