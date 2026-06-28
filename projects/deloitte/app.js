const useCases = [
  {
    id: "UC-01",
    shortName: "Retail Underwriting",
    name: "Retail Credit Underwriting",
    businessLine: "Lending",
    aiType: "Predictive",
    riskSourceType: "Decision risk",
    regulatoryClassification: "High",
    inherentRiskScore: 88,
    residualRiskScore: 59,
    affectedCustomers: 420000,
    exposureBase: 1300,
    thirdPartyProvider: "Internal Stack",
    thirdPartyDependency: "Low",
    scenarioCount: 4,
    scenarioIds: ["discriminatory_lending", "model_drift", "explainability_failure", "audit_trail_failure"],
    coordinates: { x: 17, y: 24 },
    stageFocus: "Validation",
    domainFocus: "Fairness",
    validationComplete: 82,
    fairnessGap: 6.1,
    explanationCoverage: 81,
    privacyIncidents: 1,
    promptPassRate: 99,
    unresolvedDriftAlerts: 4,
    containmentHours: 34,
    auditCompleteness: 91,
    humanReviewCoverage: 78,
    riskDrivers: [
      "Proxy-feature discrimination in approval thresholds",
      "Opaque decline rationale under adverse action requests",
      "Economic bias drift during macro stress"
    ],
    controlHooks: [
      "Pre-launch fairness backtesting across protected cohorts",
      "Counterfactual explanation on every decline",
      "Quarterly conduct challenge in AI Governance Committee"
    ],
    owners: ["Head of Retail Credit", "Model Risk Office", "Conduct & Compliance"],
    evidence: ["Fairness test report", "Decline explanation archive", "Committee challenge minutes"]
  },
  {
    id: "UC-02",
    shortName: "Fraud Scoring",
    name: "Real-time Card Fraud Scoring",
    businessLine: "Fraud",
    aiType: "Predictive",
    riskSourceType: "Model risk",
    regulatoryClassification: "High",
    inherentRiskScore: 82,
    residualRiskScore: 52,
    affectedCustomers: 1800000,
    exposureBase: 950,
    thirdPartyProvider: "Payments Risk Cloud",
    thirdPartyDependency: "Medium",
    scenarioCount: 3,
    scenarioIds: ["model_drift", "vendor_failure", "decision_friction"],
    coordinates: { x: 34, y: 34 },
    stageFocus: "Monitoring",
    domainFocus: "Model Risk",
    validationComplete: 86,
    fairnessGap: 3.2,
    explanationCoverage: 76,
    privacyIncidents: 0,
    promptPassRate: 100,
    unresolvedDriftAlerts: 7,
    containmentHours: 19,
    auditCompleteness: 93,
    humanReviewCoverage: 65,
    riskDrivers: [
      "Model degradation from payment behavior shifts",
      "False positive surge creating customer friction",
      "Third-party feature dependency outages"
    ],
    controlHooks: [
      "Weekly drift threshold monitoring",
      "Real-time override gate for high-value transactions",
      "Fallback rules engine with tested rollback"
    ],
    owners: ["Fraud Analytics Lead", "Payments Operations", "Model Validation"],
    evidence: ["Drift dashboard logs", "Fallback trigger evidence", "Fraud-loss reconciliation file"]
  },
  {
    id: "UC-03",
    shortName: "AML Prioritization",
    name: "AML Alert Prioritization Engine",
    businessLine: "AML/KYC",
    aiType: "Hybrid",
    riskSourceType: "Process risk",
    regulatoryClassification: "High",
    inherentRiskScore: 86,
    residualRiskScore: 58,
    affectedCustomers: 760000,
    exposureBase: 1100,
    thirdPartyProvider: "Sanctions Analytics Vendor",
    thirdPartyDependency: "High",
    scenarioCount: 4,
    scenarioIds: ["model_drift", "audit_trail_failure", "decision_friction", "data_leakage"],
    coordinates: { x: 56, y: 24 },
    stageFocus: "Monitoring",
    domainFocus: "Model Risk",
    validationComplete: 79,
    fairnessGap: 2.8,
    explanationCoverage: 72,
    privacyIncidents: 1,
    promptPassRate: 97,
    unresolvedDriftAlerts: 8,
    containmentHours: 29,
    auditCompleteness: 88,
    humanReviewCoverage: 84,
    riskDrivers: [
      "Backlog concentration can suppress suspicious activity",
      "Low traceability in alert suppression decisions",
      "Analyst override inconsistency"
    ],
    controlHooks: [
      "Scenario-based challenge sampling",
      "Tamper-evident analyst override log",
      "Escalation trigger for unexplained suppression clusters"
    ],
    owners: ["Financial Crime Ops", "AML Compliance", "Internal Audit Liaison"],
    evidence: ["Alert suppression registry", "Escalation incident pack", "Audit lineage record"]
  },
  {
    id: "UC-04",
    shortName: "GenAI Service Agent",
    name: "GenAI Customer Service Assistant",
    businessLine: "Customer Service",
    aiType: "GenAI",
    riskSourceType: "Data risk",
    regulatoryClassification: "Medium",
    inherentRiskScore: 79,
    residualRiskScore: 50,
    affectedCustomers: 2300000,
    exposureBase: 540,
    thirdPartyProvider: "External Foundation Model",
    thirdPartyDependency: "High",
    scenarioCount: 4,
    scenarioIds: ["hallucinated_guidance", "data_leakage", "prompt_injection", "toxicity_event"],
    coordinates: { x: 76, y: 37 },
    stageFocus: "Monitoring",
    domainFocus: "GenAI",
    validationComplete: 74,
    fairnessGap: 4.7,
    explanationCoverage: 68,
    privacyIncidents: 2,
    promptPassRate: 92,
    unresolvedDriftAlerts: 5,
    containmentHours: 15,
    auditCompleteness: 86,
    humanReviewCoverage: 71,
    riskDrivers: [
      "Hallucinated policy answers to customers",
      "Sensitive account context leakage through prompt chains",
      "Prompt injection via hostile user inputs"
    ],
    controlHooks: [
      "Grounded response policy with source-lock",
      "Prompt DLP redaction and output classifier",
      "Human-in-the-loop escalation for high-impact intents"
    ],
    owners: ["Service Platform Owner", "Data Privacy Office", "Operational Risk"],
    evidence: ["Prompt firewall logs", "Escalation queue evidence", "Hallucination benchmark report"]
  },
  {
    id: "UC-05",
    shortName: "Policy Copilot",
    name: "Compliance Policy GenAI Copilot",
    businessLine: "Compliance",
    aiType: "GenAI",
    riskSourceType: "Regulatory & conduct risk",
    regulatoryClassification: "High",
    inherentRiskScore: 77,
    residualRiskScore: 46,
    affectedCustomers: 0,
    exposureBase: 460,
    thirdPartyProvider: "External Foundation Model",
    thirdPartyDependency: "High",
    scenarioCount: 3,
    scenarioIds: ["hallucinated_guidance", "audit_trail_failure", "prompt_injection"],
    coordinates: { x: 69, y: 61 },
    stageFocus: "Validation",
    domainFocus: "Explainability",
    validationComplete: 88,
    fairnessGap: 1.4,
    explanationCoverage: 89,
    privacyIncidents: 0,
    promptPassRate: 95,
    unresolvedDriftAlerts: 2,
    containmentHours: 18,
    auditCompleteness: 94,
    humanReviewCoverage: 92,
    riskDrivers: [
      "Unsupported policy interpretations in regulator-facing contexts",
      "Weak source citation for generated obligations",
      "Missing evidence chain for policy updates"
    ],
    controlHooks: [
      "Mandatory citation and clause traceability",
      "Dual review by compliance counsel + model risk",
      "Immutable output archive for supervisory review"
    ],
    owners: ["Chief Compliance Office", "Legal Advisory", "AI PMO"],
    evidence: ["Cited response ledger", "Review sign-off evidence", "Versioned policy trace record"]
  },
  {
    id: "UC-06",
    shortName: "Document Intelligence",
    name: "Operations Document Intelligence",
    businessLine: "Operations",
    aiType: "Hybrid",
    riskSourceType: "Process risk",
    regulatoryClassification: "Medium",
    inherentRiskScore: 71,
    residualRiskScore: 43,
    affectedCustomers: 390000,
    exposureBase: 300,
    thirdPartyProvider: "Document AI Partner",
    thirdPartyDependency: "Medium",
    scenarioCount: 3,
    scenarioIds: ["data_leakage", "model_drift", "audit_trail_failure"],
    coordinates: { x: 46, y: 68 },
    stageFocus: "Development",
    domainFocus: "Privacy",
    validationComplete: 90,
    fairnessGap: 1.1,
    explanationCoverage: 84,
    privacyIncidents: 1,
    promptPassRate: 98,
    unresolvedDriftAlerts: 1,
    containmentHours: 11,
    auditCompleteness: 95,
    humanReviewCoverage: 74,
    riskDrivers: [
      "Extraction errors in critical customer documents",
      "Improper retention of sensitive identity fields",
      "Workflow bypass for manual corrections"
    ],
    controlHooks: [
      "Field-level confidence threshold gating",
      "PII masking and retention auto-enforcement",
      "Reconciliation queue for low-confidence outputs"
    ],
    owners: ["COO Office", "Data Governance", "Enterprise Architecture"],
    evidence: ["Field-quality benchmark", "Retention compliance logs", "Manual reconciliation register"]
  },
  {
    id: "UC-07",
    shortName: "SME Pricing",
    name: "SME Pricing Recommendation Model",
    businessLine: "Lending",
    aiType: "Predictive",
    riskSourceType: "Decision risk",
    regulatoryClassification: "Medium",
    inherentRiskScore: 75,
    residualRiskScore: 49,
    affectedCustomers: 126000,
    exposureBase: 780,
    thirdPartyProvider: "Internal Stack",
    thirdPartyDependency: "Low",
    scenarioCount: 3,
    scenarioIds: ["discriminatory_lending", "explainability_failure", "model_drift"],
    coordinates: { x: 23, y: 53 },
    stageFocus: "Development",
    domainFocus: "Fairness",
    validationComplete: 81,
    fairnessGap: 5.2,
    explanationCoverage: 74,
    privacyIncidents: 0,
    promptPassRate: 100,
    unresolvedDriftAlerts: 3,
    containmentHours: 27,
    auditCompleteness: 87,
    humanReviewCoverage: 69,
    riskDrivers: [
      "Profit-optimized recommendations with conduct leakage",
      "Weak counterfactual reasoning for rejected offers",
      "Model behavior drift across regional portfolios"
    ],
    controlHooks: [
      "Profit-based discrimination score monitoring",
      "Explainability clause in pricing committee approvals",
      "Monthly stress test under macro scenarios"
    ],
    owners: ["SME Product Head", "Pricing Committee", "Model Risk Office"],
    evidence: ["Pricing fairness scorecard", "Counterfactual pack", "Stress testing memo"]
  },
  {
    id: "UC-08",
    shortName: "Sanctions Triage",
    name: "Sanctions Screening Triage",
    businessLine: "AML/KYC",
    aiType: "Hybrid",
    riskSourceType: "Regulatory & conduct risk",
    regulatoryClassification: "High",
    inherentRiskScore: 85,
    residualRiskScore: 57,
    affectedCustomers: 880000,
    exposureBase: 990,
    thirdPartyProvider: "Sanctions Analytics Vendor",
    thirdPartyDependency: "High",
    scenarioCount: 3,
    scenarioIds: ["model_drift", "audit_trail_failure", "vendor_failure"],
    coordinates: { x: 58, y: 50 },
    stageFocus: "Validation",
    domainFocus: "Model Risk",
    validationComplete: 77,
    fairnessGap: 2.3,
    explanationCoverage: 79,
    privacyIncidents: 0,
    promptPassRate: 99,
    unresolvedDriftAlerts: 6,
    containmentHours: 23,
    auditCompleteness: 89,
    humanReviewCoverage: 88,
    riskDrivers: [
      "Potential miss rate increase under geopolitical shock",
      "Traceability gaps in case suppression decisions",
      "Vendor model update opacity"
    ],
    controlHooks: [
      "Dual-threshold triage challenge",
      "Vendor release checkpoint in approval gate",
      "Enhanced evidence packet for regulator review"
    ],
    owners: ["Sanctions Unit", "Vendor Management", "Compliance Testing"],
    evidence: ["Miss-rate trend report", "Vendor attestation records", "Regulator response pack"]
  }
];

