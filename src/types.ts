export type RuleKey = "exfiltration" | "new-device" | "login-failures";

export type RuleSeverity = "critical" | "high" | "medium";

export interface RuleHistoryEntry {
    title: string;
    meta: string;
}

export interface RuleSidebarMeta {
    name: string;
    tenantLabel: string;
    statusText: string;
    lastChangeText: string;
}

export interface RuleDefinition {
    key: RuleKey;
    title: string;
    description: string;
    enabled: boolean;
    severity: RuleSeverity;
    scope: string;
    tenant: string;
    conditions: string[];
    exceptions?: string[];
    actions: string[];
    sidebar: RuleSidebarMeta;
}
