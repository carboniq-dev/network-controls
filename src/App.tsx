import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { TopBar } from "./components/TopBar";
import { TenantBar } from "./components/TenantBar";
import { Sidebar } from "./components/Sidebar";
import { RuleHeader } from "./components/RuleHeader";
import { RuleLogicCard } from "./components/RuleLogicCard";
import { Button } from "./components/Button";
import { MOCK_RULES } from "./mock";
import { RuleKey } from "./types";

const ruleArray = Object.values(MOCK_RULES);

export const App: FunctionalComponent = () => {
    const [selectedKey, setSelectedKey] = useState<RuleKey>("exfiltration");
    const [tenantSelection, setTenantSelection] = useState<string>(
        "Tenant A",
    );
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const activeRule = MOCK_RULES[selectedKey];

    return (
        <div class="flex min-h-screen flex-col bg-slate-100 text-slate-900">
            <TopBar />
            <TenantBar
                value={tenantSelection}
                onChange={(event) =>
                    setTenantSelection((event.currentTarget as HTMLSelectElement).value)
                }
            />

            <div class="flex min-h-0 flex-1">
                <div class="hidden min-h-0 md:block md:w-[280px] md:border-r md:border-slate-800 md:bg-slate-900">
                    <Sidebar
                        rules={ruleArray}
                        activeKey={selectedKey}
                        onSelect={setSelectedKey}
                    />
                </div>

                <main class="flex min-h-0 flex-1 flex-col overflow-hidden px-3 py-3 md:px-4 md:py-4">
                    <div class="flex items-center justify-between gap-2 pb-2 md:hidden">
                        <div class="text-sm font-semibold text-slate-800">Rule details</div>
                        <Button
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span class="text-base leading-none">☰</span>
                            <span>Open rules</span>
                        </Button>
                    </div>

                    <div class="flex-1 overflow-auto">
                        <RuleHeader rule={activeRule} />

                        <div class="grid gap-3 lg:grid-cols-[minmax(0,3fr),minmax(260px,2fr)]">
                            <RuleLogicCard rule={activeRule} />
                        </div>
                    </div>
                </main>

                {sidebarOpen && (
                    <div class="fixed inset-0 z-40 flex md:hidden">
                        <div class="flex h-full w-72 max-w-full flex-col bg-slate-900 shadow-xl">
                            <div class="flex items-center justify-between border-b border-slate-700 px-3 py-2">
                                <span class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-200">
                                    Rule Set
                                </span>
                                <Button onClick={() => setSidebarOpen(false)}>
                                    Close
                                </Button>
                            </div>
                            <div class="flex-1 min-h-0 overflow-hidden">
                                <Sidebar
                                    rules={ruleArray}
                                    activeKey={selectedKey}
                                    onSelect={(key) => {
                                        setSelectedKey(key);
                                        setSidebarOpen(false);
                                    }}
                                />
                            </div>
                        </div>
                        <Button class="flex-1 bg-black/40" onClick={() => setSidebarOpen(false)} />
                    </div>
                )}
            </div>
        </div>
    );
};