const scenarioLibrary = {
  discriminatory_lending: {
    id: "discriminatory_lending",
    name: "Discriminatory lending outcome",
    probability: { internal: 0.09, expert: 0.12, external: 0.07 },
    losses: { direct: 16.2, regulatory: 12.5, remediation: 5.1, customer: 4.4, reputation: 7.4 }
  },
  model_drift: {
    id: "model_drift",
    name: "Model drift and performance decay",
    probability: { internal: 0.13, expert: 0.11, external: 0.09 },
    losses: { direct: 11.8, regulatory: 4.2, remediation: 5.8, customer: 3.9, reputation: 3.1 }
  },
  explainability_failure: {
    id: "explainability_failure",
    name: "Explainability failure in customer challenge",
    probability: { internal: 0.06, expert: 0.09, external: 0.05 },
    losses: { direct: 3.8, regulatory: 6.7, remediation: 2.9, customer: 2.6, reputation: 4.1 }
  },
  audit_trail_failure: {
    id: "audit_trail_failure",
    name: "Audit trail incompleteness",
    probability: { internal: 0.07, expert: 0.1, external: 0.08 },
    losses: { direct: 2.1, regulatory: 7.8, remediation: 3.4, customer: 1.2, reputation: 3.8 }
  },
  decision_friction: {
    id: "decision_friction",
    name: "Decision friction and false positive escalation",
    probability: { internal: 0.15, expert: 0.13, external: 0.1 },
    losses: { direct: 7.5, regulatory: 1.8, remediation: 4.1, customer: 6.4, reputation: 2.7 }
  },
  hallucinated_guidance: {
    id: "hallucinated_guidance",
    name: "Hallucinated GenAI guidance",
    probability: { internal: 0.11, expert: 0.14, external: 0.12 },
    losses: { direct: 5.9, regulatory: 6.1, remediation: 5.7, customer: 4.8, reputation: 6.6 }
  },
  data_leakage: {
    id: "data_leakage",
    name: "Sensitive data leakage",
    probability: { internal: 0.08, expert: 0.11, external: 0.13 },
    losses: { direct: 4.5, regulatory: 10.6, remediation: 8.3, customer: 5.1, reputation: 8.8 }
  },
  prompt_injection: {
    id: "prompt_injection",
    name: "Prompt injection compromise",
    probability: { internal: 0.1, expert: 0.12, external: 0.11 },
    losses: { direct: 3.9, regulatory: 4.2, remediation: 6.8, customer: 2.2, reputation: 5.6 }
  },
  toxicity_event: {
    id: "toxicity_event",
    name: "Toxic output conduct incident",
    probability: { internal: 0.07, expert: 0.09, external: 0.08 },
    losses: { direct: 1.8, regulatory: 3.2, remediation: 2.4, customer: 3.6, reputation: 5.2 }
  },
  vendor_failure: {
    id: "vendor_failure",
    name: "Third-party model service failure",
    probability: { internal: 0.09, expert: 0.08, external: 0.1 },
    losses: { direct: 6.7, regulatory: 2.2, remediation: 7.9, customer: 2.1, reputation: 3.3 }
  }
};

const lifecycleStages = [
  {
    id: "intake",
    name: "Use-Case Intake",
    goal: "Decide whether the AI use case should exist and under what risk tier.",
    keyRisks: ["Unclear purpose", "Missing owner", "Prohibited use overlap"],
    mandatoryControls: ["Use-case registration", "Regulatory classification", "Owner assignment"],
    owners: ["Business Sponsor", "AI PMO", "Compliance"],
    artifacts: ["Use-case intake record", "Risk-tier rationale", "Legal basis memo"],
    evidenceLinks: ["Approval gate checklist", "Stakeholder sign-off"],
    approvalGate: "Risk Committee pre-screen",
    gateOwner: "AI Governance Committee",
    goCriteria: ["Business purpose documented", "Risk tier confirmed", "Named accountable owner"],
    noGoConditions: ["Prohibited-use trigger identified", "Owner undefined", "Legal basis unresolved"]
  },
  {
    id: "data",
    name: "Data Sourcing",
    goal: "Ensure lawful, high-quality, and lineage-traceable data input.",
    keyRisks: ["PII over-collection", "Consent mismatch", "Training bias"],
    mandatoryControls: ["Lineage mapping", "PII tagging", "Bias scan"],
    owners: ["Data Governance", "Privacy Office", "Data Engineering"],
    artifacts: ["Data lineage map", "Consent matrix", "Dataset bias report"],
    evidenceLinks: ["Retention policy binding", "Access log extract"],
    approvalGate: "Data governance sign-off",
    gateOwner: "Data Governance Office",
    goCriteria: ["Lineage map complete", "Sensitive data tagged", "Bias scan passed"],
    noGoConditions: ["Consent mismatch unresolved", "Cross-border transfer control missing", "PII classification gaps"]
  },
  {
    id: "development",
    name: "Model Development",
    goal: "Build model logic with fairness, explainability, and robustness by design.",
    keyRisks: ["Proxy bias", "Overfitting", "Non-robust prompts"],
    mandatoryControls: ["Feature challenge", "Interpretability design", "Secure coding"],
    owners: ["Model Owner", "ML Engineering", "Responsible AI Lead"],
    artifacts: ["Design specification", "Training experiment log", "Fairness benchmark"],
    evidenceLinks: ["Model card draft", "Prompt safety test evidence"],
    approvalGate: "Model design review",
    gateOwner: "Model Owner + Responsible AI Lead",
    goCriteria: ["Feature challenge complete", "Explainability method selected", "Security threat model approved"],
    noGoConditions: ["Proxy-feature bias unresolved", "Prompt attack test fail", "Documentation incomplete"]
  },
  {
    id: "validation",
    name: "Validation",
    goal: "Independently challenge model assumptions and control sufficiency.",
    keyRisks: ["Validation scope gaps", "Weak challenger rigor", "Uncaptured edge cases"],
    mandatoryControls: ["Independent challenge", "Stress testing", "Counterfactual review"],
    owners: ["Model Risk Office", "Conduct Risk", "Validation Team"],
    artifacts: ["Validation report", "Stress pack", "Control gap register"],
    evidenceLinks: ["Issue remediation tracker", "Residual risk rating"],
    approvalGate: "Model Risk Committee",
    gateOwner: "Model Risk Office",
    goCriteria: ["Independent validation passed", "Fairness testing complete", "Residual risk accepted"],
    noGoConditions: ["Critical fairness issue open", "Stress scenario fail", "Challenge findings unresolved"]
  },
  {
    id: "deployment",
    name: "Approval & Deployment",
    goal: "Gate release by evidence completeness and monitored fallback readiness.",
    keyRisks: ["Premature release", "Weak rollback", "Insufficient controls in production"],
    mandatoryControls: ["Release gate", "Fallback testing", "Control attestation"],
    owners: ["Release Manager", "Technology Risk", "Business Owner"],
    artifacts: ["Deployment checklist", "Fallback test result", "Control attestation"],
    evidenceLinks: ["Go-live approval log", "Rollback runbook"],
    approvalGate: "Production readiness board",
    gateOwner: "Release Manager + Technology Risk",
    goCriteria: ["Evidence package complete", "Fallback tested", "Escalation contacts active"],
    noGoConditions: ["Rollback not tested", "Critical control not attested", "High-risk exception not approved"]
  },
  {
    id: "execution",
    name: "Decision Execution",
    goal: "Ensure human oversight and policy-consistent decisions in live operations.",
    keyRisks: ["Automation bias", "Unlogged overrides", "Unexplained denials"],
    mandatoryControls: ["HITL trigger", "Decision logging", "Exception triage"],
    owners: ["Operations Manager", "First-line Risk", "Compliance Ops"],
    artifacts: ["Decision trace logs", "Override register", "Customer explainability file"],
    evidenceLinks: ["Exception dashboard", "Escalation evidence"],
    approvalGate: "Operational control review",
    gateOwner: "Operations Manager",
    goCriteria: ["Decision logs active", "HITL triggers configured", "Exception queue staffed"],
    noGoConditions: ["Customer-impacting GenAI confidence below threshold without human review", "Override logging disabled", "SLA breach unresolved"]
  },
  {
    id: "monitoring",
    name: "Monitoring & Incident Response",
    goal: "Detect drift, incidents, and control failure before losses scale.",
    keyRisks: ["Undetected drift", "Late incident response", "Control decay"],
    mandatoryControls: ["Drift thresholds", "Incident playbooks", "Monthly challenge"],
    owners: ["MLOps", "Operational Risk", "Security"],
    artifacts: ["Monitoring dashboard", "Incident chronology", "Challenge minutes"],
    evidenceLinks: ["Containment SLA record", "Root-cause action plan"],
    approvalGate: "Monthly governance review",
    gateOwner: "Operational Risk",
    goCriteria: ["Drift thresholds calibrated", "Incident playbook tested", "Challenge cadence on-track"],
    noGoConditions: ["Critical drift unresolved", "Incident backlog above appetite", "Containment SLA repeatedly breached"]
  },
  {
    id: "retirement",
    name: "Retirement / Archive",
    goal: "Retire models safely with reproducible decisions and retained evidence.",
    keyRisks: ["Unmanaged model sunset", "Data retention breach", "Lost evidence chain"],
    mandatoryControls: ["Retirement checklist", "Archive policy", "Post-mortem review"],
    owners: ["AI PMO", "Records Management", "Internal Audit"],
    artifacts: ["Retirement decision memo", "Archived model card", "Evidence package"],
    evidenceLinks: ["Archive integrity certificate", "Regulatory retention mapping"],
    approvalGate: "Closure committee",
    gateOwner: "AI PMO + Records Management",
    goCriteria: ["Retention schedule mapped", "Evidence archive complete", "Post-mortem approved"],
    noGoConditions: ["Decision reproducibility not verified", "Retention controls incomplete", "Outstanding audit issues open"]
  }
];

