import { FunctionalComponent } from "preact";

export const TopBar: FunctionalComponent = () => {
    return (
        <header class="flex h-14 items-center justify-between bg-slate-900 px-4 text-slate-50 shadow-md">
            <div class="flex items-center gap-3">
                <div class="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold">
                    NR
                </div>
                <div class="text-sm font-semibold tracking-tight">
                    Network Rules
                </div>
            </div>
            <div class="flex items-center gap-3 text-xs text-slate-200">
                <span>Admin</span>
            </div>
        </header>
    );
};
