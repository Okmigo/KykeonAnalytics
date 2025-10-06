export const riskAlerts = [
  {
    substance: 'Drostanolone Propionate',
    vendor: 'Vendor A',
    published: '2024-09-15',
    riskLevel: 'High',
    outcome: 'Carcinogenic impurity detected',
    action: 'Withdraw immediately',
  },
  {
    substance: 'Testosterone Isocaproate',
    vendor: 'Vendor B',
    published: '2024-09-12',
    riskLevel: 'Medium',
    outcome: 'Unlisted excipients found',
    action: 'Request certificate of analysis',
  },
  {
    substance: 'Pregnenolone',
    vendor: 'Vendor C',
    published: '2024-09-10',
    riskLevel: 'Low',
    outcome: 'Matches label claims',
    action: 'Monitor for updates',
  },
  {
    substance: 'Methyl-testosterone',
    vendor: 'Vendor D',
    published: '2024-09-08',
    riskLevel: 'High',
    outcome: 'Heavy metal contamination detected',
    action: 'Issue immediate warning',
  },
  {
    substance: 'Trenbolone Base',
    vendor: 'Vendor E',
    published: '2024-09-05',
    riskLevel: 'High',
    outcome: 'Mislabeled as human grade',
    action: 'Notify regulators',
  },
];

export const riskDistribution = [
  { label: 'High Risk', value: 35, color: 'bg-ember/70' },
  { label: 'Medium Risk', value: 42, color: 'bg-brand/70' },
  { label: 'Low Risk', value: 23, color: 'bg-jade/70' },
];