const controlDomains = [
  {
    id: "fairness",
    label: "Fairness & Conduct",
    controls: [
      {
        id: "fair-1",
        name: "Profit-Based Discrimination Monitor",
        description: "Tracks profitability-adjusted treatment disparity by segment and flags hidden conduct bias.",
        mitigatedRisks: ["Hidden discrimination", "Pricing bias drift"],
        lifecycleStages: ["Development", "Validation", "Monitoring"],
        ownerRoles: ["Model Risk", "Conduct Risk", "Lending Owner"],
        outputEvidence: ["Disparity scorecard", "Escalation logs", "Committee decisions"]
      },
      {
        id: "fair-2",
        name: "Counterfactual Decline Explainability",
        description: "Generates action-oriented, customer-level explanations for rejected decisions.",
        mitigatedRisks: ["Black-box denials", "Complaint escalation"],
        lifecycleStages: ["Execution", "Monitoring"],
        ownerRoles: ["Business Owner", "Compliance"],
        outputEvidence: ["Adverse-action explanation archive", "Complaint defense pack"]
      },
      {
        id: "fair-3",
        name: "Bias Escalation Trigger Matrix",
        description: "Predefined thresholds trigger mandatory challenge and controlled rollback.",
        mitigatedRisks: ["Delayed response to fairness deterioration"],
        lifecycleStages: ["Monitoring", "Incident Response"],
        ownerRoles: ["AI Governance Committee", "Operational Risk"],
        outputEvidence: ["Trigger run logs", "Containment timeline"]
      }
    ]
  },
  {
    id: "explainability",
    label: "Explainability",
    controls: [
      {
        id: "exp-1",
        name: "SHAP + Local Explanation Package",
        description: "Produces global and case-level interpretability artifacts for regulated outcomes.",
        mitigatedRisks: ["Opaque model behavior", "Regulator challenge"],
        lifecycleStages: ["Development", "Validation"],
        ownerRoles: ["Model Owner", "Model Risk"],
        outputEvidence: ["Model explanation pack", "Feature influence report"]
      },
      {
        id: "exp-2",
        name: "Explanation Stability Testing",
        description: "Measures whether explanations remain consistent across similar inputs over time.",
        mitigatedRisks: ["Unstable rationale", "Control illusion"],
        lifecycleStages: ["Validation", "Monitoring"],
        ownerRoles: ["Validation Team", "MLOps"],
        outputEvidence: ["Stability benchmark", "Drift-linked explanation alerts"]
      },
      {
        id: "exp-3",
        name: "Regulator-Ready Rationale Registry",
        description: "Stores replayable decision rationale linked to policy clauses and review approvals.",
        mitigatedRisks: ["Inability to reconstruct decisions"],
        lifecycleStages: ["Execution", "Archive"],
        ownerRoles: ["Compliance", "Records Management"],
        outputEvidence: ["Decision rationale ledger", "Clause linkage records"]
      }
    ]
  },
  {
    id: "privacy",
    label: "Privacy & Secure Collaboration",
    controls: [
      {
        id: "priv-1",
        name: "Prompt DLP & Sensitive Field Redaction",
        description: "Screens prompts/outputs for sensitive fields and blocks policy-violating payloads.",
        mitigatedRisks: ["Data leakage", "Unauthorized disclosure"],
        lifecycleStages: ["Execution", "Monitoring"],
        ownerRoles: ["Security", "Privacy Office"],
        outputEvidence: ["Blocked prompt log", "DLP event dashboard"]
      },
      {
        id: "priv-2",
        name: "Differential Privacy for Model Training",
        description: "Controls privacy budget and limits memorization risk in sensitive datasets.",
        mitigatedRisks: ["Model inversion", "Identity leakage"],
        lifecycleStages: ["Data", "Development"],
        ownerRoles: ["Data Science", "Privacy Engineering"],
        outputEvidence: ["Privacy budget ledger", "Training compliance attestation"]
      },
      {
        id: "priv-3",
        name: "Federated Collaboration Guardrails",
        description: "Enables cross-entity model improvement while minimizing raw data sharing.",
        mitigatedRisks: ["Cross-border data transfer breaches"],
        lifecycleStages: ["Data", "Monitoring"],
        ownerRoles: ["Data Governance", "Legal"],
        outputEvidence: ["Federated participation report", "Cross-border control evidence"]
      }
    ]
  },
  {
    id: "genai",
    label: "GenAI-Specific Controls",
    controls: [
      {
        id: "gen-1",
        name: "Grounded Response Policy",
        description: "Restricts GenAI outputs to approved knowledge stores and policy repositories.",
        mitigatedRisks: ["Hallucination", "Policy inconsistency"],
        lifecycleStages: ["Validation", "Execution"],
        ownerRoles: ["GenAI Platform Team", "Compliance"],
        outputEvidence: ["Grounding pass-rate report", "Source attribution logs"]
      },
      {
        id: "gen-2",
        name: "Prompt Injection Defense Stack",
        description: "Combines input sanitization, classifier checks, and response policies to resist attacks.",
        mitigatedRisks: ["Prompt injection", "Tool misuse"],
        lifecycleStages: ["Development", "Monitoring"],
        ownerRoles: ["Security Engineering", "Platform Owner"],
        outputEvidence: ["Pen-test record", "Injection attempt telemetry"]
      },
      {
        id: "gen-3",
        name: "Toxicity and Conduct Output Filter",
        description: "Screens generated language for prohibited conduct and escalates exceptions.",
        mitigatedRisks: ["Toxic output", "Customer harm"],
        lifecycleStages: ["Execution", "Monitoring"],
        ownerRoles: ["Customer Conduct", "Operations"],
        outputEvidence: ["Filter hit log", "Escalation case files"]
      }
    ]
  },
  {
    id: "audit",
    label: "Auditability & Traceability",
    controls: [
      {
        id: "aud-1",
        name: "Tamper-Evident Decision Chain",
        description: "Records each model decision, override, and approval in immutable sequence.",
        mitigatedRisks: ["Missing audit trail", "Unprovable oversight"],
        lifecycleStages: ["Execution", "Monitoring", "Archive"],
        ownerRoles: ["Internal Audit", "Records Office", "Technology Risk"],
        outputEvidence: ["Audit-chain ledger", "Integrity verification logs"]
      },
      {
        id: "aud-2",
        name: "Machine-Readable Evidence Catalog",
        description: "Standardizes evidence artifacts for board packs and supervisory requests.",
        mitigatedRisks: ["Manual evidence gaps", "Slow regulator response"],
        lifecycleStages: ["Validation", "Deployment", "Monitoring"],
        ownerRoles: ["AI PMO", "Compliance Reporting"],
        outputEvidence: ["Evidence index", "Regulator response SLA metrics"]
      },
      {
        id: "aud-3",
        name: "Incident Root-Cause Recorder",
        description: "Tracks incident chronology from detection through containment and remediation closure.",
        mitigatedRisks: ["Repeated incidents", "Weak remediation follow-through"],
        lifecycleStages: ["Monitoring"],
        ownerRoles: ["Operational Risk", "Security", "Model Owner"],
        outputEvidence: ["RCA dossier", "Closure verification pack"]
      }
    ]
  },
  {
    id: "governance",
    label: "Governance & Human Oversight",
    controls: [
      {
        id: "gov-1",
        name: "Human-in-the-Loop Trigger Policy",
        description: "Defines non-negotiable points where human review is mandatory before decision execution.",
        mitigatedRisks: ["Automation bias", "Unsupervised high-impact decisions"],
        lifecycleStages: ["Execution", "Monitoring"],
        ownerRoles: ["Business Owner", "Operational Risk"],
        outputEvidence: ["HITL trigger logs", "Review completion evidence"]
      },
      {
        id: "gov-2",
        name: "AI Governance Committee Cadence",
        description: "Monthly committee challenge of high-risk models with explicit decision rights.",
        mitigatedRisks: ["Diffuse accountability", "Control blind spots"],
        lifecycleStages: ["Intake", "Validation", "Monitoring"],
        ownerRoles: ["Chief Risk Officer", "AI PMO", "Compliance"],
        outputEvidence: ["Committee minutes", "Action tracker"]
      },
      {
        id: "gov-3",
        name: "Three-Lines Escalation Matrix",
        description: "Maps event thresholds to first-line action, second-line challenge, and third-line audit review.",
        mitigatedRisks: ["Escalation delay", "Role ambiguity"],
        lifecycleStages: ["All lifecycle stages"],
        ownerRoles: ["First Line", "Second Line", "Internal Audit"],
        outputEvidence: ["Escalation logs", "Role accountability matrix"]
      }
    ]
  }
];

