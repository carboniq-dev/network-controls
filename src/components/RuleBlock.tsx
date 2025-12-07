import { FunctionalComponent, TargetedEvent } from "preact";
import { Button } from "./Button";

interface RuleBlockProps {
    title: string;
    options: string[];
    values: string[];
    onChange: (index: number, value: string) => void;
    onAdd: () => void;
    onRemove: (index: number) => void;
    placeholder?: string;
}

export const RuleBlock: FunctionalComponent<RuleBlockProps> = ({
    title,
    options,
    values,
    onChange,
    onAdd,
    onRemove,
    placeholder,
}) => {
    return (
        <section class="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
            <div class="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {title}
            </div>

            <div class="space-y-2">
                {values.map((value, index) => (
                    <div key={index} class="flex items-center gap-2">
                        <select
                            class="w-full md:w-[280px] lg:w-[320px] rounded-md border 
                            border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-800 
                            shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 
                            focus:ring-blue-500/40 disabled:cursor-not-allowed disabled:bg-slate-100"
                            value={value}
                            onChange={(event: TargetedEvent<HTMLSelectElement>) =>
                                onChange(
                                    index,
                                    (event.currentTarget as HTMLSelectElement).value,
                                )
                            }
                        >
                            {placeholder && (
                                <option value="">
                                    {placeholder}
                                </option>
                            )}
                            {options.map((opt, i) => (
                                <option key={i} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>

                        {values.length > 1 && (
                            <Button onClick={() => onRemove(index)} >X</Button>
                        )}
                    </div>
                ))}
            </div>

            <div class="mt-2">
                <Button onClick={onAdd}>
                    <span class="text-xs pr-2">+</span>
                    <span>Add line</span>
                </Button>
            </div>
        </section>
    );
};
