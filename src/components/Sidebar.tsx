import { FunctionalComponent } from "preact";
import { RuleListItem } from "./RuleListItem";
import { RuleDefinition, RuleKey } from "../types";

interface SidebarProps {
    rules: RuleDefinition[];
    activeKey: RuleKey;
    onSelect: (key: RuleKey) => void;
}

export const Sidebar: FunctionalComponent<SidebarProps> = ({
    rules,
    activeKey,
    onSelect,
}) => {
    return (
        <aside class="flex min-h-0 flex-col gap-2 bg-slate-900 px-3 py-3 text-xs text-slate-200 shadow-inner">
            <div class="mb-1 flex items-center justify-between text-[11px] text-slate-400">
                <span class="text-[11px] font-semibold uppercase tracking-[0.15em]">
                    Rule Set
                </span>
                <span>{rules.length} rules</span>
            </div>
            <div class="flex-1 space-y-2 overflow-auto pb-2">
                {rules.map((rule) => (
                    <RuleListItem
                        key={rule.key}
                        name={rule.sidebar.name}
                        severity={rule.severity}
                        tenantLabel={rule.sidebar.tenantLabel}
                        statusText={rule.sidebar.statusText}
                        lastChangeText={rule.sidebar.lastChangeText}
                        active={rule.key === activeKey}
                        onClick={() => onSelect(rule.key)}
                    />
                ))}
            </div>
        </aside>
    );
};