const operatingRoles = [
  {
    id: "board",
    name: "Board Risk Committee",
    governanceLayer: "Oversight",
    defenseLayer: "3rd line oversight",
    lifecycleOwner: "Portfolio oversight",
    responsibilitySummary: "Sets risk appetite, approves escalation thresholds, and receives board-level AI posture reports.",
    decisionRights: ["Approve AI risk appetite", "Demand remediation acceleration", "Escalate unresolved material incidents"],
    escalationTriggers: ["Residual EAL exceeds threshold", "Repeated fairness breaches", "Regulatory finding"],
    ownedArtifacts: ["Board AI risk dashboard", "Risk appetite statement", "Quarterly governance memo"]
  },
  {
    id: "aigc",
    name: "AI Governance Committee",
    governanceLayer: "Oversight",
    defenseLayer: "2nd line challenge",
    lifecycleOwner: "Intake + validation gates",
    responsibilitySummary: "Owns cross-functional governance decisions and enforces lifecycle gate consistency.",
    decisionRights: ["Approve high-risk use-case progression", "Mandate control enhancements", "Pause deployments"],
    escalationTriggers: ["Validation fail", "Control decay alerts", "Unresolved model drift"],
    ownedArtifacts: ["Committee challenge minutes", "Gate decision registry", "Control exception log"]
  },
  {
    id: "mrm",
    name: "Model Risk Office",
    governanceLayer: "Independent Challenge",
    defenseLayer: "2nd line challenge",
    lifecycleOwner: "Validation + monitoring",
    responsibilitySummary: "Performs independent validation, challenge testing, and residual risk ratings.",
    decisionRights: ["Issue model risk ratings", "Block release pending remediation", "Trigger stress re-tests"],
    escalationTriggers: ["Drift threshold breach", "Poor explainability stability", "Fairness deterioration"],
    ownedArtifacts: ["Validation reports", "Residual risk ratings", "Stress testing pack"]
  },
  {
    id: "data",
    name: "Data Governance & Privacy",
    governanceLayer: "Control Assurance",
    defenseLayer: "2nd line challenge",
    lifecycleOwner: "Data sourcing + retention",
    responsibilitySummary: "Maintains data lineage, privacy guardrails, and cross-border data compliance controls.",
    decisionRights: ["Approve data use conditions", "Reject non-compliant datasets", "Mandate retention controls"],
    escalationTriggers: ["DLP breach", "Consent mismatch", "Cross-border transfer issue"],
    ownedArtifacts: ["Lineage maps", "Privacy impact assessment", "Retention compliance logs"]
  },
  {
    id: "business",
    name: "Business AI Owners",
    governanceLayer: "Execution",
    defenseLayer: "1st line execution",
    lifecycleOwner: "Use-case execution",
    responsibilitySummary: "Accountable for model outcomes, operational controls, and frontline response.",
    decisionRights: ["Approve production configuration", "Initiate rollback", "Assign remediation owners"],
    escalationTriggers: ["Containment SLA breach", "High complaint volume", "Operational anomalies"],
    ownedArtifacts: ["Operational playbooks", "Exception register", "Performance scorecards"]
  },
  {
    id: "audit",
    name: "Internal Audit",
    governanceLayer: "Assurance",
    defenseLayer: "3rd line assurance",
    lifecycleOwner: "Independent evidence review",
    responsibilitySummary: "Tests control design and operating effectiveness with regulator-grade traceability.",
    decisionRights: ["Rate control effectiveness", "Issue findings", "Escalate unresolved issues"],
    escalationTriggers: ["Evidence incompleteness", "Repeat findings", "Committee non-compliance"],
    ownedArtifacts: ["Audit findings", "Control testing scripts", "Closure validation reports"]
  },
  {
    id: "pmo",
    name: "AI PMO / Execution Office",
    governanceLayer: "Coordination",
    defenseLayer: "1st line execution",
    lifecycleOwner: "Roadmap delivery",
    responsibilitySummary: "Coordinates roadmap execution, dependencies, and regulator-readiness documentation.",
    decisionRights: ["Prioritize implementation sequencing", "Coordinate control dependency closure", "Escalate blockers"],
    escalationTriggers: ["Roadmap slippage", "Control dependency conflict", "Evidence backlog"],
    ownedArtifacts: ["Roadmap tracker", "Dependency map", "Readiness report"]
  }
];

const roadmapPhases = [
  {
    id: "phase0",
    name: "Phase 0: Baseline & Inventory",
    horizon: "0-3 months",
    objectives: ["Establish AI inventory and risk-tiering baseline", "Define board-level risk appetite", "Launch governance mobilization"],
    actions: ["Create use-case registry", "Run inherent risk scoring", "Stand up AI Governance Committee cadence"],
    owners: ["AI PMO", "Chief Risk Office", "Business Sponsors"],
    deliverables: ["Enterprise AI inventory", "Tiering heatmap", "Initial policy baseline"],
    metrics: ["100% use-case registration", "High-risk use-case identification coverage >95%"],
    dependencies: ["Data lineage visibility", "Executive sponsorship"],
    maturityScore: 35,
    regulatoryAlignmentNotes: ["NIST Govern function established", "EU AI risk-tier mapping started"]
  },
  {
    id: "phase1",
    name: "Phase 1: Control Baseline",
    horizon: "3-9 months",
    objectives: ["Deploy core fairness, explainability, privacy, and audit controls", "Introduce validation standards for high-risk models"],
    actions: ["Implement control library MVP", "Define evidence schema", "Activate escalation matrix"],
    owners: ["Model Risk Office", "Data Governance", "Security"],
    deliverables: ["Control baseline pack", "Validation playbook", "Evidence catalog v1"],
    metrics: ["High-risk model validation completion >80%", "Evidence completeness >85%"],
    dependencies: ["Cross-team role clarity", "MLOps instrumentation"],
    maturityScore: 57,
    regulatoryAlignmentNotes: ["NIST Map/Measure in operation", "China GenAI controls mapped"]
  },
  {
    id: "phase2",
    name: "Phase 2: Embedded Governance",
    horizon: "9-18 months",
    objectives: ["Embed controls into release and operations workflows", "Scale monitoring and incident response coverage"],
    actions: ["Automate gate checks", "Integrate drift and conduct alerts", "Institutionalize monthly challenge"],
    owners: ["Business Owners", "Operational Risk", "AI PMO"],
    deliverables: ["Embedded governance workflow", "Incident playbooks", "Board reporting pack"],
    metrics: ["Containment time <24h for severe incidents", "Residual EAL reduction >30%"],
    dependencies: ["Stable data pipelines", "Committee decision discipline"],
    maturityScore: 74,
    regulatoryAlignmentNotes: ["EU AI Act control evidence maturity", "Fed-style model monitoring expectations met"]
  },
  {
    id: "phase3",
    name: "Phase 3: Scale & Optimize",
    horizon: "18-36 months",
    objectives: ["Optimize control effectiveness by business line", "Enable regulator-ready real-time reporting"],
    actions: ["Deploy advanced quantification", "Benchmark control ROI", "Institutionalize continuous improvement loop"],
    owners: ["Board Risk Committee", "Chief Risk Office", "Internal Audit"],
    deliverables: ["Enterprise governance cockpit", "Stress-loss simulation engine", "Regulator response automation"],
    metrics: ["Regulator readiness score >90", "Audit finding closure rate >95%"],
    dependencies: ["Phase 2 evidence quality", "Budget for scale automation"],
    maturityScore: 89,
    regulatoryAlignmentNotes: ["NIST Manage fully operational", "Cross-jurisdiction reporting harmonized"]
  }
];

const regulatoryTimeline = [
  {
    title: "NIST AI RMF",
    detail: "Govern-Map-Measure-Manage mapped across all lifecycle gates."
  },
  {
    title: "EU AI Act",
    detail: "Risk-tiered obligations reflected in high-risk validation and evidence controls."
  },
  {
    title: "China GenAI Measures",
    detail: "Generative model content, security, and traceability controls embedded."
  }
];

const regulationTraceability = [
  {
    id: "nist",
    label: "NIST AI RMF",
    timeline: "Outcome-based governance profile used as the cross-lifecycle operating baseline.",
    risks: ["Fragmented governance outcomes", "Inconsistent control application", "Unmeasured lifecycle risk"],
    controls: ["Use-case registration + risk tiering", "Independent validation + stress testing", "Incident response playbooks"],
    owners: ["AI Governance Committee", "Model Risk Office", "Operational Risk"],
    evidence: ["Lifecycle gate checklist", "Residual risk ratings", "Containment SLA chronology"],
    stages: ["Intake", "Validation", "Monitoring", "Retirement"],
    kpis: ["Residual EAL trend", "Control coverage by stage", "Containment SLA adherence"]
  },
  {
    id: "eu-ai-act",
    label: "EU AI Act",
    timeline: "2 Feb 2025: prohibited practices and AI literacy; 2 Aug 2025: GPAI obligations; 2 Aug 2026: broader high-risk applicability.",
    risks: ["High-risk system non-compliance", "GPAI governance gap", "Insufficient literacy and oversight"],
    controls: ["High-risk validation gates", "GPAI vendor evidence attestation", "Traceable documentation + human oversight"],
    owners: ["Compliance Office", "Vendor Management", "Business AI Owners"],
    evidence: ["High-risk technical documentation", "GPAI provider attestation records", "Human review logs"],
    stages: ["Intake", "Validation", "Deployment", "Monitoring"],
    kpis: ["Evidence completeness", "High-risk gate pass rate", "Outstanding compliance findings"]
  },
  {
    id: "china-genai",
    label: "China GenAI Measures",
    timeline: "Service obligations emphasize lawful, secure, and accountable generative AI operations.",
    risks: ["Content security incidents", "Data leakage in GenAI flow", "Weak accountability of generated outputs"],
    controls: ["Prompt DLP and grounding controls", "Toxicity/output safety filters", "Audit-chain traceability for generated decisions"],
    owners: ["GenAI Platform Owner", "Security", "Data Privacy Office"],
    evidence: ["Prompt firewall logs", "Safety classifier records", "Traceability archive"],
    stages: ["Development", "Execution", "Monitoring"],
    kpis: ["Prompt defense pass rate", "GenAI incident count", "Output traceability coverage"]
  }
];

const decisionRightsMatrix = [
  { action: "Approve new high-risk use case", board: "A", aigc: "A", mrm: "C", business: "C", audit: "-" },
  { action: "Challenge fairness exception", board: "C", aigc: "A", mrm: "A", business: "C", audit: "C" },
  { action: "Override model output in operations", board: "-", aigc: "C", mrm: "C", business: "A", audit: "-" },
  { action: "Pause production deployment", board: "C", aigc: "A", mrm: "A", business: "C", audit: "C" },
  { action: "Retire use case and archive evidence", board: "C", aigc: "A", mrm: "C", business: "A", audit: "A" },
  { action: "Accept residual risk exception", board: "A", aigc: "A", mrm: "C", business: "C", audit: "C" }
];

const state = {
  riskView: "business",
  riskBusiness: "All",
  quantView: "single",
  selectedUseCaseId: useCases[0].id,
  selectedScenarioId: useCases[0].scenarioIds[0],
  sliders: {
    fairness: 72,
    explainability: 68,
    privacy: 70,
    monitoring: 66,
    governance: 74
  },
  selectedLifecycle: lifecycleStages[0].id,
  selectedControlDomain: controlDomains[0].id,
  selectedControlId: controlDomains[0].controls[0].id,
  operatingView: "committee",
  selectedRoleId: operatingRoles[0].id,
  selectedRoadmapPhase: roadmapPhases[0].id,
  selectedRegulation: regulationTraceability[0].id,
  dashboardView: "inherent",
  dashboardFilters: {
    business: "All",
    aiType: "All",
    stage: "All",
    domain: "All"
  }
};

