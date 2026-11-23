import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCheckoutDomainsDomainIdRoute,
  deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  deleteNotificationSettingsNotificationSettingIdRoute,
  getAccountRoute,
  getAdjustmentsAdjustmentIdCreditNoteRoute,
  getAdjustmentsRoute,
  getCheckoutDomainsDomainIdRoute,
  getCheckoutDomainsRoute,
  getClientTokensClientTokenIdRoute,
  getClientTokensRoute,
  getCountriesRoute,
  getCurrenciesRoute,
  getCustomersCustomerIdAddressesAddressIdRoute,
  getCustomersCustomerIdAddressesRoute,
  getCustomersCustomerIdBusinessesBusinessIdRoute,
  getCustomersCustomerIdBusinessesRoute,
  getCustomersCustomerIdCreditBalancesRoute,
  getCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
  getCustomersCustomerIdRoute,
  getCustomersRoute,
  getDiscountGroupsDiscountGroupIdRoute,
  getDiscountGroupsRoute,
  getDiscountsDiscountIdRoute,
  getDiscountsRoute,
  getEventsRoute,
  getEventTypesRoute,
  getIpsRoute,
  getMetricsActiveSubscribersRoute,
  getMetricsChargebacksRoute,
  getMetricsCheckoutConversionRoute,
  getMetricsExploreEntitiesRoute,
  getMetricsMonthlyRecurringRevenueChangeRoute,
  getMetricsMonthlyRecurringRevenueRoute,
  getMetricsRefundsRoute,
  getMetricsRevenueRoute,
  getNotificationSettingsNotificationSettingIdRoute,
  getNotificationSettingsRoute,
  getNotificationsNotificationIdLogsRoute,
  getNotificationsNotificationIdRoute,
  getNotificationsRoute,
  getPricesPriceIdRoute,
  getPricesRoute,
  getProductsProductIdRoute,
  getProductsRoute,
  getReportsReportIdDownloadUrlRoute,
  getReportsReportIdRoute,
  getReportsRoute,
  getRoute,
  getSettingsBalanceCurrencyRoute,
  getSettingsCheckoutFeaturesRoute,
  getSettingsCheckoutPaymentMethodsRoute,
  getSettingsCheckoutRecoveryRoute,
  getSettingsCheckoutStylesOverlayRoute,
  getSettingsCheckoutUrlRoute,
  getSettingsCurrencyConversionsRoute,
  getSettingsStatementDescriptorRoute,
  getSettingsTaxRoute,
  getSimulationsRoute,
  getSimulationsSimulationIdRoute,
  getSimulationsSimulationIdRunsRoute,
  getSimulationsSimulationIdRunsSimulationRunIdEventsRoute,
  getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRoute,
  getSimulationsSimulationIdRunsSimulationRunIdRoute,
  getSimulationTypesRoute,
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdHistoryRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRoute,
  getTransactionsRoute,
  getTransactionsTransactionIdInvoiceRoute,
  getTransactionsTransactionIdRoute,
  getVerificationsRoute,
  getVerificationsVerificationIdRoute,
  patchAccountRoute,
  patchClientTokensClientTokenIdRoute,
  patchCustomersCustomerIdAddressesAddressIdRoute,
  patchCustomersCustomerIdBusinessesBusinessIdRoute,
  patchCustomersCustomerIdRoute,
  patchDiscountGroupsDiscountGroupIdRoute,
  patchDiscountsDiscountIdRoute,
  patchNotificationSettingsNotificationSettingIdRoute,
  patchPricesPriceIdRoute,
  patchProductsProductIdRoute,
  patchSettingsBalanceCurrencyRoute,
  patchSettingsCheckoutFeaturesRoute,
  patchSettingsCheckoutPaymentMethodsRoute,
  patchSettingsCheckoutRecoveryRoute,
  patchSettingsCheckoutStylesOverlayRoute,
  patchSettingsCheckoutUrlRoute,
  patchSettingsCurrencyConversionsRoute,
  patchSettingsStatementDescriptorRoute,
  patchSettingsTaxRoute,
  patchSimulationsSimulationIdRoute,
  patchSubscriptionsSubscriptionIdPreviewRoute,
  patchSubscriptionsSubscriptionIdRoute,
  patchTransactionsTransactionIdRoute,
  postAdjustmentsRoute,
  postCheckoutDomainsDomainIdVerifyPaymentMethodRoute,
  postClientTokensRoute,
  postCustomersCustomerIdAddressesRoute,
  postCustomersCustomerIdAuthTokenRoute,
  postCustomersCustomerIdBusinessesRoute,
  postCustomersCustomerIdPortalSessionsRoute,
  postCustomersRoute,
  postDiscountGroupsRoute,
  postDiscountsRoute,
  postMetricsExploreRoute,
  postNotificationSettingsRoute,
  postNotificationsNotificationIdReplayRoute,
  postPricesRoute,
  postPricingPreviewRoute,
  postProductsRoute,
  postReportsRoute,
  postSimulationsRoute,
  postSimulationsSimulationIdRunsRoute,
  postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRoute,
  postSubscriptionsSubscriptionIdActivateRoute,
  postSubscriptionsSubscriptionIdCancelRoute,
  postSubscriptionsSubscriptionIdChargePreviewRoute,
  postSubscriptionsSubscriptionIdChargeRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
  postTransactionsPreviewRoute,
  postTransactionsRoute,
  postTransactionsTransactionIdReviseRoute,
} from './routes'
import {
  deleteCheckoutDomainsDomainIdRouteHandler,
  deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  deleteNotificationSettingsNotificationSettingIdRouteHandler,
  getAccountRouteHandler,
  getAdjustmentsAdjustmentIdCreditNoteRouteHandler,
  getAdjustmentsRouteHandler,
  getCheckoutDomainsDomainIdRouteHandler,
  getCheckoutDomainsRouteHandler,
  getClientTokensClientTokenIdRouteHandler,
  getClientTokensRouteHandler,
  getCountriesRouteHandler,
  getCurrenciesRouteHandler,
  getCustomersCustomerIdAddressesAddressIdRouteHandler,
  getCustomersCustomerIdAddressesRouteHandler,
  getCustomersCustomerIdBusinessesBusinessIdRouteHandler,
  getCustomersCustomerIdBusinessesRouteHandler,
  getCustomersCustomerIdCreditBalancesRouteHandler,
  getCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  getCustomersCustomerIdPaymentMethodsRouteHandler,
  getCustomersCustomerIdRouteHandler,
  getCustomersRouteHandler,
  getDiscountGroupsDiscountGroupIdRouteHandler,
  getDiscountGroupsRouteHandler,
  getDiscountsDiscountIdRouteHandler,
  getDiscountsRouteHandler,
  getEventsRouteHandler,
  getEventTypesRouteHandler,
  getIpsRouteHandler,
  getMetricsActiveSubscribersRouteHandler,
  getMetricsChargebacksRouteHandler,
  getMetricsCheckoutConversionRouteHandler,
  getMetricsExploreEntitiesRouteHandler,
  getMetricsMonthlyRecurringRevenueChangeRouteHandler,
  getMetricsMonthlyRecurringRevenueRouteHandler,
  getMetricsRefundsRouteHandler,
  getMetricsRevenueRouteHandler,
  getNotificationSettingsNotificationSettingIdRouteHandler,
  getNotificationSettingsRouteHandler,
  getNotificationsNotificationIdLogsRouteHandler,
  getNotificationsNotificationIdRouteHandler,
  getNotificationsRouteHandler,
  getPricesPriceIdRouteHandler,
  getPricesRouteHandler,
  getProductsProductIdRouteHandler,
  getProductsRouteHandler,
  getReportsReportIdDownloadUrlRouteHandler,
  getReportsReportIdRouteHandler,
  getReportsRouteHandler,
  getRouteHandler,
  getSettingsBalanceCurrencyRouteHandler,
  getSettingsCheckoutFeaturesRouteHandler,
  getSettingsCheckoutPaymentMethodsRouteHandler,
  getSettingsCheckoutRecoveryRouteHandler,
  getSettingsCheckoutStylesOverlayRouteHandler,
  getSettingsCheckoutUrlRouteHandler,
  getSettingsCurrencyConversionsRouteHandler,
  getSettingsStatementDescriptorRouteHandler,
  getSettingsTaxRouteHandler,
  getSimulationsRouteHandler,
  getSimulationsSimulationIdRouteHandler,
  getSimulationsSimulationIdRunsRouteHandler,
  getSimulationsSimulationIdRunsSimulationRunIdEventsRouteHandler,
  getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRouteHandler,
  getSimulationsSimulationIdRunsSimulationRunIdRouteHandler,
  getSimulationTypesRouteHandler,
  getSubscriptionsRouteHandler,
  getSubscriptionsSubscriptionIdHistoryRouteHandler,
  getSubscriptionsSubscriptionIdRouteHandler,
  getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRouteHandler,
  getTransactionsRouteHandler,
  getTransactionsTransactionIdInvoiceRouteHandler,
  getTransactionsTransactionIdRouteHandler,
  getVerificationsRouteHandler,
  getVerificationsVerificationIdRouteHandler,
  patchAccountRouteHandler,
  patchClientTokensClientTokenIdRouteHandler,
  patchCustomersCustomerIdAddressesAddressIdRouteHandler,
  patchCustomersCustomerIdBusinessesBusinessIdRouteHandler,
  patchCustomersCustomerIdRouteHandler,
  patchDiscountGroupsDiscountGroupIdRouteHandler,
  patchDiscountsDiscountIdRouteHandler,
  patchNotificationSettingsNotificationSettingIdRouteHandler,
  patchPricesPriceIdRouteHandler,
  patchProductsProductIdRouteHandler,
  patchSettingsBalanceCurrencyRouteHandler,
  patchSettingsCheckoutFeaturesRouteHandler,
  patchSettingsCheckoutPaymentMethodsRouteHandler,
  patchSettingsCheckoutRecoveryRouteHandler,
  patchSettingsCheckoutStylesOverlayRouteHandler,
  patchSettingsCheckoutUrlRouteHandler,
  patchSettingsCurrencyConversionsRouteHandler,
  patchSettingsStatementDescriptorRouteHandler,
  patchSettingsTaxRouteHandler,
  patchSimulationsSimulationIdRouteHandler,
  patchSubscriptionsSubscriptionIdPreviewRouteHandler,
  patchSubscriptionsSubscriptionIdRouteHandler,
  patchTransactionsTransactionIdRouteHandler,
  postAdjustmentsRouteHandler,
  postCheckoutDomainsDomainIdVerifyPaymentMethodRouteHandler,
  postClientTokensRouteHandler,
  postCustomersCustomerIdAddressesRouteHandler,
  postCustomersCustomerIdAuthTokenRouteHandler,
  postCustomersCustomerIdBusinessesRouteHandler,
  postCustomersCustomerIdPortalSessionsRouteHandler,
  postCustomersRouteHandler,
  postDiscountGroupsRouteHandler,
  postDiscountsRouteHandler,
  postMetricsExploreRouteHandler,
  postNotificationSettingsRouteHandler,
  postNotificationsNotificationIdReplayRouteHandler,
  postPricesRouteHandler,
  postPricingPreviewRouteHandler,
  postProductsRouteHandler,
  postReportsRouteHandler,
  postSimulationsRouteHandler,
  postSimulationsSimulationIdRunsRouteHandler,
  postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRouteHandler,
  postSubscriptionsSubscriptionIdActivateRouteHandler,
  postSubscriptionsSubscriptionIdCancelRouteHandler,
  postSubscriptionsSubscriptionIdChargePreviewRouteHandler,
  postSubscriptionsSubscriptionIdChargeRouteHandler,
  postSubscriptionsSubscriptionIdPauseRouteHandler,
  postSubscriptionsSubscriptionIdResumeRouteHandler,
  postTransactionsPreviewRouteHandler,
  postTransactionsRouteHandler,
  postTransactionsTransactionIdReviseRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountRoute, getAccountRouteHandler)
  .openapi(patchAccountRoute, patchAccountRouteHandler)
  .openapi(getCustomersCustomerIdAddressesRoute, getCustomersCustomerIdAddressesRouteHandler)
  .openapi(postCustomersCustomerIdAddressesRoute, postCustomersCustomerIdAddressesRouteHandler)
  .openapi(
    getCustomersCustomerIdAddressesAddressIdRoute,
    getCustomersCustomerIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    patchCustomersCustomerIdAddressesAddressIdRoute,
    patchCustomersCustomerIdAddressesAddressIdRouteHandler,
  )
  .openapi(getAdjustmentsRoute, getAdjustmentsRouteHandler)
  .openapi(postAdjustmentsRoute, postAdjustmentsRouteHandler)
  .openapi(
    getAdjustmentsAdjustmentIdCreditNoteRoute,
    getAdjustmentsAdjustmentIdCreditNoteRouteHandler,
  )
  .openapi(getSettingsBalanceCurrencyRoute, getSettingsBalanceCurrencyRouteHandler)
  .openapi(patchSettingsBalanceCurrencyRoute, patchSettingsBalanceCurrencyRouteHandler)
  .openapi(getCustomersCustomerIdBusinessesRoute, getCustomersCustomerIdBusinessesRouteHandler)
  .openapi(postCustomersCustomerIdBusinessesRoute, postCustomersCustomerIdBusinessesRouteHandler)
  .openapi(
    getCustomersCustomerIdBusinessesBusinessIdRoute,
    getCustomersCustomerIdBusinessesBusinessIdRouteHandler,
  )
  .openapi(
    patchCustomersCustomerIdBusinessesBusinessIdRoute,
    patchCustomersCustomerIdBusinessesBusinessIdRouteHandler,
  )
  .openapi(getCheckoutDomainsRoute, getCheckoutDomainsRouteHandler)
  .openapi(getCheckoutDomainsDomainIdRoute, getCheckoutDomainsDomainIdRouteHandler)
  .openapi(deleteCheckoutDomainsDomainIdRoute, deleteCheckoutDomainsDomainIdRouteHandler)
  .openapi(
    postCheckoutDomainsDomainIdVerifyPaymentMethodRoute,
    postCheckoutDomainsDomainIdVerifyPaymentMethodRouteHandler,
  )
  .openapi(getSettingsCheckoutFeaturesRoute, getSettingsCheckoutFeaturesRouteHandler)
  .openapi(patchSettingsCheckoutFeaturesRoute, patchSettingsCheckoutFeaturesRouteHandler)
  .openapi(getSettingsCheckoutPaymentMethodsRoute, getSettingsCheckoutPaymentMethodsRouteHandler)
  .openapi(
    patchSettingsCheckoutPaymentMethodsRoute,
    patchSettingsCheckoutPaymentMethodsRouteHandler,
  )
  .openapi(getSettingsCheckoutRecoveryRoute, getSettingsCheckoutRecoveryRouteHandler)
  .openapi(patchSettingsCheckoutRecoveryRoute, patchSettingsCheckoutRecoveryRouteHandler)
  .openapi(getSettingsCheckoutStylesOverlayRoute, getSettingsCheckoutStylesOverlayRouteHandler)
  .openapi(patchSettingsCheckoutStylesOverlayRoute, patchSettingsCheckoutStylesOverlayRouteHandler)
  .openapi(getSettingsCheckoutUrlRoute, getSettingsCheckoutUrlRouteHandler)
  .openapi(patchSettingsCheckoutUrlRoute, patchSettingsCheckoutUrlRouteHandler)
  .openapi(getClientTokensRoute, getClientTokensRouteHandler)
  .openapi(postClientTokensRoute, postClientTokensRouteHandler)
  .openapi(getClientTokensClientTokenIdRoute, getClientTokensClientTokenIdRouteHandler)
  .openapi(patchClientTokensClientTokenIdRoute, patchClientTokensClientTokenIdRouteHandler)
  .openapi(getCountriesRoute, getCountriesRouteHandler)
  .openapi(getCurrenciesRoute, getCurrenciesRouteHandler)
  .openapi(getSettingsCurrencyConversionsRoute, getSettingsCurrencyConversionsRouteHandler)
  .openapi(patchSettingsCurrencyConversionsRoute, patchSettingsCurrencyConversionsRouteHandler)
  .openapi(getCustomersRoute, getCustomersRouteHandler)
  .openapi(postCustomersRoute, postCustomersRouteHandler)
  .openapi(getCustomersCustomerIdRoute, getCustomersCustomerIdRouteHandler)
  .openapi(patchCustomersCustomerIdRoute, patchCustomersCustomerIdRouteHandler)
  .openapi(
    getCustomersCustomerIdCreditBalancesRoute,
    getCustomersCustomerIdCreditBalancesRouteHandler,
  )
  .openapi(postCustomersCustomerIdAuthTokenRoute, postCustomersCustomerIdAuthTokenRouteHandler)
  .openapi(
    postCustomersCustomerIdPortalSessionsRoute,
    postCustomersCustomerIdPortalSessionsRouteHandler,
  )
  .openapi(getDiscountGroupsRoute, getDiscountGroupsRouteHandler)
  .openapi(postDiscountGroupsRoute, postDiscountGroupsRouteHandler)
  .openapi(getDiscountGroupsDiscountGroupIdRoute, getDiscountGroupsDiscountGroupIdRouteHandler)
  .openapi(patchDiscountGroupsDiscountGroupIdRoute, patchDiscountGroupsDiscountGroupIdRouteHandler)
  .openapi(getDiscountsRoute, getDiscountsRouteHandler)
  .openapi(postDiscountsRoute, postDiscountsRouteHandler)
  .openapi(getDiscountsDiscountIdRoute, getDiscountsDiscountIdRouteHandler)
  .openapi(patchDiscountsDiscountIdRoute, patchDiscountsDiscountIdRouteHandler)
  .openapi(getEventTypesRoute, getEventTypesRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getIpsRoute, getIpsRouteHandler)
  .openapi(getMetricsExploreEntitiesRoute, getMetricsExploreEntitiesRouteHandler)
  .openapi(postMetricsExploreRoute, postMetricsExploreRouteHandler)
  .openapi(getMetricsMonthlyRecurringRevenueRoute, getMetricsMonthlyRecurringRevenueRouteHandler)
  .openapi(getMetricsActiveSubscribersRoute, getMetricsActiveSubscribersRouteHandler)
  .openapi(
    getMetricsMonthlyRecurringRevenueChangeRoute,
    getMetricsMonthlyRecurringRevenueChangeRouteHandler,
  )
  .openapi(getMetricsRevenueRoute, getMetricsRevenueRouteHandler)
  .openapi(getMetricsRefundsRoute, getMetricsRefundsRouteHandler)
  .openapi(getMetricsChargebacksRoute, getMetricsChargebacksRouteHandler)
  .openapi(getMetricsCheckoutConversionRoute, getMetricsCheckoutConversionRouteHandler)
  .openapi(getNotificationSettingsRoute, getNotificationSettingsRouteHandler)
  .openapi(postNotificationSettingsRoute, postNotificationSettingsRouteHandler)
  .openapi(
    getNotificationSettingsNotificationSettingIdRoute,
    getNotificationSettingsNotificationSettingIdRouteHandler,
  )
  .openapi(
    patchNotificationSettingsNotificationSettingIdRoute,
    patchNotificationSettingsNotificationSettingIdRouteHandler,
  )
  .openapi(
    deleteNotificationSettingsNotificationSettingIdRoute,
    deleteNotificationSettingsNotificationSettingIdRouteHandler,
  )
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(getNotificationsNotificationIdRoute, getNotificationsNotificationIdRouteHandler)
  .openapi(getNotificationsNotificationIdLogsRoute, getNotificationsNotificationIdLogsRouteHandler)
  .openapi(
    postNotificationsNotificationIdReplayRoute,
    postNotificationsNotificationIdReplayRouteHandler,
  )
  .openapi(
    getCustomersCustomerIdPaymentMethodsRoute,
    getCustomersCustomerIdPaymentMethodsRouteHandler,
  )
  .openapi(
    getCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
    getCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(
    deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
    deleteCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(getPricesRoute, getPricesRouteHandler)
  .openapi(postPricesRoute, postPricesRouteHandler)
  .openapi(getPricesPriceIdRoute, getPricesPriceIdRouteHandler)
  .openapi(patchPricesPriceIdRoute, patchPricesPriceIdRouteHandler)
  .openapi(postPricingPreviewRoute, postPricingPreviewRouteHandler)
  .openapi(getProductsRoute, getProductsRouteHandler)
  .openapi(postProductsRoute, postProductsRouteHandler)
  .openapi(getProductsProductIdRoute, getProductsProductIdRouteHandler)
  .openapi(patchProductsProductIdRoute, patchProductsProductIdRouteHandler)
  .openapi(getReportsRoute, getReportsRouteHandler)
  .openapi(postReportsRoute, postReportsRouteHandler)
  .openapi(getReportsReportIdRoute, getReportsReportIdRouteHandler)
  .openapi(getReportsReportIdDownloadUrlRoute, getReportsReportIdDownloadUrlRouteHandler)
  .openapi(getRoute, getRouteHandler)
  .openapi(getSettingsStatementDescriptorRoute, getSettingsStatementDescriptorRouteHandler)
  .openapi(patchSettingsStatementDescriptorRoute, patchSettingsStatementDescriptorRouteHandler)
  .openapi(getSimulationTypesRoute, getSimulationTypesRouteHandler)
  .openapi(getSimulationsRoute, getSimulationsRouteHandler)
  .openapi(postSimulationsRoute, postSimulationsRouteHandler)
  .openapi(getSimulationsSimulationIdRoute, getSimulationsSimulationIdRouteHandler)
  .openapi(patchSimulationsSimulationIdRoute, patchSimulationsSimulationIdRouteHandler)
  .openapi(getSimulationsSimulationIdRunsRoute, getSimulationsSimulationIdRunsRouteHandler)
  .openapi(postSimulationsSimulationIdRunsRoute, postSimulationsSimulationIdRunsRouteHandler)
  .openapi(
    getSimulationsSimulationIdRunsSimulationRunIdRoute,
    getSimulationsSimulationIdRunsSimulationRunIdRouteHandler,
  )
  .openapi(
    getSimulationsSimulationIdRunsSimulationRunIdEventsRoute,
    getSimulationsSimulationIdRunsSimulationRunIdEventsRouteHandler,
  )
  .openapi(
    getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRoute,
    getSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdRouteHandler,
  )
  .openapi(
    postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRoute,
    postSimulationsSimulationIdRunsSimulationRunIdEventsSimulationEventIdReplayRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdHistoryRoute,
    getSubscriptionsSubscriptionIdHistoryRouteHandler,
  )
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(patchSubscriptionsSubscriptionIdRoute, patchSubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    postSubscriptionsSubscriptionIdCancelRoute,
    postSubscriptionsSubscriptionIdCancelRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdPauseRoute,
    postSubscriptionsSubscriptionIdPauseRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdResumeRoute,
    postSubscriptionsSubscriptionIdResumeRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdActivateRoute,
    postSubscriptionsSubscriptionIdActivateRouteHandler,
  )
  .openapi(
    getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRoute,
    getSubscriptionsSubscriptionIdUpdatePaymentMethodTransactionRouteHandler,
  )
  .openapi(
    patchSubscriptionsSubscriptionIdPreviewRoute,
    patchSubscriptionsSubscriptionIdPreviewRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdChargeRoute,
    postSubscriptionsSubscriptionIdChargeRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdChargePreviewRoute,
    postSubscriptionsSubscriptionIdChargePreviewRouteHandler,
  )
  .openapi(getSettingsTaxRoute, getSettingsTaxRouteHandler)
  .openapi(patchSettingsTaxRoute, patchSettingsTaxRouteHandler)
  .openapi(getTransactionsRoute, getTransactionsRouteHandler)
  .openapi(postTransactionsRoute, postTransactionsRouteHandler)
  .openapi(getTransactionsTransactionIdRoute, getTransactionsTransactionIdRouteHandler)
  .openapi(patchTransactionsTransactionIdRoute, patchTransactionsTransactionIdRouteHandler)
  .openapi(postTransactionsPreviewRoute, postTransactionsPreviewRouteHandler)
  .openapi(
    postTransactionsTransactionIdReviseRoute,
    postTransactionsTransactionIdReviseRouteHandler,
  )
  .openapi(
    getTransactionsTransactionIdInvoiceRoute,
    getTransactionsTransactionIdInvoiceRouteHandler,
  )
  .openapi(getVerificationsRoute, getVerificationsRouteHandler)
  .openapi(getVerificationsVerificationIdRoute, getVerificationsVerificationIdRouteHandler)

export default app
