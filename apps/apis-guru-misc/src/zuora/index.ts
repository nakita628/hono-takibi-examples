import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountingCodesHandler,
  accountingPeriodsHandler,
  accountsHandler,
  actionsHandler,
  amendmentsHandler,
  attachmentsHandler,
  billingDocumentsHandler,
  billingPreviewRunHandler,
  billRunHandler,
  catalogHandler,
  chargeMetricsHandler,
  chargeRevenueSummariesHandler,
  communicationProfilesHandler,
  connectionsHandler,
  contactsHandler,
  creditBalanceAdjustmentsHandler,
  creditMemosHandler,
  customExchangeRatesHandler,
  customObjectDefinitionsHandler,
  customObjectJobsHandler,
  customObjectRecordsHandler,
  dataQueriesHandler,
  debitMemosHandler,
  describeHandler,
  documentPropertiesHandler,
  entitiesHandler,
  entityConnectionsHandler,
  eventTriggersHandler,
  exportsHandler,
  featuresHandler,
  filesHandler,
  hmacSignaturesHandler,
  hostedPagesHandler,
  importsHandler,
  invoiceAdjustmentsHandler,
  invoiceItemAdjustmentsHandler,
  invoiceItemsHandler,
  invoicePaymentsHandler,
  invoicesHandler,
  invoiceSplitItemsHandler,
  invoiceSplitsHandler,
  journalRunsHandler,
  massUpdaterHandler,
  notificationsHandler,
  oAuthHandler,
  operationsHandler,
  orderLineItemsHandler,
  ordersHandler,
  paymentGatewayReconciliationHandler,
  paymentGatewaysHandler,
  paymentMethodsHandler,
  paymentMethodSnapshotsHandler,
  paymentMethodTransactionLogsHandler,
  paymentRunsHandler,
  paymentsHandler,
  paymentTransactionLogsHandler,
  productFeaturesHandler,
  productRatePlanChargesHandler,
  productRatePlanChargeTiersHandler,
  productRatePlansHandler,
  productsHandler,
  quotesDocumentHandler,
  rampsHandler,
  ratePlanChargesHandler,
  ratePlanChargeTiersHandler,
  ratePlansHandler,
  refundInvoicePaymentsHandler,
  refundsHandler,
  refundTransactionLogsHandler,
  revenueEventsHandler,
  revenueItemsHandler,
  revenueRulesHandler,
  revenueSchedulesHandler,
  rsaSignaturesHandler,
  sequenceSetsHandler,
  settingsHandler,
  subscriptionProductFeaturesHandler,
  subscriptionsHandler,
  summaryJournalEntriesHandler,
  taxationItemsHandler,
  transactionsHandler,
  unitOfMeasureHandler,
  usageHandler,
  usersHandler,
  workflowsHandler,
  zuoraRevenueIntegrationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', chargeMetricsHandler)
  .route('/', eventTriggersHandler)
  .route('/', notificationsHandler)
  .route('/', oAuthHandler)
  .route('/', customObjectRecordsHandler)
  .route('/', customObjectDefinitionsHandler)
  .route('/', customObjectJobsHandler)
  .route('/', dataQueriesHandler)
  .route('/', settingsHandler)
  .route('/', accountingCodesHandler)
  .route('/', accountingPeriodsHandler)
  .route('/', accountsHandler)
  .route('/', billingDocumentsHandler)
  .route('/', actionsHandler)
  .route('/', amendmentsHandler)
  .route('/', ordersHandler)
  .route('/', attachmentsHandler)
  .route('/', billRunHandler)
  .route('/', billingPreviewRunHandler)
  .route('/', massUpdaterHandler)
  .route('/', catalogHandler)
  .route('/', chargeRevenueSummariesHandler)
  .route('/', connectionsHandler)
  .route('/', contactsHandler)
  .route('/', creditMemosHandler)
  .route('/', customExchangeRatesHandler)
  .route('/', debitMemosHandler)
  .route('/', describeHandler)
  .route('/', documentPropertiesHandler)
  .route('/', entitiesHandler)
  .route('/', entityConnectionsHandler)
  .route('/', filesHandler)
  .route('/', paymentGatewayReconciliationHandler)
  .route('/', hmacSignaturesHandler)
  .route('/', hostedPagesHandler)
  .route('/', invoicesHandler)
  .route('/', summaryJournalEntriesHandler)
  .route('/', journalRunsHandler)
  .route('/', communicationProfilesHandler)
  .route('/', creditBalanceAdjustmentsHandler)
  .route('/', exportsHandler)
  .route('/', featuresHandler)
  .route('/', importsHandler)
  .route('/', invoiceAdjustmentsHandler)
  .route('/', invoiceItemAdjustmentsHandler)
  .route('/', invoiceItemsHandler)
  .route('/', invoicePaymentsHandler)
  .route('/', invoiceSplitItemsHandler)
  .route('/', invoiceSplitsHandler)
  .route('/', paymentsHandler)
  .route('/', paymentMethodsHandler)
  .route('/', paymentMethodSnapshotsHandler)
  .route('/', paymentMethodTransactionLogsHandler)
  .route('/', paymentTransactionLogsHandler)
  .route('/', productsHandler)
  .route('/', productFeaturesHandler)
  .route('/', productRatePlansHandler)
  .route('/', productRatePlanChargesHandler)
  .route('/', productRatePlanChargeTiersHandler)
  .route('/', ratePlanChargeTiersHandler)
  .route('/', ratePlanChargesHandler)
  .route('/', ratePlansHandler)
  .route('/', refundsHandler)
  .route('/', refundInvoicePaymentsHandler)
  .route('/', refundTransactionLogsHandler)
  .route('/', subscriptionProductFeaturesHandler)
  .route('/', subscriptionsHandler)
  .route('/', taxationItemsHandler)
  .route('/', unitOfMeasureHandler)
  .route('/', usageHandler)
  .route('/', operationsHandler)
  .route('/', orderLineItemsHandler)
  .route('/', rampsHandler)
  .route('/', paymentRunsHandler)
  .route('/', paymentGatewaysHandler)
  .route('/', quotesDocumentHandler)
  .route('/', revenueEventsHandler)
  .route('/', revenueItemsHandler)
  .route('/', revenueRulesHandler)
  .route('/', revenueSchedulesHandler)
  .route('/', zuoraRevenueIntegrationHandler)
  .route('/', rsaSignaturesHandler)
  .route('/', sequenceSetsHandler)
  .route('/', transactionsHandler)
  .route('/', usersHandler)
  .route('/', workflowsHandler)

export default app