const sectionSpineDefaults = {
  hero: {
    section: "Opening Context",
    risk: "AI risk already exists in production banking decisions and cannot be treated as hypothetical.",
    control: "Establish unified governance baseline before scaling additional AI deployment.",
    owner: "Board Risk Committee / AI Governance Committee",
    evidence: "Enterprise AI inventory and high-risk use-case register."
  },
  "risk-universe": {
    section: "Risk Universe",
    risk: "Risk originates across data, model, decision, process, third-party, and regulatory layers.",
    control: "Use-case tiering and source-level risk taxonomy.",
    owner: "Business AI Owners / Model Risk Office",
    evidence: "Risk map and residual scorecards."
  },
  quantification: {
    section: "Quantification Engine",
    risk: "Residual exposure remains unclear without scenario-weighted economic quantification.",
    control: "EAL and stress-loss modeling with control-effectiveness weighting.",
    owner: "Model Risk Office / Chief Risk Office",
    evidence: "Waterfall decomposition and portfolio residual loss table."
  },
  lifecycle: {
    section: "Lifecycle Governance",
    risk: "Controls fail when lifecycle stages lack explicit go and no-go criteria.",
    control: "Approval gates, fail conditions, and stage-level accountability.",
    owner: "AI Governance Committee / Stage Gate Owners",
    evidence: "Gate checklist and challenge sign-off."
  },
  "control-stack": {
    section: "Control Stack",
    risk: "Isolated controls cannot demonstrate institutional trustworthiness.",
    control: "Connected fairness, explainability, privacy, GenAI, auditability, and oversight controls.",
    owner: "Control Domain Owners",
    evidence: "Control-specific artifacts with linked lifecycle coverage."
  },
  "operating-model": {
    section: "Operating Model",
    risk: "Ambiguous decision rights delay escalation and weaken governance.",
    control: "Decision-rights matrix with approve, challenge, override, pause, retire actions.",
    owner: "Board / AI Governance Committee / Business Owners / Audit",
    evidence: "Decision logs and role accountability matrix."
  },
  roadmap: {
    section: "Roadmap",
    risk: "Phase-only planning hides dependency risk and regulator-readiness gaps.",
    control: "Critical path sequencing plus regulation-to-control traceability.",
    owner: "AI PMO / Chief Risk Office",
    evidence: "Milestone tracker, dependency map, compliance trace matrix."
  },
  "executive-dashboard": {
    section: "Executive Dashboard",
    risk: "Portfolio concentration can undermine acceptable model-level residual scores.",
    control: "Portfolio monitoring with concentration and residual loss thresholds.",
    owner: "Board Risk Committee / CRO",
    evidence: "KPI cockpit, leaderboard, concentration chart, readiness score."
  }
};

function formatCurrencyM(value) {
  return `$${value.toFixed(1)}M`;
}

function round(value, digits = 1) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function ragStatus(score) {
  if (score >= 70) return { label: "Red", className: "rag-red" };
  if (score >= 45) return { label: "Amber", className: "rag-amber" };
  return { label: "Green", className: "rag-green" };
}

function currentControlEffectiveness() {
  const preventive = (state.sliders.fairness + state.sliders.privacy) / 200;
  const detective = state.sliders.monitoring / 100;
  const response = (state.sliders.monitoring + state.sliders.governance) / 200;
  const governance = state.sliders.governance / 100;
  return 0.35 * detective + 0.25 * preventive + 0.2 * response + 0.2 * governance;
}

function computeUseCaseScenarioMetrics(useCase, scenarioId) {
  const scenario = scenarioLibrary[scenarioId];
  const grossBase =
    scenario.losses.direct +
    scenario.losses.regulatory +
    scenario.losses.remediation +
    scenario.losses.customer +
    scenario.losses.reputation;

  const scaleFactor = 0.72 + useCase.exposureBase / 3000;
  const grossLoss = grossBase * scaleFactor;

  const weightedProbability =
    0.4 * scenario.probability.internal + 0.4 * scenario.probability.expert + 0.2 * scenario.probability.external;
  const riskFactor = 0.8 + useCase.inherentRiskScore / 200;
  const annualProbability = Math.min(0.55, weightedProbability * riskFactor);
  const controlEffectiveness = currentControlEffectiveness();
  const expectedAnnualLoss = annualProbability * grossLoss * (1 - controlEffectiveness);
  const stressLoss95 = grossLoss * (0.62 + annualProbability * 1.1) * (1 - controlEffectiveness * 0.58);

  return {
    scenario,
    annualProbability,
    grossLoss,
    controlEffectiveness,
    expectedAnnualLoss,
    stressLoss95
  };
}

function portfolioQuantMetrics(records) {
  const selected = records.length ? records : useCases;
  const highRisk = selected.filter((entry) => entry.inherentRiskScore >= 80 || entry.regulatoryClassification === "High");
  const baseSet = highRisk.length ? highRisk : selected;
  const metricsRows = baseSet.map((useCase) => {
    const primaryScenario = useCase.scenarioIds[0];
    return {
      useCase,
      ...computeUseCaseScenarioMetrics(useCase, primaryScenario)
    };
  });

  const totalResidualEal = metricsRows.reduce((acc, row) => acc + row.expectedAnnualLoss, 0);
  const totalStressLoss = metricsRows.reduce((acc, row) => acc + row.stressLoss95, 0);

  const byBusiness = {};
  const byDependency = {};
  metricsRows.forEach((row) => {
    const business = row.useCase.businessLine;
    const provider = row.useCase.thirdPartyProvider;
    byBusiness[business] = (byBusiness[business] || 0) + row.expectedAnnualLoss;
    byDependency[provider] = (byDependency[provider] || 0) + row.expectedAnnualLoss;
  });

  const concentration = Object.values(byBusiness).reduce((acc, value) => {
    const share = value / Math.max(totalResidualEal, 0.001);
    return acc + share ** 2;
  }, 0);

  return {
    consideredCount: baseSet.length,
    totalResidualEal,
    totalStressLoss,
    concentrationIndex: concentration,
    byBusiness,
    byDependency,
    metricsRows
  };
}

function updateControlSpine(payload) {
  document.getElementById("spineSection").textContent = payload.section;
  document.getElementById("spineRisk").textContent = payload.risk;
  document.getElementById("spineControl").textContent = payload.control;
  document.getElementById("spineOwner").textContent = payload.owner;
  document.getElementById("spineEvidence").textContent = payload.evidence;
}

function setActiveWithin(container, selector, matcher) {
  container.querySelectorAll(selector).forEach((item) => {
    item.classList.toggle("active", matcher(item));
  });
}

function fillList(targetId, values) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = values.map((value) => `<li>${value}</li>`).join("");
}

function getUseCaseById(useCaseId) {
  return useCases.find((entry) => entry.id === useCaseId) || useCases[0];
}

function renderRiskUniverse() {
  const filtered = useCases.filter((entry) => state.riskBusiness === "All" || entry.businessLine === state.riskBusiness);
  renderExposureGrid(filtered);
  renderRiskConstellation(filtered);
  renderRiskQuadrant(filtered);
  renderHighRiskCards(filtered);
  const focus = getUseCaseById(state.selectedUseCaseId);
  updateControlSpine({
    section: "Risk Universe",
    risk: `${focus.shortName}: ${focus.riskSourceType} with residual score ${focus.residualRiskScore}.`,
    control: focus.controlHooks[0],
    owner: focus.owners.join(" / "),
    evidence: focus.evidence[0]
  });
}

function renderExposureGrid(filtered) {
  const target = document.getElementById("businessLineExposureGrid");
  const groups = {};

  filtered.forEach((entry) => {
    const key =
      state.riskView === "business"
        ? entry.businessLine
        : state.riskView === "ai"
          ? entry.aiType
          : entry.regulatoryClassification;

    if (!groups[key]) {
      groups[key] = { inherent: 0, residual: 0, count: 0 };
    }

    groups[key].inherent += entry.inherentRiskScore;
    groups[key].residual += entry.residualRiskScore;
    groups[key].count += 1;
  });

  target.innerHTML = Object.entries(groups)
    .sort((a, b) => (b[1].inherent / b[1].count) - (a[1].inherent / a[1].count))
    .map(([label, values]) => {
      const inherent = round(values.inherent / values.count, 0);
      const residual = round(values.residual / values.count, 0);
      return `
        <div class="exposure-item">
          <p>${label}<br><span class="micro-copy">${values.count} use cases</span></p>
          <span class="score">I ${inherent} / R ${residual}</span>
        </div>
      `;
    })
    .join("");
}

function riskNodeClass(entry) {
  if (entry.residualRiskScore >= 57) return "critical";
  if (entry.residualRiskScore >= 48) return "warning";
  return "normal";
}

function renderRiskConstellation(filtered) {
  const map = document.getElementById("riskConstellationMap");
  map.innerHTML = filtered
    .map((entry) => {
      const nodeClass = riskNodeClass(entry);
      const isActive = entry.id === state.selectedUseCaseId ? "active" : "";
      return `
        <button
          class="risk-node ${nodeClass} ${isActive}"
          data-usecase-id="${entry.id}"
          style="left:${entry.coordinates.x}%; top:${entry.coordinates.y}%;"
          title="${entry.name}"
        >
          ${entry.shortName}
        </button>
      `;
    })
    .join("");

  map.querySelectorAll(".risk-node").forEach((node) => {
    node.addEventListener("click", () => {
      const useCaseId = node.getAttribute("data-usecase-id");
      state.selectedUseCaseId = useCaseId;
      openRiskDrawer(getUseCaseById(useCaseId));
      renderRiskConstellation(filtered);
      syncQuantificationUseCase(useCaseId);
      renderExecutiveDashboard();
    });
  });
}

function renderRiskQuadrant(filtered) {
  const quadrant = document.getElementById("riskQuadrant");
  quadrant.innerHTML = filtered
    .map((entry) => {
      const x = Math.min(92, Math.max(8, entry.inherentRiskScore));
      const y = Math.min(92, Math.max(8, 100 - entry.residualRiskScore));
      const riskClass = riskNodeClass(entry);
      return `<span class="quadrant-dot ${riskClass}" style="left:${x}%;top:${y}%;" title="${entry.shortName}"></span>`;
    })
    .join("");
}

function renderHighRiskCards(filtered) {
  const target = document.getElementById("highRiskCards");
  const selected = filtered
    .slice()
    .sort((a, b) => b.inherentRiskScore - a.inherentRiskScore)
    .slice(0, 4);

  target.innerHTML = selected
    .map((entry) => {
      const rag = ragStatus(entry.residualRiskScore);
      return `
        <article class="high-risk-card">
          <p><strong>${entry.shortName}</strong></p>
          <p><span class="tag">${entry.riskSourceType}</span> <span class="tag">${entry.regulatoryClassification}</span></p>
          <p>Inherent ${entry.inherentRiskScore} | Residual <span class="${rag.className}">${entry.residualRiskScore} (${rag.label})</span></p>
        </article>
      `;
    })
    .join("");
}

function openRiskDrawer(entry) {
  document.getElementById("drawerUseCaseName").textContent = `${entry.name} (${entry.id})`;
  document.getElementById("drawerDefinition").textContent = `${entry.riskSourceType} exposure across ${entry.businessLine}; inherent risk ${entry.inherentRiskScore}, residual risk ${entry.residualRiskScore}.`;
  fillList("drawerRiskDrivers", entry.riskDrivers);
  fillList("drawerControls", entry.controlHooks);
  fillList("drawerOwners", entry.owners);
  fillList("drawerEvidence", entry.evidence);
  document.getElementById("useCaseRiskDrawer").classList.add("open");
  updateControlSpine({
    section: "Risk Universe - Use Case Detail",
    risk: entry.riskDrivers[0],
    control: entry.controlHooks[0],
    owner: entry.owners.join(" / "),
    evidence: entry.evidence[0]
  });
}

