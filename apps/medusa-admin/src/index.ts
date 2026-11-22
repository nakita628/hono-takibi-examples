import { OpenAPIHono } from '@hono/zod-openapi'
import {
  apiKeysHandler,
  authHandler,
  authProviderHandler,
  campaignsHandler,
  claimsHandler,
  collectionsHandler,
  currenciesHandler,
  customerGroupsHandler,
  customersHandler,
  draftOrdersHandler,
  exchangesHandler,
  featureFlagsHandler,
  fulfillmentProvidersHandler,
  fulfillmentSetsHandler,
  fulfillmentsHandler,
  giftCardsHandler,
  indexHandler,
  inventoryItemsHandler,
  invitesHandler,
  layoutsHandler,
  localesHandler,
  modulesHandler,
  multiFactorAuthenticationHandler,
  notificationsHandler,
  orderChangesHandler,
  orderEditsHandler,
  ordersHandler,
  paymentCollectionsHandler,
  paymentsHandler,
  pluginsHandler,
  priceListsHandler,
  pricePreferencesHandler,
  productCategoriesHandler,
  productOptionsHandler,
  productsHandler,
  productTagsHandler,
  productTypesHandler,
  productVariantsHandler,
  promotionsHandler,
  propertyLabelsHandler,
  refundReasonsHandler,
  regionsHandler,
  reservationsHandler,
  returnReasonsHandler,
  returnsHandler,
  salesChannelsHandler,
  searchHandler,
  searchIndexesHandler,
  shippingOptionsHandler,
  shippingOptionTypesHandler,
  shippingProfilesHandler,
  stockLocationsHandler,
  storeCreditAccountsHandler,
  storesHandler,
  taxProvidersHandler,
  taxRatesHandler,
  taxRegionsHandler,
  translationsHandler,
  uploadsHandler,
  usersHandler,
  viewsHandler,
  workflowsExecutionsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', apiKeysHandler)
  .route('/', campaignsHandler)
  .route('/', claimsHandler)
  .route('/', collectionsHandler)
  .route('/', currenciesHandler)
  .route('/', customerGroupsHandler)
  .route('/', customersHandler)
  .route('/', draftOrdersHandler)
  .route('/', exchangesHandler)
  .route('/', featureFlagsHandler)
  .route('/', fulfillmentProvidersHandler)
  .route('/', fulfillmentSetsHandler)
  .route('/', fulfillmentsHandler)
  .route('/', giftCardsHandler)
  .route('/', indexHandler)
  .route('/', inventoryItemsHandler)
  .route('/', invitesHandler)
  .route('/', layoutsHandler)
  .route('/', localesHandler)
  .route('/', modulesHandler)
  .route('/', notificationsHandler)
  .route('/', orderChangesHandler)
  .route('/', orderEditsHandler)
  .route('/', ordersHandler)
  .route('/', paymentCollectionsHandler)
  .route('/', paymentsHandler)
  .route('/', pluginsHandler)
  .route('/', priceListsHandler)
  .route('/', pricePreferencesHandler)
  .route('/', productCategoriesHandler)
  .route('/', productOptionsHandler)
  .route('/', productTagsHandler)
  .route('/', productTypesHandler)
  .route('/', productVariantsHandler)
  .route('/', productsHandler)
  .route('/', promotionsHandler)
  .route('/', propertyLabelsHandler)
  .route('/', refundReasonsHandler)
  .route('/', regionsHandler)
  .route('/', reservationsHandler)
  .route('/', returnReasonsHandler)
  .route('/', returnsHandler)
  .route('/', salesChannelsHandler)
  .route('/', searchHandler)
  .route('/', searchIndexesHandler)
  .route('/', shippingOptionTypesHandler)
  .route('/', shippingOptionsHandler)
  .route('/', shippingProfilesHandler)
  .route('/', stockLocationsHandler)
  .route('/', storeCreditAccountsHandler)
  .route('/', storesHandler)
  .route('/', taxProvidersHandler)
  .route('/', taxRatesHandler)
  .route('/', taxRegionsHandler)
  .route('/', translationsHandler)
  .route('/', uploadsHandler)
  .route('/', usersHandler)
  .route('/', viewsHandler)
  .route('/', workflowsExecutionsHandler)
  .route('/', multiFactorAuthenticationHandler)
  .route('/', authHandler)
  .route('/', authProviderHandler)

export default app
