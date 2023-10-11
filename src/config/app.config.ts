interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Inventory Manager', 'Sales Representative', 'Accountant', 'Business Owner'],
  tenantName: 'Company',
  applicationName: 'Inventory Management System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read user information',
    'Update user information',
    "Read company's user information",
  ],
  ownerAbilities: ['Manage user data', 'Manage company data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/7725419b-cc4e-441f-864f-2e9e77aa49ad',
};