function renderQuantificationSelectors() {
  const quantViewMode = document.getElementById("quantViewMode");
  quantViewMode.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.quantView = button.getAttribute("data-view");
      setActiveWithin(quantViewMode, "button", (item) => item === button);
      renderQuantification();
    });
  });

  const useCaseSelect = document.getElementById("quantUseCaseSelect");
  useCaseSelect.innerHTML = useCases
    .map((entry) => `<option value="${entry.id}">${entry.name}</option>`)
    .join("");
  useCaseSelect.value = state.selectedUseCaseId;

  useCaseSelect.addEventListener("change", (event) => {
    syncQuantificationUseCase(event.target.value);
    renderQuantification();
    renderRiskUniverse();
    renderExecutiveDashboard();
  });

  renderScenarioOptions();

  document.getElementById("quantScenarioSelect").addEventListener("change", (event) => {
    state.selectedScenarioId = event.target.value;
    renderQuantification();
  });

  document.querySelectorAll("input[data-slider]").forEach((slider) => {
    slider.addEventListener("input", (event) => {
      const name = event.target.getAttribute("data-slider");
      const value = Number(event.target.value);
      state.sliders[name] = value;
      const output = document.querySelector(`[data-output="${name}"]`);
      if (output) output.textContent = `${value}%`;
      renderQuantification();
      renderExecutiveDashboard();
    });
  });

  document.getElementById("resetQuantControls").addEventListener("click", () => {
    state.sliders = {
      fairness: 72,
      explainability: 68,
      privacy: 70,
      monitoring: 66,
      governance: 74
    };
    document.querySelectorAll("input[data-slider]").forEach((slider) => {
      const name = slider.getAttribute("data-slider");
      slider.value = state.sliders[name];
      const output = document.querySelector(`[data-output="${name}"]`);
      if (output) output.textContent = `${state.sliders[name]}%`;
    });
    renderQuantification();
    renderExecutiveDashboard();
  });
}

function syncQuantificationUseCase(useCaseId) {
  const useCase = getUseCaseById(useCaseId);
  state.selectedUseCaseId = useCase.id;
  state.selectedScenarioId = useCase.scenarioIds[0];
  const useCaseSelect = document.getElementById("quantUseCaseSelect");
  if (useCaseSelect) useCaseSelect.value = useCase.id;
  renderScenarioOptions();
}

function renderScenarioOptions() {
  const scenarioSelect = document.getElementById("quantScenarioSelect");
  const useCase = getUseCaseById(state.selectedUseCaseId);
  scenarioSelect.innerHTML = useCase.scenarioIds
    .map((scenarioId) => {
      const scenario = scenarioLibrary[scenarioId];
      return `<option value="${scenarioId}">${scenario.name}</option>`;
    })
    .join("");
  scenarioSelect.value = state.selectedScenarioId;
}

function quantificationMetrics() {
  const useCase = getUseCaseById(state.selectedUseCaseId);
  const scenarioId = state.selectedScenarioId;
  const scenario = scenarioLibrary[scenarioId];
  const single = computeUseCaseScenarioMetrics(useCase, scenarioId);
  const portfolio = portfolioQuantMetrics(useCases);
  const effectiveAnnualProbability =
    state.quantView === "portfolio"
      ? portfolio.metricsRows.reduce((acc, row) => acc + row.annualProbability, 0) / Math.max(portfolio.metricsRows.length, 1)
      : single.annualProbability;
  const effectiveGrossLoss =
    state.quantView === "portfolio"
      ? portfolio.metricsRows.reduce((acc, row) => acc + row.grossLoss, 0)
      : single.grossLoss;
  const effectiveEal = state.quantView === "portfolio" ? portfolio.totalResidualEal : single.expectedAnnualLoss;
  const effectiveStressLoss = state.quantView === "portfolio" ? portfolio.totalStressLoss : single.stressLoss95;
  const residualRiskProxy = Math.min(100, useCase.residualRiskScore + effectiveEal * 1.8);
  const rag = ragStatus(residualRiskProxy);

  return {
    useCase,
    scenario,
    grossLoss: effectiveGrossLoss,
    annualProbability: effectiveAnnualProbability,
    controlEffectiveness: single.controlEffectiveness,
    expectedAnnualLoss: effectiveEal,
    stressLoss95: effectiveStressLoss,
    rag,
    losses: scenario.losses,
    portfolio
  };
}

function renderWaterfall(losses, grossLoss) {
  const target = document.getElementById("lossWaterfallChart");
  const entries = [
    ["Direct", losses.direct],
    ["Regulatory", losses.regulatory],
    ["Remediation", losses.remediation],
    ["Customer", losses.customer],
    ["Reputation", losses.reputation]
  ];

  target.innerHTML = entries
    .map(([label, value]) => {
      const width = Math.max(7, (value / grossLoss) * 100);
      return `
        <div class="waterfall-row">
          <span class="waterfall-label">${label}</span>
          <span class="waterfall-track"><span class="waterfall-fill" style="width:${width}%;"></span></span>
          <span class="waterfall-value">${formatCurrencyM(value)}</span>
        </div>
      `;
    })
    .join("");
}

function pseudoRand(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function hashSeed(text) {
  return text.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

function renderDistribution(expectedAnnualLoss, stressLoss95, seedTag) {
  const target = document.getElementById("stressLossDistributionChart");
  const seed = hashSeed(seedTag);
  const bars = [];

  for (let i = 0; i < 24; i += 1) {
    const mean = 15;
    const spread = 47;
    const curve = Math.exp(-((i - mean) ** 2) / spread);
    const noise = 0.85 + pseudoRand(seed + i) * 0.35;
    const value = curve * stressLoss95 * noise + expectedAnnualLoss * 0.2;
    bars.push(value);
  }

  const max = Math.max(...bars);
  target.innerHTML = bars
    .map((value) => {
      const height = Math.max(10, Math.round((value / max) * 100));
      return `<span class="distribution-bar" style="height:${height}%;"></span>`;
    })
    .join("");
}

function renderQuantification() {
  const metrics = quantificationMetrics();
  const useCaseSelect = document.getElementById("quantUseCaseSelect");
  const scenarioSelect = document.getElementById("quantScenarioSelect");
  const isPortfolioView = state.quantView === "portfolio";
  useCaseSelect.disabled = isPortfolioView;
  scenarioSelect.disabled = isPortfolioView;

  renderWaterfall(metrics.losses, Math.max(metrics.grossLoss, 1));

  document.getElementById("annualProbability").textContent = `${round(metrics.annualProbability * 100, 1)}%`;
  document.getElementById("grossLoss").textContent = formatCurrencyM(metrics.grossLoss);
  document.getElementById("controlEffectiveness").textContent = `${round(metrics.controlEffectiveness * 100, 1)}%`;
  document.getElementById("residualEal").textContent = formatCurrencyM(metrics.expectedAnnualLoss);
  document.getElementById("stressLoss").textContent = formatCurrencyM(metrics.stressLoss95);

  const ragTarget = document.getElementById("residualRag");
  ragTarget.textContent = metrics.rag.label;
  ragTarget.classList.remove("rag-green", "rag-amber", "rag-red");
  ragTarget.classList.add(metrics.rag.className);

  const distributionSeed = isPortfolioView ? "portfolio" : `${metrics.useCase.id}-${metrics.scenario.id}`;
  renderDistribution(metrics.expectedAnnualLoss, metrics.stressLoss95, distributionSeed);
  renderQuantPortfolioPanel(metrics.portfolio, isPortfolioView);

  if (isPortfolioView) {
    updateControlSpine({
      section: "Quantification Engine - Portfolio",
      risk: `${metrics.portfolio.consideredCount} high-risk use cases produce concentrated residual exposure.`,
      control: "Portfolio stress testing + concentration limit monitoring.",
      owner: "Chief Risk Office / Model Risk Office",
      evidence: "Portfolio residual loss table, concentration index, dependency cluster report."
    });
  } else {
    updateControlSpine({
      section: "Quantification Engine - Single Use Case",
      risk: `${metrics.useCase.shortName} scenario: ${metrics.scenario.name}.`,
      control: `Control effectiveness at ${round(metrics.controlEffectiveness * 100, 1)}%.`,
      owner: metrics.useCase.owners.join(" / "),
      evidence: `${metrics.useCase.evidence[0]} | Residual EAL ${formatCurrencyM(metrics.expectedAnnualLoss)}`
    });
  }
}

function renderQuantPortfolioPanel(portfolio, isPortfolioView) {
  const panel = document.getElementById("quantPortfolioPanel");
  const businessEntries = Object.entries(portfolio.byBusiness).sort((a, b) => b[1] - a[1]);
  const dependencyEntries = Object.entries(portfolio.byDependency).sort((a, b) => b[1] - a[1]);
  const maxBusiness = Math.max(...businessEntries.map((entry) => entry[1]), 0.001);
  const maxDependency = Math.max(...dependencyEntries.map((entry) => entry[1]), 0.001);
  const concentrationBand = portfolio.concentrationIndex > 0.29 ? "High" : portfolio.concentrationIndex > 0.2 ? "Medium" : "Low";

  panel.innerHTML = `
    <h3>Portfolio Residual Loss & Concentration</h3>
    <p class="micro-copy">
      ${isPortfolioView ? "Portfolio view is active. Metrics aggregate high-risk use cases." : "Switch to portfolio view to drive committee-level concentration decisions."}
    </p>
    <div class="portfolio-grid">
      <div class="portfolio-block">
        <h4>Aggregate Exposure</h4>
        <div class="portfolio-row"><p>High-risk use cases considered</p><span class="value">${portfolio.consideredCount}</span></div>
        <div class="portfolio-row"><p>Portfolio residual EAL</p><span class="value">${formatCurrencyM(portfolio.totalResidualEal)}</span></div>
        <div class="portfolio-row"><p>Portfolio stress loss (95%)</p><span class="value">${formatCurrencyM(portfolio.totalStressLoss)}</span></div>
        <div class="portfolio-row"><p>Concentration index (HHI)</p><span class="value">${round(portfolio.concentrationIndex, 3)} (${concentrationBand})</span></div>
      </div>
      <div class="portfolio-block">
        <h4>Residual EAL by Business Line</h4>
        ${businessEntries
          .map(([label, value]) => {
            const width = (value / maxBusiness) * 100;
            return `<div class="portfolio-row"><p>${label}</p><span class="value">${formatCurrencyM(value)}</span></div><span class="portfolio-track"><span class="portfolio-fill" style="width:${width}%;"></span></span>`;
          })
          .join("")}
      </div>
      <div class="portfolio-block">
        <h4>Third-Party Dependency Cluster</h4>
        ${dependencyEntries
          .map(([label, value]) => {
            const width = (value / maxDependency) * 100;
            return `<div class="portfolio-row"><p>${label}</p><span class="value">${formatCurrencyM(value)}</span></div><span class="portfolio-track"><span class="portfolio-fill" style="width:${width}%;"></span></span>`;
          })
          .join("")}
      </div>
    </div>
  `;
}

function renderLifecycleRail() {
  const rail = document.getElementById("lifecycleRail");
  rail.innerHTML = lifecycleStages
    .map((stage, index) => {
      const isActive = stage.id === state.selectedLifecycle ? "active" : "";
      return `<button class="lifecycle-node ${isActive}" data-stage-id="${stage.id}">${index + 1}. ${stage.name}</button>`;
    })
    .join("");

  rail.querySelectorAll(".lifecycle-node").forEach((node) => {
    node.addEventListener("click", () => {
      state.selectedLifecycle = node.getAttribute("data-stage-id");
      renderLifecycleRail();
      renderLifecycleDetail();
    });
  });
}

function renderLifecycleDetail() {
  const stage = lifecycleStages.find((entry) => entry.id === state.selectedLifecycle) || lifecycleStages[0];
  const index = lifecycleStages.findIndex((entry) => entry.id === stage.id) + 1;

  document.getElementById("lifecycleStageTitle").textContent = stage.name;
  document.getElementById("lifecycleProgress").textContent = `Stage ${index} / ${lifecycleStages.length}`;
  document.getElementById("lifecycleStageGoal").textContent = stage.goal;
  document.getElementById("lifecycleApprovalGate").textContent = stage.approvalGate;
  document.getElementById("lifecycleGateOwner").textContent = `Gate owner: ${stage.gateOwner}`;
  fillList("lifecycleRisks", stage.keyRisks);
  fillList("lifecycleControls", stage.mandatoryControls);
  fillList("lifecycleOwners", stage.owners);
  fillList("lifecycleArtifacts", stage.artifacts);
  fillList("lifecycleGoCriteria", stage.goCriteria);
  fillList("lifecycleNoGoConditions", stage.noGoConditions);

  const evidence = document.getElementById("lifecycleEvidence");
  evidence.innerHTML = stage.evidenceLinks
    .map((item) => `<div class="evidence-card"><p class="label">Evidence Link</p><p>${item}</p></div>`)
    .join("");

  updateControlSpine({
    section: `Lifecycle Governance - ${stage.name}`,
    risk: stage.keyRisks[0],
    control: `${stage.mandatoryControls[0]} | Gate: ${stage.approvalGate}`,
    owner: `${stage.gateOwner} / ${stage.owners.join(" / ")}`,
    evidence: stage.artifacts[0]
  });
}

function renderControlTabs() {
  const tabs = document.getElementById("controlDomainTabs");
  tabs.innerHTML = controlDomains
    .map((domain) => {
      const active = domain.id === state.selectedControlDomain ? "active" : "";
      return `<button class="pill ${active}" data-domain-id="${domain.id}">${domain.label}</button>`;
    })
    .join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedControlDomain = button.getAttribute("data-domain-id");
      const domain = controlDomains.find((entry) => entry.id === state.selectedControlDomain);
      state.selectedControlId = domain.controls[0].id;
      renderControlTabs();
      renderControlCards();
      renderControlDetail();
    });
  });
}

