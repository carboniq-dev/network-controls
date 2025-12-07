import { FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { RuleDefinition } from "../types";
import { RuleBlock } from "./RuleBlock";
import { Button } from "./Button";

interface RuleLogicCardProps {
    rule: RuleDefinition;
}

export const RuleLogicCard: FunctionalComponent<RuleLogicCardProps> = ({ rule }) => {
    const conditionOptions = rule.conditions;
    const exceptionOptions = rule.exceptions ?? [];
    const actionOptions = rule.actions;

    const [conditionRows, setConditionRows] = useState<string[]>(
        conditionOptions.length ? [...conditionOptions] : [""],
    );
    const [exceptionRows, setExceptionRows] = useState<string[]>(
        exceptionOptions.length ? [...exceptionOptions] : [""],
    );
    const [actionRows, setActionRows] = useState<string[]>(
        actionOptions.length ? [...actionOptions] : [""],
    );

    useEffect(() => {
        setConditionRows(
            rule.conditions.length ? [...rule.conditions] : [""],
        );
        setExceptionRows(
            (rule.exceptions && rule.exceptions.length
                ? [...rule.exceptions]
                : [""]),
        );
        setActionRows(rule.actions.length ? [...rule.actions] : [""]);
    }, [rule.key]);

    const updateRow =
        (setter: (updater: (prev: string[]) => string[]) => void) =>
            (index: number, value: string) =>
                setter((prev) => prev.map((v, i) => (i === index ? value : v)));

    const addRow =
        (setter: (updater: (prev: string[]) => string[]) => void) => () =>
            setter((prev) => [...prev, ""]);

    const removeRow =
        (setter: (updater: (prev: string[]) => string[]) => void) =>
            (index: number) =>
                setter((prev) => prev.filter((_, i) => i !== index));

    return (
        <div class="flex flex-col gap-3 rounded-xl bg-white p-3 text-xs text-slate-800 shadow-sm md:p-4">
            <header class="mb-1 flex items-start justify-between gap-3">
                <div class="flex">
                    <div class="text-[11px] text-slate-600 md:text-xs mr-4">
                        Tenant:{" "}
                        <span class="font-semibold text-slate-900">{rule.tenant}</span>
                    </div>
                    <div class="text-[11px] text-slate-600 md:text-xs">
                        Scope:{" "}
                        <span class="font-semibold text-slate-900">{rule.scope}</span>
                    </div>
                </div>
                <span class="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                    {rule.severity}
                </span>
            </header>

            <div class="space-y-3">
                <RuleBlock
                    title="If true"
                    options={conditionOptions}
                    values={conditionRows}
                    placeholder="Select a condition"
                    onChange={updateRow(setConditionRows)}
                    onAdd={addRow(setConditionRows)}
                    onRemove={removeRow(setConditionRows)}
                />

                {exceptionOptions.length > 0 && (
                    <RuleBlock
                        title="Except if"
                        options={exceptionOptions}
                        values={exceptionRows}
                        placeholder="Select an exception"
                        onChange={updateRow(setExceptionRows)}
                        onAdd={addRow(setExceptionRows)}
                        onRemove={removeRow(setExceptionRows)}
                    />
                )}

                <RuleBlock
                    title="Then"
                    options={actionOptions}
                    values={actionRows}
                    placeholder="Select an action"
                    onChange={updateRow(setActionRows)}
                    onAdd={addRow(setActionRows)}
                    onRemove={removeRow(setActionRows)}
                />
            </div>

            <div class="mt-2 flex flex-wrap gap-2">
                <Button variant="primary">Simulate rule impact</Button>
                <Button variant="danger">
                    {rule.enabled ? "Disable rule" : "Enable rule"}
                </Button>
                <Button>Duplicate</Button>
                <Button>Apply</Button>
            </div>
        </div>
    );
};
