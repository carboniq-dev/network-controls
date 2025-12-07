import { RuleKey, RuleDefinition } from "./types";

export const RULE_KEYS = ["exfiltration", "new-device", "login-failures"] as const;

export const MOCK_RULES: Record<RuleKey, RuleDefinition> = {
    [RULE_KEYS[0]]: {
        key: RULE_KEYS[0],
        title: "Issue 1",
        description: "This is a description for Issue 1.",
        enabled: true,
        severity: "critical",
        scope: "Scope A",
        tenant: "Tenant A",
        conditions: ["Condition 1", "Condition 2", "Condition 3"],
        exceptions: ["Exception 1", "Exception 2", "Exception 3"],
        actions: ["Action 1", "Action 2", "Action 3"],
        sidebar: {
            name: "Issue 1",
            tenantLabel: "Tenant A",
            statusText: "Active",
            lastChangeText: "Last change 2d ago",
        },
    },

    [RULE_KEYS[1]]: {
        key: RULE_KEYS[1],
        title: "Issue 2",
        description: "This is a description for Issue 2.",
        enabled: true,
        severity: "medium",
        scope: "Scope B",
        tenant: "Tenant A",
        conditions: ["Condition 1", "Condition 2", "Condition 3"],
        exceptions: ["Exception 1", "Exception 2", "Exception 3"],
        actions: ["Action 1", "Action 2", "Action 3"],
        sidebar: {
            name: "Issue 2",
            tenantLabel: "Tenant A",
            statusText: "Active",
            lastChangeText: "Last change 5d ago",
        },
    },

    [RULE_KEYS[2]]: {
        key: RULE_KEYS[2],
        title: "Issue 3",
        description: "This is a description for Issue 3.",
        enabled: false,
        severity: "high",
        scope: "Scope C",
        tenant: "Tenant A",
        conditions: ["Condition 1", "Condition 2", "Condition 3"],
        exceptions: ["Exception 1", "Exception 2", "Exception 3"],
        actions: ["Action 1", "Action 2", "Action 3"],
        sidebar: {
            name: "Issue 3",
            tenantLabel: "Tenant A",
            statusText: "Inactive",
            lastChangeText: "Last change 1d ago",
        },
    },
};