function renderControlCards() {
  const domain = controlDomains.find((entry) => entry.id === state.selectedControlDomain) || controlDomains[0];
  const grid = document.getElementById("controlCardGrid");

  grid.innerHTML = domain.controls
    .map((control) => {
      const active = control.id === state.selectedControlId ? "active" : "";
      return `
        <button class="control-card ${active}" data-control-id="${control.id}">
          <h4>${control.name}</h4>
          <p>${control.description}</p>
        </button>
      `;
    })
    .join("");

  grid.querySelectorAll(".control-card").forEach((card) => {
    card.addEventListener("click", () => {
      state.selectedControlId = card.getAttribute("data-control-id");
      renderControlCards();
      renderControlDetail();
    });
  });
}

function renderControlDetail() {
  const domain = controlDomains.find((entry) => entry.id === state.selectedControlDomain) || controlDomains[0];
  const control = domain.controls.find((entry) => entry.id === state.selectedControlId) || domain.controls[0];

  document.getElementById("controlDetailName").textContent = control.name;
  document.getElementById("controlDetailDescription").textContent = control.description;
  fillList("controlMitigatedRisks", control.mitigatedRisks);
  fillList("controlLifecycleStages", control.lifecycleStages);
  fillList("controlOwners", control.ownerRoles);
  fillList("controlEvidence", control.outputEvidence);

  updateControlSpine({
    section: `Control Stack - ${domain.label}`,
    risk: control.mitigatedRisks[0],
    control: control.name,
    owner: control.ownerRoles.join(" / "),
    evidence: control.outputEvidence[0]
  });
}

function roleLayer(role) {
  if (state.operatingView === "committee") return role.governanceLayer;
  if (state.operatingView === "defense") return role.defenseLayer;
  return role.lifecycleOwner;
}

function renderOperatingModel() {
  const circuit = document.getElementById("governanceCircuitDiagram");
  const matrix = document.getElementById("roleResponsibilityMatrix");

  circuit.innerHTML = operatingRoles
    .map((role) => {
      const active = role.id === state.selectedRoleId ? "active" : "";
      return `<button class="role-chip ${active}" data-role-id="${role.id}">${role.name}</button>`;
    })
    .join("");

  matrix.innerHTML = operatingRoles
    .map(
      (role) => `<div class="role-row"><strong>${role.name}</strong><span>${roleLayer(role)}</span></div>`
    )
    .join("");

  circuit.querySelectorAll(".role-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.selectedRoleId = chip.getAttribute("data-role-id");
      renderOperatingModel();
      renderRoleDetail();
    });
  });

  renderRoleDetail();
  renderDecisionRightsMatrix();
}

function renderRoleDetail() {
  const role = operatingRoles.find((entry) => entry.id === state.selectedRoleId) || operatingRoles[0];
  document.getElementById("roleDetailName").textContent = role.name;
  document.getElementById("roleDetailSummary").textContent = role.responsibilitySummary;
  fillList("roleDecisionRights", role.decisionRights);
  fillList("roleEscalation", role.escalationTriggers);
  fillList("roleArtifacts", role.ownedArtifacts);

  updateControlSpine({
    section: `Operating Model - ${role.name}`,
    risk: role.escalationTriggers[0],
    control: role.decisionRights[0],
    owner: role.name,
    evidence: role.ownedArtifacts[0]
  });
}

function decisionCellClass(value) {
  if (value === "A") return "yes";
  if (value === "C") return "challenge";
  return "no";
}

