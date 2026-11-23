import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesHandler,
  alertsHandler,
  attachedItemsHandler,
  batchHandler,
  businessEntitiesHandler,
  businessRulesetsHandler,
  businessRulesHandler,
  cardsHandler,
  collectionsPaymentPromisesHandler,
  commentsHandler,
  configurationsHandler,
  couponCodesHandler,
  couponSetsHandler,
  couponsHandler,
  creditNotesHandler,
  creditUnitsHandler,
  csvTaxRulesHandler,
  currenciesHandler,
  customersHandler,
  customFieldConfigsHandler,
  differentialPricesHandler,
  disputesHandler,
  einvoicesHandler,
  entitlementsHandler,
  estimatesHandler,
  eventsHandler,
  exportsHandler,
  featuresHandler,
  fullExportsHandler,
  gatewayRequestLogsHandler,
  gatewayWebhookLogsHandler,
  giftsHandler,
  grantBlocksHandler,
  hostedPagesHandler,
  inAppSubscriptionsHandler,
  invoicesHandler,
  itemFamiliesHandler,
  itemPricesHandler,
  itemsHandler,
  ledgerAccountBalancesHandler,
  ledgerOperationsHandler,
  meteredFeaturesHandler,
  metersHandler,
  nonSubscriptionsHandler,
  offerEventsHandler,
  offerFulfillmentsHandler,
  omnichannelOneTimeOrdersHandler,
  omnichannelSubscriptionItemsHandler,
  omnichannelSubscriptionsHandler,
  ordersHandler,
  organizationDetailsHandler,
  paymentIntentsHandler,
  paymentScheduleSchemesHandler,
  paymentSchedulesHandler,
  paymentSourcesHandler,
  paymentVouchersHandler,
  pc2MigrationItemFamiliesHandler,
  pc2MigrationItemPricesHandler,
  pc2MigrationItemsHandler,
  pc2MigrationsHandler,
  personalizedOffersHandler,
  portalSessionsHandler,
  priceRampsHandler,
  priceVariantsHandler,
  pricingPageSessionsHandler,
  productsHandler,
  promotionalCreditsHandler,
  promotionalGrantsHandler,
  purchasesHandler,
  quotesHandler,
  rampsHandler,
  recordedPurchasesHandler,
  resourceMigrationsHandler,
  retrySegmentsHandler,
  rulesHandler,
  siteMigrationDetailsHandler,
  sitePcMetaRecordsHandler,
  subscriptionsHandler,
  timeMachinesHandler,
  tokensHandler,
  transactionsHandler,
  unbilledChargesHandler,
  usageEventsHandler,
  usageFilesHandler,
  usagesHandler,
  variantsHandler,
  vaultedPaymentMethodsHandler,
  virtualBankAccountsHandler,
  webhookEndpointsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', subscriptionsHandler)
  .route('/', customersHandler)
  .route('/', tokensHandler)
  .route('/', paymentSourcesHandler)
  .route('/', vaultedPaymentMethodsHandler)
  .route('/', virtualBankAccountsHandler)
  .route('/', cardsHandler)
  .route('/', promotionalCreditsHandler)
  .route('/', gatewayRequestLogsHandler)
  .route('/', gatewayWebhookLogsHandler)
  .route('/', invoicesHandler)
  .route('/', paymentSchedulesHandler)
  .route('/', creditNotesHandler)
  .route('/', unbilledChargesHandler)
  .route('/', ordersHandler)
  .route('/', giftsHandler)
  .route('/', transactionsHandler)
  .route('/', disputesHandler)
  .route('/', hostedPagesHandler)
  .route('/', estimatesHandler)
  .route('/', quotesHandler)
  .route('/', couponsHandler)
  .route('/', couponSetsHandler)
  .route('/', couponCodesHandler)
  .route('/', addressesHandler)
  .route('/', usagesHandler)
  .route('/', eventsHandler)
  .route('/', commentsHandler)
  .route('/', portalSessionsHandler)
  .route('/', siteMigrationDetailsHandler)
  .route('/', resourceMigrationsHandler)
  .route('/', timeMachinesHandler)
  .route('/', exportsHandler)
  .route('/', fullExportsHandler)
  .route('/', paymentIntentsHandler)
  .route('/', customFieldConfigsHandler)
  .route('/', itemFamiliesHandler)
  .route('/', productsHandler)
  .route('/', variantsHandler)
  .route('/', itemsHandler)
  .route('/', priceVariantsHandler)
  .route('/', itemPricesHandler)
  .route('/', attachedItemsHandler)
  .route('/', differentialPricesHandler)
  .route('/', priceRampsHandler)
  .route('/', configurationsHandler)
  .route('/', featuresHandler)
  .route('/', creditUnitsHandler)
  .route('/', entitlementsHandler)
  .route('/', inAppSubscriptionsHandler)
  .route('/', nonSubscriptionsHandler)
  .route('/', businessEntitiesHandler)
  .route('/', purchasesHandler)
  .route('/', paymentVouchersHandler)
  .route('/', csvTaxRulesHandler)
  .route('/', organizationDetailsHandler)
  .route('/', currenciesHandler)
  .route('/', rampsHandler)
  .route('/', paymentScheduleSchemesHandler)
  .route('/', pc2MigrationsHandler)
  .route('/', pc2MigrationItemFamiliesHandler)
  .route('/', pc2MigrationItemsHandler)
  .route('/', pc2MigrationItemPricesHandler)
  .route('/', pricingPageSessionsHandler)
  .route('/', sitePcMetaRecordsHandler)
  .route('/', omnichannelSubscriptionsHandler)
  .route('/', omnichannelSubscriptionItemsHandler)
  .route('/', recordedPurchasesHandler)
  .route('/', omnichannelOneTimeOrdersHandler)
  .route('/', rulesHandler)
  .route('/', retrySegmentsHandler)
  .route('/', metersHandler)
  .route('/', usageEventsHandler)
  .route('/', batchHandler)
  .route('/', meteredFeaturesHandler)
  .route('/', usageFilesHandler)
  .route('/', einvoicesHandler)
  .route('/', personalizedOffersHandler)
  .route('/', offerFulfillmentsHandler)
  .route('/', offerEventsHandler)
  .route('/', webhookEndpointsHandler)
  .route('/', businessRulesHandler)
  .route('/', businessRulesetsHandler)
  .route('/', alertsHandler)
  .route('/', collectionsPaymentPromisesHandler)
  .route('/', ledgerAccountBalancesHandler)
  .route('/', ledgerOperationsHandler)
  .route('/', grantBlocksHandler)
  .route('/', promotionalGrantsHandler)

export default app
