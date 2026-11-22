import { OpenAPIHono } from '@hono/zod-openapi'
import {
  activitiesHandler,
  authHandler,
  bankIntegrationsHandler,
  bankTransactionRulesHandler,
  bankTransactionsHandler,
  chartsHandler,
  claimLicenseHandler,
  clientGatewayTokensHandler,
  clientsHandler,
  companiesHandler,
  companyGatewaysHandler,
  companyLedgerHandler,
  companyUserHandler,
  connectedAccountHandler,
  creditsHandler,
  designsHandler,
  documentsHandler,
  emailsHandler,
  expenseCategoriesHandler,
  expenseHandler,
  expensesHandler,
  exportHandler,
  groupSettingsHandler,
  healthCheckHandler,
  importHandler,
  importsHandler,
  invoicesHandler,
  locationsHandler,
  logoutHandler,
  migrationHandler,
  oneTimeTokenHandler,
  paymentsHandler,
  paymentTermsHandler,
  paymentTermssHandler,
  pingHandler,
  postmarkHandler,
  previewHandler,
  productsHandler,
  projectsHandler,
  purchaseOrdersHandler,
  quotesHandler,
  recurringExpenseHandler,
  recurringExpensesHandler,
  recurringInvoicesHandler,
  recurringQuotesHandler,
  refreshHandler,
  reportsHandler,
  schedulerHandler,
  searchHandler,
  staticsHandler,
  subscriptionsHandler,
  supportHandler,
  systemLogsHandler,
  tagsHandler,
  taskSchedulersHandler,
  tasksHandler,
  taskStatusHandler,
  taxRatesHandler,
  templatesHandler,
  tokensHandler,
  updateHandler,
  usersHandler,
  vendorsHandler,
  webcronHandler,
  webhooksHandler,
  yodleeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authHandler)
  .route('/', activitiesHandler)
  .route('/', refreshHandler)
  .route('/', yodleeHandler)
  .route('/', bankIntegrationsHandler)
  .route('/', bankTransactionsHandler)
  .route('/', bankTransactionRulesHandler)
  .route('/', chartsHandler)
  .route('/', clientGatewayTokensHandler)
  .route('/', companiesHandler)
  .route('/', companyGatewaysHandler)
  .route('/', companyLedgerHandler)
  .route('/', companyUserHandler)
  .route('/', connectedAccountHandler)
  .route('/', designsHandler)
  .route('/', documentsHandler)
  .route('/', emailsHandler)
  .route('/', expenseCategoriesHandler)
  .route('/', expensesHandler)
  .route('/', expenseHandler)
  .route('/', exportHandler)
  .route('/', groupSettingsHandler)
  .route('/', importsHandler)
  .route('/', importHandler)
  .route('/', postmarkHandler)
  .route('/', claimLicenseHandler)
  .route('/', logoutHandler)
  .route('/', migrationHandler)
  .route('/', oneTimeTokenHandler)
  .route('/', paymentTermsHandler)
  .route('/', paymentTermssHandler)
  .route('/', pingHandler)
  .route('/', healthCheckHandler)
  .route('/', previewHandler)
  .route('/', recurringExpensesHandler)
  .route('/', recurringExpenseHandler)
  .route('/', recurringQuotesHandler)
  .route('/', reportsHandler)
  .route('/', updateHandler)
  .route('/', staticsHandler)
  .route('/', subscriptionsHandler)
  .route('/', schedulerHandler)
  .route('/', supportHandler)
  .route('/', systemLogsHandler)
  .route('/', taskSchedulersHandler)
  .route('/', taskStatusHandler)
  .route('/', taxRatesHandler)
  .route('/', templatesHandler)
  .route('/', searchHandler)
  .route('/', tokensHandler)
  .route('/', usersHandler)
  .route('/', webcronHandler)
  .route('/', webhooksHandler)
  .route('/', creditsHandler)
  .route('/', quotesHandler)
  .route('/', tagsHandler)
  .route('/', locationsHandler)
  .route('/', recurringInvoicesHandler)
  .route('/', tasksHandler)
  .route('/', invoicesHandler)
  .route('/', projectsHandler)
  .route('/', vendorsHandler)
  .route('/', paymentsHandler)
  .route('/', clientsHandler)
  .route('/', purchaseOrdersHandler)
  .route('/', productsHandler)

export default app