function renderDecisionRightsMatrix() {
  const body = document.getElementById("decisionRightsMatrix");
  body.innerHTML = decisionRightsMatrix
    .map((row) => {
      return `
        <tr>
          <td>${row.action}</td>
          <td><span class="decision-cell ${decisionCellClass(row.board)}">${row.board}</span></td>
          <td><span class="decision-cell ${decisionCellClass(row.aigc)}">${row.aigc}</span></td>
          <td><span class="decision-cell ${decisionCellClass(row.mrm)}">${row.mrm}</span></td>
          <td><span class="decision-cell ${decisionCellClass(row.business)}">${row.business}</span></td>
          <td><span class="decision-cell ${decisionCellClass(row.audit)}">${row.audit}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderRoadmap() {
  const roadmap = document.getElementById("transformationRoadmap");
  roadmap.innerHTML = roadmapPhases
    .map((phase) => {
      const active = phase.id === state.selectedRoadmapPhase ? "active" : "";
      return `<button class="roadmap-phase ${active}" data-phase-id="${phase.id}"><strong>${phase.name}</strong><br><span class="micro-copy">${phase.horizon}</span></button>`;
    })
    .join("");

  roadmap.querySelectorAll(".roadmap-phase").forEach((phaseButton) => {
    phaseButton.addEventListener("click", () => {
      state.selectedRoadmapPhase = phaseButton.getAttribute("data-phase-id");
      renderRoadmap();
      renderRoadmapDetail();
    });
  });

  renderRoadmapDetail();

  const maturity = document.getElementById("maturityScoreStrip");
  maturity.innerHTML = roadmapPhases
    .map(
      (phase) =>
        `<div class="maturity-item"><strong>${phase.horizon}</strong>Maturity score <span class="tag">${phase.maturityScore}</span></div>`
    )
    .join("");

  const regulatory = document.getElementById("regulatoryTimelineStrip");
  regulatory.innerHTML = regulatoryTimeline
    .map((item) => `<div class="reg-item"><strong>${item.title}</strong>${item.detail}</div>`)
    .join("");

  renderRegulationTraceability();
}

function renderRoadmapDetail() {
  const phase = roadmapPhases.find((entry) => entry.id === state.selectedRoadmapPhase) || roadmapPhases[0];
  document.getElementById("phaseDetailTitle").textContent = phase.name;
  document.getElementById("phaseDetailHorizon").textContent = phase.horizon;
  fillList("phaseObjectives", phase.objectives);
  fillList("phaseActions", phase.actions);
  fillList("phaseOwners", phase.owners);
  fillList("phaseDeliverables", phase.deliverables);
  fillList("phaseMetrics", phase.metrics);
  fillList("phaseDependencies", phase.dependencies);

  updateControlSpine({
    section: "Roadmap",
    risk: phase.objectives[0],
    control: phase.actions[0],
    owner: phase.owners.join(" / "),
    evidence: phase.deliverables[0]
  });
}

function renderRegulationTraceability() {
  const tabs = document.getElementById("regulationTraceTabs");
  tabs.innerHTML = regulationTraceability
    .map((item) => {
      const active = item.id === state.selectedRegulation ? "active" : "";
      return `<button class="pill ${active}" data-regulation-id="${item.id}">${item.label}</button>`;
    })
    .join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedRegulation = button.getAttribute("data-regulation-id");
      renderRegulationTraceability();
    });
  });

  const current =
    regulationTraceability.find((item) => item.id === state.selectedRegulation) || regulationTraceability[0];
  document.getElementById("regulationTraceTimeline").textContent = current.timeline;
  fillList("traceRisks", current.risks);
  fillList("traceControls", current.controls);
  fillList("traceOwners", current.owners);
  fillList("traceEvidence", current.evidence);
  fillList("traceStages", current.stages);
  fillList("traceKpis", current.kpis);

  updateControlSpine({
    section: `Traceability - ${current.label}`,
    risk: current.risks[0],
    control: current.controls[0],
    owner: current.owners.join(" / "),
    evidence: current.evidence[0]
  });
}

function filteredDashboardUseCases() {
  return useCases.filter((entry) => {
    const businessOk =
      state.dashboardFilters.business === "All" || entry.businessLine === state.dashboardFilters.business;
    const aiTypeOk = state.dashboardFilters.aiType === "All" || entry.aiType === state.dashboardFilters.aiType;
    const stageOk = state.dashboardFilters.stage === "All" || entry.stageFocus === state.dashboardFilters.stage;
    const domainOk = state.dashboardFilters.domain === "All" || entry.domainFocus === state.dashboardFilters.domain;
    return businessOk && aiTypeOk && stageOk && domainOk;
  });
}

function aggregateDashboardMetrics(records) {
  if (!records.length) return aggregateDashboardMetrics(useCases);

  const count = records.length;
  const sum = (selector) => records.reduce((acc, item) => acc + selector(item), 0);

  const inherentAvg = sum((item) => item.inherentRiskScore) / count;
  const residualAvg = sum((item) => item.residualRiskScore) / count;
  const highRisk = records.filter((item) => item.inherentRiskScore >= 80).length;
  const validation = sum((item) => item.validationComplete) / count;
  const fairnessGap = sum((item) => item.fairnessGap) / count;
  const explanation = sum((item) => item.explanationCoverage) / count;
  const privacyIncidents = sum((item) => item.privacyIncidents);
  const promptPass = sum((item) => item.promptPassRate) / count;
  const driftAlerts = sum((item) => item.unresolvedDriftAlerts);
  const containment = sum((item) => item.containmentHours) / count;
  const audit = sum((item) => item.auditCompleteness) / count;
  const humanReview = sum((item) => item.humanReviewCoverage) / count;

  const residualEal = records.reduce((acc, item) => acc + (item.residualRiskScore / 100) * (item.exposureBase / 42), 0);
  const stressLoss = records.reduce((acc, item) => acc + (item.inherentRiskScore / 100) * (item.exposureBase / 28), 0);
  const portfolio = portfolioQuantMetrics(records);

  let readiness =
    validation * 0.22 +
    explanation * 0.14 +
    audit * 0.2 +
    humanReview * 0.15 +
    promptPass * 0.1 +
    (100 - fairnessGap * 6) * 0.08 +
    (100 - driftAlerts * 2.4) * 0.11;

  if (state.dashboardView === "inherent") readiness -= 8;
  if (state.dashboardView === "board") readiness += 2;
  if (state.dashboardView === "regulator") readiness -= 4;

  readiness = Math.max(36, Math.min(96, readiness));

  return {
    count,
    inherentAvg,
    residualAvg,
    highRisk,
    validation,
    fairnessGap,
    explanation,
    privacyIncidents,
    promptPass,
    driftAlerts,
    containment,
    audit,
    humanReview,
    residualEal,
    stressLoss,
    readiness,
    concentrationIndex: portfolio.concentrationIndex,
    byBusiness: portfolio.byBusiness
  };
}

function leaderboardRows(records) {
  return records
    .map((item) => {
      const residualEal = (item.residualRiskScore / 100) * (item.exposureBase / 42);
      const stress95 = (item.inherentRiskScore / 100) * (item.exposureBase / 28);
      const rag = ragStatus(item.residualRiskScore);
      return {
        item,
        residualEal,
        stress95,
        rag
      };
    })
    .sort((a, b) => b.residualEal - a.residualEal);
}

function animateNumber(element, toValue, options = {}) {
  const {
    duration = 450,
    prefix = "",
    suffix = "",
    decimals = 0
  } = options;

  const fromText = element.textContent.replace(/[^0-9.-]/g, "");
  const fromValue = Number.parseFloat(fromText || "0");
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min(1, (now - startTime) / duration);
    const eased = 1 - (1 - progress) ** 3;
    const value = fromValue + (toValue - fromValue) * eased;
    element.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

function renderExecutiveDashboard() {
  const records = filteredDashboardUseCases();
  const metrics = aggregateDashboardMetrics(records);

  const cockpit = document.getElementById("kpiCockpit");
  cockpit.innerHTML = `
    <div class="kpi-card"><p>High-risk use cases</p><strong id="kpiHighRisk">0</strong></div>
    <div class="kpi-card"><p>Validation complete</p><strong id="kpiValidation">0%</strong></div>
    <div class="kpi-card"><p>Portfolio concentration</p><strong id="kpiConcentration">0.000</strong></div>
    <div class="kpi-card"><p>Explanation coverage</p><strong id="kpiExplanation">0%</strong></div>
    <div class="kpi-card"><p>Residual EAL</p><strong id="kpiResidualEal">$0.0M</strong></div>
    <div class="kpi-card"><p>Containment time</p><strong id="kpiContainment">0h</strong></div>
  `;

  animateNumber(document.getElementById("kpiHighRisk"), metrics.highRisk, { decimals: 0 });
  animateNumber(document.getElementById("kpiValidation"), metrics.validation, { decimals: 1, suffix: "%" });
  animateNumber(document.getElementById("kpiConcentration"), metrics.concentrationIndex, { decimals: 3 });
  animateNumber(document.getElementById("kpiExplanation"), metrics.explanation, { decimals: 1, suffix: "%" });
  animateNumber(document.getElementById("kpiResidualEal"), metrics.residualEal, { decimals: 1, prefix: "$", suffix: "M" });
  animateNumber(document.getElementById("kpiContainment"), metrics.containment, { decimals: 0, suffix: "h" });

  const leaderboard = document.getElementById("residualLossLeaderboard");
  leaderboard.innerHTML = leaderboardRows(records)
    .slice(0, 7)
    .map((entry) => {
      return `
        <tr>
          <td>${entry.item.shortName}</td>
          <td>${entry.item.inherentRiskScore}</td>
          <td>${entry.item.residualRiskScore}</td>
          <td>${formatCurrencyM(entry.residualEal)}</td>
          <td>${formatCurrencyM(entry.stress95)}</td>
          <td class="${entry.rag.className}">${entry.rag.label}</td>
        </tr>
      `;
    })
    .join("");

  const readinessGauge = document.getElementById("readinessScoreGauge");
  const angle = round((metrics.readiness / 100) * 360, 0);
  readinessGauge.style.setProperty("--angle", `${angle}deg`);
  animateNumber(document.getElementById("readinessValue"), metrics.readiness, { decimals: 0, suffix: "%" });

  const narratives = {
    inherent: "Inherent view highlights concentration of exposure before controls and prioritizes high-impact intervention.",
    residual: "Residual view confirms control effectiveness and tracks whether risk remains inside appetite.",
    board: "Board summary concentrates on EAL trend, escalation cadence, and strategic control maturity.",
    regulator: "Regulator summary emphasizes evidence completeness, traceability, and incident containment discipline."
  };

  document.getElementById("readinessNarrative").textContent = narratives[state.dashboardView];

  const miniPanels = document.getElementById("miniRiskPanels");
  miniPanels.innerHTML = `
    <div class="mini-panel"><p>Fairness posture</p><strong>${round(100 - metrics.fairnessGap * 6, 0)} / 100</strong></div>
    <div class="mini-panel"><p>Explainability</p><strong>${round(metrics.explanation, 0)}%</strong></div>
    <div class="mini-panel"><p>Privacy incidents</p><strong>${metrics.privacyIncidents}</strong></div>
    <div class="mini-panel"><p>Prompt defense pass rate</p><strong>${round(metrics.promptPass, 1)}%</strong></div>
    <div class="mini-panel"><p>Unresolved drift alerts</p><strong>${metrics.driftAlerts}</strong></div>
    <div class="mini-panel"><p>Audit log completeness</p><strong>${round(metrics.audit, 1)}%</strong></div>
    <div class="mini-panel"><p>Human review coverage</p><strong>${round(metrics.humanReview, 1)}%</strong></div>
    <div class="mini-panel"><p>Stress loss portfolio</p><strong>${formatCurrencyM(metrics.stressLoss)}</strong></div>
  `;

  const concentrationTarget = document.getElementById("dashboardConcentration");
  const concentrationEntries = Object.entries(metrics.byBusiness).sort((a, b) => b[1] - a[1]);
  const maxConcentration = Math.max(...concentrationEntries.map((entry) => entry[1]), 0.001);
  concentrationTarget.innerHTML = concentrationEntries
    .map(([label, value]) => {
      const width = (value / maxConcentration) * 100;
      return `
        <div class="conc-row">
          <p>${label}</p>
          <span class="value">${formatCurrencyM(value)}</span>
        </div>
        <span class="portfolio-track"><span class="portfolio-fill" style="width:${width}%;"></span></span>
      `;
    })
    .join("");

  updateControlSpine({
    section: `Executive Dashboard - ${state.dashboardView}`,
    risk: `Portfolio concentration index ${round(metrics.concentrationIndex, 3)} with ${metrics.highRisk} high-risk use cases.`,
    control: "Board/regulator reporting pack with residual EAL, traceability, and containment KPIs.",
    owner: "Board Risk Committee / Chief Risk Office / AI PMO",
    evidence: "Dashboard KPI cockpit, residual loss leaderboard, concentration view."
  });
}

function installEventHandlers() {
  document.getElementById("enterControlRoom").addEventListener("click", () => {
    document.getElementById("risk-universe").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  document.getElementById("closeRiskDrawer").addEventListener("click", () => {
    document.getElementById("useCaseRiskDrawer").classList.remove("open");
  });

  const riskViewMode = document.getElementById("riskViewMode");
  riskViewMode.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.riskView = button.getAttribute("data-view");
      setActiveWithin(riskViewMode, "button", (item) => item === button);
      renderRiskUniverse();
    });
  });

  const businessFilter = document.getElementById("businessFilter");
  businessFilter.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.riskBusiness = button.getAttribute("data-business");
      setActiveWithin(businessFilter, "button", (item) => item === button);
      renderRiskUniverse();
      renderExecutiveDashboard();
    });
  });

  const operatingViewToggle = document.getElementById("operatingViewToggle");
  operatingViewToggle.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.operatingView = button.getAttribute("data-view");
      setActiveWithin(operatingViewToggle, "button", (item) => item === button);
      renderOperatingModel();
    });
  });

  const dashboardViewToggle = document.getElementById("dashboardViewToggle");
  dashboardViewToggle.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.dashboardView = button.getAttribute("data-view");
      setActiveWithin(dashboardViewToggle, "button", (item) => item === button);
      renderExecutiveDashboard();
    });
  });

  document.getElementById("dashboardBusinessFilter").addEventListener("change", (event) => {
    state.dashboardFilters.business = event.target.value;
    renderExecutiveDashboard();
  });

  document.getElementById("dashboardAiFilter").addEventListener("change", (event) => {
    state.dashboardFilters.aiType = event.target.value;
    renderExecutiveDashboard();
  });

  document.getElementById("dashboardStageFilter").addEventListener("change", (event) => {
    state.dashboardFilters.stage = event.target.value;
    renderExecutiveDashboard();
  });

  document.getElementById("dashboardDomainFilter").addEventListener("change", (event) => {
    state.dashboardFilters.domain = event.target.value;
    renderExecutiveDashboard();
  });
}

function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function observeSpineSections() {
  const sections = document.querySelectorAll("main > section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        .forEach((entry) => {
          const defaults = sectionSpineDefaults[entry.target.id];
          if (defaults) updateControlSpine(defaults);
        });
    },
    { threshold: [0.35, 0.55, 0.75] }
  );

  sections.forEach((section) => observer.observe(section));
}

function init() {
  installEventHandlers();
  renderRiskUniverse();
  openRiskDrawer(useCases[0]);
  renderQuantificationSelectors();
  renderQuantification();
  renderLifecycleRail();
  renderLifecycleDetail();
  renderControlTabs();
  renderControlCards();
  renderControlDetail();
  renderOperatingModel();
  renderRoadmap();
  renderExecutiveDashboard();
  updateControlSpine(sectionSpineDefaults.hero);
  observeReveal();
  observeSpineSections();
}

document.addEventListener("DOMContentLoaded", init);
