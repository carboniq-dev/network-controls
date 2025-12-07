import { FunctionalComponent } from "preact";
import { StatusPill } from "./StatusPill";
import { RuleDefinition } from "../types";

interface RuleHeaderProps {
    rule: RuleDefinition;
}

export const RuleHeader: FunctionalComponent<RuleHeaderProps> = ({ rule }) => {
    return (
        <div class="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div class="space-y-1">
                <h1 class="text-lg font-semibold tracking-tight text-slate-900">
                    {rule.title}
                </h1>
                <p class="max-w-2xl text-xs text-slate-600 md:text-sm">
                    {rule.description}
                </p>
            </div>
            <StatusPill enabled={rule.enabled} />
        </div>
    );
};
