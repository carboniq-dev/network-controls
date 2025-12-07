import { FunctionalComponent, GenericEventHandler } from "preact";

interface TenantBarProps {
    value: string;
    onChange: GenericEventHandler<HTMLSelectElement>;
}

export const TenantBar: FunctionalComponent<TenantBarProps> = ({
    value,
    onChange,
}) => {
    return (
        <div class="flex flex-col gap-2 border-b border-slate-200 bg-slate-100 
                    px-4 py-2 text-xs text-slate-700 md:flex-row md:items-center md:justify-between">
            <div class="flex flex-wrap items-center gap-2">
                <select
                    class="rounded-md border border-slate-300 bg-white px-2 py-1 text-xs 
                           shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 
                           focus:ring-blue-500/40"
                    value={value}
                    onChange={onChange}
                >
                    <option>Tenant A</option>
                    <option>Tenant B</option>
                    <option>Tenant C</option>
                </select>
            </div>
        </div>
    );
};
