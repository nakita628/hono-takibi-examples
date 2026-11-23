import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAddOnsCodeRoute,
  deleteBillableMetricsCodeRoute,
  deleteCouponsCodeRoute,
  deleteCreditNotesLagoIdMetadataKeyRoute,
  deleteCreditNotesLagoIdMetadataRoute,
  deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdRoute,
  deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRoute,
  deleteCustomersExternalCustomerIdRoute,
  deleteCustomersExternalCustomerIdWalletsCodeRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRoute,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  deleteFeaturesCodePrivilegesPrivilegeCodeRoute,
  deleteFeaturesCodeRoute,
  deleteFeesLagoIdRoute,
  deleteInvoicesLagoIdRoute,
  deletePlansCodeChargesChargeCodeFiltersFilterIdRoute,
  deletePlansCodeChargesChargeCodeRoute,
  deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
  deletePlansCodeEntitlementsFeatureCodeRoute,
  deletePlansCodeFixedChargesFixedChargeCodeRoute,
  deletePlansCodeMetadataKeyRoute,
  deletePlansCodeMetadataRoute,
  deletePlansCodeRoute,
  deleteSubscriptionsExternalIdAlertsCodeRoute,
  deleteSubscriptionsExternalIdAlertsRoute,
  deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
  deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
  deleteSubscriptionsExternalIdEntitlementsFeatureCodeRoute,
  deleteSubscriptionsExternalIdRoute,
  deleteTaxesCodeRoute,
  deleteUsageAttributionTypesCodeRoute,
  deleteWalletsLagoIdMetadataKeyRoute,
  deleteWalletsLagoIdMetadataRoute,
  deleteWalletsLagoIdRoute,
  deleteWebhookEndpointsLagoIdRoute,
  getActivityLogsActivityIdRoute,
  getActivityLogsRoute,
  getAddOnsCodeRoute,
  getAddOnsRoute,
  getAnalyticsGrossRevenueRoute,
  getAnalyticsInvoiceCollectionRoute,
  getAnalyticsInvoicedUsageRoute,
  getAnalyticsMrrRoute,
  getAnalyticsOverdueBalanceRoute,
  getAnalyticsUsageRoute,
  getApiLogsRequestIdRoute,
  getApiLogsRoute,
  getAppliedCouponsRoute,
  getBillableMetricsCodeRoute,
  getBillableMetricsRoute,
  getBillingEntitiesCodeRoute,
  getBillingEntitiesRoute,
  getCouponsCodeRoute,
  getCouponsRoute,
  getCreditNotesLagoIdRoute,
  getCreditNotesRoute,
  getCustomersExternalCustomerIdAppliedCouponsRoute,
  getCustomersExternalCustomerIdAttributedUsageRoute,
  getCustomersExternalCustomerIdCreditNotesRoute,
  getCustomersExternalCustomerIdCurrentUsageRoute,
  getCustomersExternalCustomerIdInvoicesRoute,
  getCustomersExternalCustomerIdPastUsageRoute,
  getCustomersExternalCustomerIdPaymentMethodsRoute,
  getCustomersExternalCustomerIdPaymentRequestsRoute,
  getCustomersExternalCustomerIdPaymentsRoute,
  getCustomersExternalCustomerIdPortalUrlRoute,
  getCustomersExternalCustomerIdProjectedUsageRoute,
  getCustomersExternalCustomerIdRoute,
  getCustomersExternalCustomerIdSubscriptionsRoute,
  getCustomersExternalCustomerIdWalletsCodeRoute,
  getCustomersExternalCustomerIdWalletsRoute,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  getCustomersRoute,
  getEventsRoute,
  getEventsTransactionIdRoute,
  getFeaturesCodeRoute,
  getFeaturesRoute,
  getFeesLagoIdRoute,
  getFeesRoute,
  getInvoicesLagoIdRoute,
  getInvoicesRoute,
  getOrderFormsLagoIdRoute,
  getOrderFormsRoute,
  getOrdersLagoIdRoute,
  getOrdersRoute,
  getOrganizationsRoute,
  getPaymentReceiptsLagoIdRoute,
  getPaymentReceiptsRoute,
  getPaymentRequestsLagoIdRoute,
  getPaymentRequestsRoute,
  getPaymentsLagoIdRoute,
  getPaymentsRoute,
  getPlansCodeChargesChargeCodeFiltersFilterIdRoute,
  getPlansCodeChargesChargeCodeFiltersRoute,
  getPlansCodeChargesChargeCodeRoute,
  getPlansCodeChargesRoute,
  getPlansCodeEntitlementsFeatureCodeRoute,
  getPlansCodeEntitlementsRoute,
  getPlansCodeFixedChargesFixedChargeCodeRoute,
  getPlansCodeFixedChargesRoute,
  getPlansCodeRoute,
  getPlansRoute,
  getQuotesLagoIdRoute,
  getQuotesLagoIdVersionsRoute,
  getQuotesRoute,
  getQuoteVersionsLagoIdRoute,
  getSubscriptionsExternalIdAlertsCodeRoute,
  getSubscriptionsExternalIdAlertsRoute,
  getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
  getSubscriptionsExternalIdChargesChargeCodeFiltersRoute,
  getSubscriptionsExternalIdChargesChargeCodeRoute,
  getSubscriptionsExternalIdChargesRoute,
  getSubscriptionsExternalIdEntitlementsRoute,
  getSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute,
  getSubscriptionsExternalIdFixedChargesRoute,
  getSubscriptionsExternalIdLifetimeUsageRoute,
  getSubscriptionsExternalIdRoute,
  getSubscriptionsRoute,
  getTaxesCodeRoute,
  getTaxesRoute,
  getUsageAttributionTypesCodeRoute,
  getUsageAttributionTypesRoute,
  getWalletsLagoIdRoute,
  getWalletsLagoIdWalletTransactionsRoute,
  getWalletsRoute,
  getWalletTransactionsLagoIdConsumptionsRoute,
  getWalletTransactionsLagoIdFundingsRoute,
  getWalletTransactionsLagoIdRoute,
  getWebhookEndpointsLagoIdRoute,
  getWebhookEndpointsRoute,
  getWebhooksJsonPublicKeyRoute,
  getWebhooksPublicKeyRoute,
  patchCreditNotesLagoIdMetadataRoute,
  patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  patchPlansCodeEntitlementsRoute,
  patchPlansCodeMetadataRoute,
  patchSubscriptionsExternalIdEntitlementsRoute,
  patchWalletsLagoIdMetadataRoute,
  postAddOnsRoute,
  postAppliedCouponsRoute,
  postBillableMetricsEvaluateExpressionRoute,
  postBillableMetricsRoute,
  postBillingEntitiesRoute,
  postCouponsRoute,
  postCreditNotesEstimateRoute,
  postCreditNotesLagoIdDownloadRoute,
  postCreditNotesLagoIdDownloadXmlRoute,
  postCreditNotesLagoIdMetadataRoute,
  postCreditNotesRoute,
  postCustomersExternalCustomerIdCheckoutUrlRoute,
  postCustomersExternalCustomerIdWalletsRoute,
  postCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
  postCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
  postCustomersRoute,
  postEventsBatchEstimateInstantFeesRoute,
  postEventsBatchRoute,
  postEventsEstimateFeesRoute,
  postEventsEstimateInstantFeesRoute,
  postEventsRoute,
  postFeaturesRoute,
  postInvoicesLagoIdDownloadRoute,
  postInvoicesLagoIdDownloadXmlRoute,
  postInvoicesLagoIdLoseDisputeRoute,
  postInvoicesLagoIdPaymentUrlRoute,
  postInvoicesLagoIdRetryPaymentRoute,
  postInvoicesLagoIdRetryRoute,
  postInvoicesLagoIdVoidRoute,
  postInvoicesPreviewRoute,
  postInvoicesRoute,
  postOrderFormsLagoIdMarkAsSignedRoute,
  postOrderFormsLagoIdVoidRoute,
  postOrdersLagoIdExecuteRoute,
  postPaymentRequestsRoute,
  postPaymentsRoute,
  postPlansCodeChargesChargeCodeFiltersRoute,
  postPlansCodeChargesRoute,
  postPlansCodeEntitlementsRoute,
  postPlansCodeFixedChargesRoute,
  postPlansCodeMetadataRoute,
  postPlansRoute,
  postQuoteVersionsLagoIdApproveRoute,
  postQuoteVersionsLagoIdCloneRoute,
  postQuoteVersionsLagoIdVoidRoute,
  postSubscriptionsExternalIdAlertsRoute,
  postSubscriptionsExternalIdChargesChargeCodeFiltersRoute,
  postSubscriptionsRoute,
  postTaxesRoute,
  postUsageAttributionTypesRoute,
  postWalletsLagoIdMetadataRoute,
  postWalletsRoute,
  postWalletTransactionsLagoIdPaymentUrlRoute,
  postWalletTransactionsRoute,
  postWebhookEndpointsRoute,
  putAddOnsCodeRoute,
  putBillableMetricsCodeRoute,
  putBillingEntitiesCodeRoute,
  putCouponsCodeRoute,
  putCreditNotesLagoIdRoute,
  putCreditNotesLagoIdVoidRoute,
  putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRoute,
  putCustomersExternalCustomerIdWalletsCodeRoute,
  putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
  putFeaturesCodeRoute,
  putFeesLagoIdRoute,
  putInvoicesLagoIdFinalizeRoute,
  putInvoicesLagoIdRefreshRoute,
  putInvoicesLagoIdRoute,
  putOrganizationsRoute,
  putPlansCodeChargesChargeCodeFiltersFilterIdRoute,
  putPlansCodeChargesChargeCodeRoute,
  putPlansCodeFixedChargesFixedChargeCodeRoute,
  putPlansCodeRoute,
  putSubscriptionsExternalIdAlertsCodeRoute,
  putSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
  putSubscriptionsExternalIdChargesChargeCodeRoute,
  putSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute,
  putSubscriptionsExternalIdLifetimeUsageRoute,
  putSubscriptionsExternalIdRoute,
  putTaxesCodeRoute,
  putUsageAttributionTypesCodeRoute,
  putWalletsLagoIdRoute,
  putWebhookEndpointsLagoIdRoute,
} from './routes'
import {
  deleteAddOnsCodeRouteHandler,
  deleteBillableMetricsCodeRouteHandler,
  deleteCouponsCodeRouteHandler,
  deleteCreditNotesLagoIdMetadataKeyRouteHandler,
  deleteCreditNotesLagoIdMetadataRouteHandler,
  deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdRouteHandler,
  deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRouteHandler,
  deleteCustomersExternalCustomerIdRouteHandler,
  deleteCustomersExternalCustomerIdWalletsCodeRouteHandler,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRouteHandler,
  deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRouteHandler,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRouteHandler,
  deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRouteHandler,
  deleteFeaturesCodePrivilegesPrivilegeCodeRouteHandler,
  deleteFeaturesCodeRouteHandler,
  deleteFeesLagoIdRouteHandler,
  deleteInvoicesLagoIdRouteHandler,
  deletePlansCodeChargesChargeCodeFiltersFilterIdRouteHandler,
  deletePlansCodeChargesChargeCodeRouteHandler,
  deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeRouteHandler,
  deletePlansCodeEntitlementsFeatureCodeRouteHandler,
  deletePlansCodeFixedChargesFixedChargeCodeRouteHandler,
  deletePlansCodeMetadataKeyRouteHandler,
  deletePlansCodeMetadataRouteHandler,
  deletePlansCodeRouteHandler,
  deleteSubscriptionsExternalIdAlertsCodeRouteHandler,
  deleteSubscriptionsExternalIdAlertsRouteHandler,
  deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRouteHandler,
  deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeRouteHandler,
  deleteSubscriptionsExternalIdEntitlementsFeatureCodeRouteHandler,
  deleteSubscriptionsExternalIdRouteHandler,
  deleteTaxesCodeRouteHandler,
  deleteUsageAttributionTypesCodeRouteHandler,
  deleteWalletsLagoIdMetadataKeyRouteHandler,
  deleteWalletsLagoIdMetadataRouteHandler,
  deleteWalletsLagoIdRouteHandler,
  deleteWebhookEndpointsLagoIdRouteHandler,
  getActivityLogsActivityIdRouteHandler,
  getActivityLogsRouteHandler,
  getAddOnsCodeRouteHandler,
  getAddOnsRouteHandler,
  getAnalyticsGrossRevenueRouteHandler,
  getAnalyticsInvoiceCollectionRouteHandler,
  getAnalyticsInvoicedUsageRouteHandler,
  getAnalyticsMrrRouteHandler,
  getAnalyticsOverdueBalanceRouteHandler,
  getAnalyticsUsageRouteHandler,
  getApiLogsRequestIdRouteHandler,
  getApiLogsRouteHandler,
  getAppliedCouponsRouteHandler,
  getBillableMetricsCodeRouteHandler,
  getBillableMetricsRouteHandler,
  getBillingEntitiesCodeRouteHandler,
  getBillingEntitiesRouteHandler,
  getCouponsCodeRouteHandler,
  getCouponsRouteHandler,
  getCreditNotesLagoIdRouteHandler,
  getCreditNotesRouteHandler,
  getCustomersExternalCustomerIdAppliedCouponsRouteHandler,
  getCustomersExternalCustomerIdAttributedUsageRouteHandler,
  getCustomersExternalCustomerIdCreditNotesRouteHandler,
  getCustomersExternalCustomerIdCurrentUsageRouteHandler,
  getCustomersExternalCustomerIdInvoicesRouteHandler,
  getCustomersExternalCustomerIdPastUsageRouteHandler,
  getCustomersExternalCustomerIdPaymentMethodsRouteHandler,
  getCustomersExternalCustomerIdPaymentRequestsRouteHandler,
  getCustomersExternalCustomerIdPaymentsRouteHandler,
  getCustomersExternalCustomerIdPortalUrlRouteHandler,
  getCustomersExternalCustomerIdProjectedUsageRouteHandler,
  getCustomersExternalCustomerIdRouteHandler,
  getCustomersExternalCustomerIdSubscriptionsRouteHandler,
  getCustomersExternalCustomerIdWalletsCodeRouteHandler,
  getCustomersExternalCustomerIdWalletsRouteHandler,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRouteHandler,
  getCustomersExternalCustomerIdWalletsWalletCodeAlertsRouteHandler,
  getCustomersRouteHandler,
  getEventsRouteHandler,
  getEventsTransactionIdRouteHandler,
  getFeaturesCodeRouteHandler,
  getFeaturesRouteHandler,
  getFeesLagoIdRouteHandler,
  getFeesRouteHandler,
  getInvoicesLagoIdRouteHandler,
  getInvoicesRouteHandler,
  getOrderFormsLagoIdRouteHandler,
  getOrderFormsRouteHandler,
  getOrdersLagoIdRouteHandler,
  getOrdersRouteHandler,
  getOrganizationsRouteHandler,
  getPaymentReceiptsLagoIdRouteHandler,
  getPaymentReceiptsRouteHandler,
  getPaymentRequestsLagoIdRouteHandler,
  getPaymentRequestsRouteHandler,
  getPaymentsLagoIdRouteHandler,
  getPaymentsRouteHandler,
  getPlansCodeChargesChargeCodeFiltersFilterIdRouteHandler,
  getPlansCodeChargesChargeCodeFiltersRouteHandler,
  getPlansCodeChargesChargeCodeRouteHandler,
  getPlansCodeChargesRouteHandler,
  getPlansCodeEntitlementsFeatureCodeRouteHandler,
  getPlansCodeEntitlementsRouteHandler,
  getPlansCodeFixedChargesFixedChargeCodeRouteHandler,
  getPlansCodeFixedChargesRouteHandler,
  getPlansCodeRouteHandler,
  getPlansRouteHandler,
  getQuotesLagoIdRouteHandler,
  getQuotesLagoIdVersionsRouteHandler,
  getQuotesRouteHandler,
  getQuoteVersionsLagoIdRouteHandler,
  getSubscriptionsExternalIdAlertsCodeRouteHandler,
  getSubscriptionsExternalIdAlertsRouteHandler,
  getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRouteHandler,
  getSubscriptionsExternalIdChargesChargeCodeFiltersRouteHandler,
  getSubscriptionsExternalIdChargesChargeCodeRouteHandler,
  getSubscriptionsExternalIdChargesRouteHandler,
  getSubscriptionsExternalIdEntitlementsRouteHandler,
  getSubscriptionsExternalIdFixedChargesFixedChargeCodeRouteHandler,
  getSubscriptionsExternalIdFixedChargesRouteHandler,
  getSubscriptionsExternalIdLifetimeUsageRouteHandler,
  getSubscriptionsExternalIdRouteHandler,
  getSubscriptionsRouteHandler,
  getTaxesCodeRouteHandler,
  getTaxesRouteHandler,
  getUsageAttributionTypesCodeRouteHandler,
  getUsageAttributionTypesRouteHandler,
  getWalletsLagoIdRouteHandler,
  getWalletsLagoIdWalletTransactionsRouteHandler,
  getWalletsRouteHandler,
  getWalletTransactionsLagoIdConsumptionsRouteHandler,
  getWalletTransactionsLagoIdFundingsRouteHandler,
  getWalletTransactionsLagoIdRouteHandler,
  getWebhookEndpointsLagoIdRouteHandler,
  getWebhookEndpointsRouteHandler,
  getWebhooksJsonPublicKeyRouteHandler,
  getWebhooksPublicKeyRouteHandler,
  patchCreditNotesLagoIdMetadataRouteHandler,
  patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRouteHandler,
  patchPlansCodeEntitlementsRouteHandler,
  patchPlansCodeMetadataRouteHandler,
  patchSubscriptionsExternalIdEntitlementsRouteHandler,
  patchWalletsLagoIdMetadataRouteHandler,
  postAddOnsRouteHandler,
  postAppliedCouponsRouteHandler,
  postBillableMetricsEvaluateExpressionRouteHandler,
  postBillableMetricsRouteHandler,
  postBillingEntitiesRouteHandler,
  postCouponsRouteHandler,
  postCreditNotesEstimateRouteHandler,
  postCreditNotesLagoIdDownloadRouteHandler,
  postCreditNotesLagoIdDownloadXmlRouteHandler,
  postCreditNotesLagoIdMetadataRouteHandler,
  postCreditNotesRouteHandler,
  postCustomersExternalCustomerIdCheckoutUrlRouteHandler,
  postCustomersExternalCustomerIdWalletsRouteHandler,
  postCustomersExternalCustomerIdWalletsWalletCodeAlertsRouteHandler,
  postCustomersExternalCustomerIdWalletsWalletCodeMetadataRouteHandler,
  postCustomersRouteHandler,
  postEventsBatchEstimateInstantFeesRouteHandler,
  postEventsBatchRouteHandler,
  postEventsEstimateFeesRouteHandler,
  postEventsEstimateInstantFeesRouteHandler,
  postEventsRouteHandler,
  postFeaturesRouteHandler,
  postInvoicesLagoIdDownloadRouteHandler,
  postInvoicesLagoIdDownloadXmlRouteHandler,
  postInvoicesLagoIdLoseDisputeRouteHandler,
  postInvoicesLagoIdPaymentUrlRouteHandler,
  postInvoicesLagoIdRetryPaymentRouteHandler,
  postInvoicesLagoIdRetryRouteHandler,
  postInvoicesLagoIdVoidRouteHandler,
  postInvoicesPreviewRouteHandler,
  postInvoicesRouteHandler,
  postOrderFormsLagoIdMarkAsSignedRouteHandler,
  postOrderFormsLagoIdVoidRouteHandler,
  postOrdersLagoIdExecuteRouteHandler,
  postPaymentRequestsRouteHandler,
  postPaymentsRouteHandler,
  postPlansCodeChargesChargeCodeFiltersRouteHandler,
  postPlansCodeChargesRouteHandler,
  postPlansCodeEntitlementsRouteHandler,
  postPlansCodeFixedChargesRouteHandler,
  postPlansCodeMetadataRouteHandler,
  postPlansRouteHandler,
  postQuoteVersionsLagoIdApproveRouteHandler,
  postQuoteVersionsLagoIdCloneRouteHandler,
  postQuoteVersionsLagoIdVoidRouteHandler,
  postSubscriptionsExternalIdAlertsRouteHandler,
  postSubscriptionsExternalIdChargesChargeCodeFiltersRouteHandler,
  postSubscriptionsRouteHandler,
  postTaxesRouteHandler,
  postUsageAttributionTypesRouteHandler,
  postWalletsLagoIdMetadataRouteHandler,
  postWalletsRouteHandler,
  postWalletTransactionsLagoIdPaymentUrlRouteHandler,
  postWalletTransactionsRouteHandler,
  postWebhookEndpointsRouteHandler,
  putAddOnsCodeRouteHandler,
  putBillableMetricsCodeRouteHandler,
  putBillingEntitiesCodeRouteHandler,
  putCouponsCodeRouteHandler,
  putCreditNotesLagoIdRouteHandler,
  putCreditNotesLagoIdVoidRouteHandler,
  putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRouteHandler,
  putCustomersExternalCustomerIdWalletsCodeRouteHandler,
  putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRouteHandler,
  putFeaturesCodeRouteHandler,
  putFeesLagoIdRouteHandler,
  putInvoicesLagoIdFinalizeRouteHandler,
  putInvoicesLagoIdRefreshRouteHandler,
  putInvoicesLagoIdRouteHandler,
  putOrganizationsRouteHandler,
  putPlansCodeChargesChargeCodeFiltersFilterIdRouteHandler,
  putPlansCodeChargesChargeCodeRouteHandler,
  putPlansCodeFixedChargesFixedChargeCodeRouteHandler,
  putPlansCodeRouteHandler,
  putSubscriptionsExternalIdAlertsCodeRouteHandler,
  putSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRouteHandler,
  putSubscriptionsExternalIdChargesChargeCodeRouteHandler,
  putSubscriptionsExternalIdFixedChargesFixedChargeCodeRouteHandler,
  putSubscriptionsExternalIdLifetimeUsageRouteHandler,
  putSubscriptionsExternalIdRouteHandler,
  putTaxesCodeRouteHandler,
  putUsageAttributionTypesCodeRouteHandler,
  putWalletsLagoIdRouteHandler,
  putWebhookEndpointsLagoIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBillingEntitiesRoute, getBillingEntitiesRouteHandler)
  .openapi(postBillingEntitiesRoute, postBillingEntitiesRouteHandler)
  .openapi(getBillingEntitiesCodeRoute, getBillingEntitiesCodeRouteHandler)
  .openapi(putBillingEntitiesCodeRoute, putBillingEntitiesCodeRouteHandler)
  .openapi(getActivityLogsRoute, getActivityLogsRouteHandler)
  .openapi(getActivityLogsActivityIdRoute, getActivityLogsActivityIdRouteHandler)
  .openapi(postAddOnsRoute, postAddOnsRouteHandler)
  .openapi(getAddOnsRoute, getAddOnsRouteHandler)
  .openapi(putAddOnsCodeRoute, putAddOnsCodeRouteHandler)
  .openapi(getAddOnsCodeRoute, getAddOnsCodeRouteHandler)
  .openapi(deleteAddOnsCodeRoute, deleteAddOnsCodeRouteHandler)
  .openapi(getApiLogsRoute, getApiLogsRouteHandler)
  .openapi(getApiLogsRequestIdRoute, getApiLogsRequestIdRouteHandler)
  .openapi(getAnalyticsGrossRevenueRoute, getAnalyticsGrossRevenueRouteHandler)
  .openapi(getAnalyticsInvoiceCollectionRoute, getAnalyticsInvoiceCollectionRouteHandler)
  .openapi(getAnalyticsInvoicedUsageRoute, getAnalyticsInvoicedUsageRouteHandler)
  .openapi(getAnalyticsMrrRoute, getAnalyticsMrrRouteHandler)
  .openapi(getAnalyticsOverdueBalanceRoute, getAnalyticsOverdueBalanceRouteHandler)
  .openapi(getAnalyticsUsageRoute, getAnalyticsUsageRouteHandler)
  .openapi(postAppliedCouponsRoute, postAppliedCouponsRouteHandler)
  .openapi(getAppliedCouponsRoute, getAppliedCouponsRouteHandler)
  .openapi(postBillableMetricsRoute, postBillableMetricsRouteHandler)
  .openapi(getBillableMetricsRoute, getBillableMetricsRouteHandler)
  .openapi(
    postBillableMetricsEvaluateExpressionRoute,
    postBillableMetricsEvaluateExpressionRouteHandler,
  )
  .openapi(putBillableMetricsCodeRoute, putBillableMetricsCodeRouteHandler)
  .openapi(deleteBillableMetricsCodeRoute, deleteBillableMetricsCodeRouteHandler)
  .openapi(getBillableMetricsCodeRoute, getBillableMetricsCodeRouteHandler)
  .openapi(postFeaturesRoute, postFeaturesRouteHandler)
  .openapi(getFeaturesRoute, getFeaturesRouteHandler)
  .openapi(putFeaturesCodeRoute, putFeaturesCodeRouteHandler)
  .openapi(deleteFeaturesCodeRoute, deleteFeaturesCodeRouteHandler)
  .openapi(getFeaturesCodeRoute, getFeaturesCodeRouteHandler)
  .openapi(
    deleteFeaturesCodePrivilegesPrivilegeCodeRoute,
    deleteFeaturesCodePrivilegesPrivilegeCodeRouteHandler,
  )
  .openapi(postCouponsRoute, postCouponsRouteHandler)
  .openapi(getCouponsRoute, getCouponsRouteHandler)
  .openapi(putCouponsCodeRoute, putCouponsCodeRouteHandler)
  .openapi(getCouponsCodeRoute, getCouponsCodeRouteHandler)
  .openapi(deleteCouponsCodeRoute, deleteCouponsCodeRouteHandler)
  .openapi(postCreditNotesRoute, postCreditNotesRouteHandler)
  .openapi(getCreditNotesRoute, getCreditNotesRouteHandler)
  .openapi(putCreditNotesLagoIdRoute, putCreditNotesLagoIdRouteHandler)
  .openapi(getCreditNotesLagoIdRoute, getCreditNotesLagoIdRouteHandler)
  .openapi(postCreditNotesLagoIdDownloadRoute, postCreditNotesLagoIdDownloadRouteHandler)
  .openapi(postCreditNotesLagoIdDownloadXmlRoute, postCreditNotesLagoIdDownloadXmlRouteHandler)
  .openapi(postCreditNotesEstimateRoute, postCreditNotesEstimateRouteHandler)
  .openapi(putCreditNotesLagoIdVoidRoute, putCreditNotesLagoIdVoidRouteHandler)
  .openapi(postCreditNotesLagoIdMetadataRoute, postCreditNotesLagoIdMetadataRouteHandler)
  .openapi(patchCreditNotesLagoIdMetadataRoute, patchCreditNotesLagoIdMetadataRouteHandler)
  .openapi(deleteCreditNotesLagoIdMetadataRoute, deleteCreditNotesLagoIdMetadataRouteHandler)
  .openapi(deleteCreditNotesLagoIdMetadataKeyRoute, deleteCreditNotesLagoIdMetadataKeyRouteHandler)
  .openapi(postCustomersRoute, postCustomersRouteHandler)
  .openapi(getCustomersRoute, getCustomersRouteHandler)
  .openapi(getCustomersExternalCustomerIdRoute, getCustomersExternalCustomerIdRouteHandler)
  .openapi(deleteCustomersExternalCustomerIdRoute, deleteCustomersExternalCustomerIdRouteHandler)
  .openapi(
    getCustomersExternalCustomerIdAppliedCouponsRoute,
    getCustomersExternalCustomerIdAppliedCouponsRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdRoute,
    deleteCustomersExternalCustomerIdAppliedCouponsAppliedCouponIdRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdCreditNotesRoute,
    getCustomersExternalCustomerIdCreditNotesRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdInvoicesRoute,
    getCustomersExternalCustomerIdInvoicesRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdPaymentsRoute,
    getCustomersExternalCustomerIdPaymentsRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdPaymentRequestsRoute,
    getCustomersExternalCustomerIdPaymentRequestsRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdPortalUrlRoute,
    getCustomersExternalCustomerIdPortalUrlRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdSubscriptionsRoute,
    getCustomersExternalCustomerIdSubscriptionsRouteHandler,
  )
  .openapi(
    postCustomersExternalCustomerIdWalletsRoute,
    postCustomersExternalCustomerIdWalletsRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdWalletsRoute,
    getCustomersExternalCustomerIdWalletsRouteHandler,
  )
  .openapi(
    putCustomersExternalCustomerIdWalletsCodeRoute,
    putCustomersExternalCustomerIdWalletsCodeRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdWalletsCodeRoute,
    getCustomersExternalCustomerIdWalletsCodeRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdWalletsCodeRoute,
    deleteCustomersExternalCustomerIdWalletsCodeRouteHandler,
  )
  .openapi(
    postCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
    postCustomersExternalCustomerIdWalletsWalletCodeMetadataRouteHandler,
  )
  .openapi(
    patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
    patchCustomersExternalCustomerIdWalletsWalletCodeMetadataRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRoute,
    deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRoute,
    deleteCustomersExternalCustomerIdWalletsWalletCodeMetadataKeyRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
    getCustomersExternalCustomerIdWalletsWalletCodeAlertsRouteHandler,
  )
  .openapi(
    postCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
    postCustomersExternalCustomerIdWalletsWalletCodeAlertsRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRoute,
    deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
    getCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRouteHandler,
  )
  .openapi(
    putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
    putCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRoute,
    deleteCustomersExternalCustomerIdWalletsWalletCodeAlertsCodeRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdCurrentUsageRoute,
    getCustomersExternalCustomerIdCurrentUsageRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdProjectedUsageRoute,
    getCustomersExternalCustomerIdProjectedUsageRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdPastUsageRoute,
    getCustomersExternalCustomerIdPastUsageRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdAttributedUsageRoute,
    getCustomersExternalCustomerIdAttributedUsageRouteHandler,
  )
  .openapi(
    postCustomersExternalCustomerIdCheckoutUrlRoute,
    postCustomersExternalCustomerIdCheckoutUrlRouteHandler,
  )
  .openapi(
    getCustomersExternalCustomerIdPaymentMethodsRoute,
    getCustomersExternalCustomerIdPaymentMethodsRouteHandler,
  )
  .openapi(
    putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRoute,
    putCustomersExternalCustomerIdPaymentMethodsLagoIdSetAsDefaultRouteHandler,
  )
  .openapi(
    deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRoute,
    deleteCustomersExternalCustomerIdPaymentMethodsLagoIdRouteHandler,
  )
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(postEventsBatchRoute, postEventsBatchRouteHandler)
  .openapi(postEventsEstimateFeesRoute, postEventsEstimateFeesRouteHandler)
  .openapi(postEventsEstimateInstantFeesRoute, postEventsEstimateInstantFeesRouteHandler)
  .openapi(postEventsBatchEstimateInstantFeesRoute, postEventsBatchEstimateInstantFeesRouteHandler)
  .openapi(getEventsTransactionIdRoute, getEventsTransactionIdRouteHandler)
  .openapi(getFeesRoute, getFeesRouteHandler)
  .openapi(getFeesLagoIdRoute, getFeesLagoIdRouteHandler)
  .openapi(putFeesLagoIdRoute, putFeesLagoIdRouteHandler)
  .openapi(deleteFeesLagoIdRoute, deleteFeesLagoIdRouteHandler)
  .openapi(postInvoicesRoute, postInvoicesRouteHandler)
  .openapi(getInvoicesRoute, getInvoicesRouteHandler)
  .openapi(putInvoicesLagoIdRoute, putInvoicesLagoIdRouteHandler)
  .openapi(getInvoicesLagoIdRoute, getInvoicesLagoIdRouteHandler)
  .openapi(deleteInvoicesLagoIdRoute, deleteInvoicesLagoIdRouteHandler)
  .openapi(postInvoicesLagoIdDownloadRoute, postInvoicesLagoIdDownloadRouteHandler)
  .openapi(postInvoicesLagoIdDownloadXmlRoute, postInvoicesLagoIdDownloadXmlRouteHandler)
  .openapi(putInvoicesLagoIdFinalizeRoute, putInvoicesLagoIdFinalizeRouteHandler)
  .openapi(postInvoicesLagoIdLoseDisputeRoute, postInvoicesLagoIdLoseDisputeRouteHandler)
  .openapi(putInvoicesLagoIdRefreshRoute, putInvoicesLagoIdRefreshRouteHandler)
  .openapi(postInvoicesLagoIdRetryRoute, postInvoicesLagoIdRetryRouteHandler)
  .openapi(postInvoicesLagoIdPaymentUrlRoute, postInvoicesLagoIdPaymentUrlRouteHandler)
  .openapi(postInvoicesPreviewRoute, postInvoicesPreviewRouteHandler)
  .openapi(postInvoicesLagoIdRetryPaymentRoute, postInvoicesLagoIdRetryPaymentRouteHandler)
  .openapi(postInvoicesLagoIdVoidRoute, postInvoicesLagoIdVoidRouteHandler)
  .openapi(getOrderFormsRoute, getOrderFormsRouteHandler)
  .openapi(getOrderFormsLagoIdRoute, getOrderFormsLagoIdRouteHandler)
  .openapi(postOrderFormsLagoIdMarkAsSignedRoute, postOrderFormsLagoIdMarkAsSignedRouteHandler)
  .openapi(postOrderFormsLagoIdVoidRoute, postOrderFormsLagoIdVoidRouteHandler)
  .openapi(getOrdersRoute, getOrdersRouteHandler)
  .openapi(getOrdersLagoIdRoute, getOrdersLagoIdRouteHandler)
  .openapi(postOrdersLagoIdExecuteRoute, postOrdersLagoIdExecuteRouteHandler)
  .openapi(getOrganizationsRoute, getOrganizationsRouteHandler)
  .openapi(putOrganizationsRoute, putOrganizationsRouteHandler)
  .openapi(getPaymentReceiptsRoute, getPaymentReceiptsRouteHandler)
  .openapi(getPaymentReceiptsLagoIdRoute, getPaymentReceiptsLagoIdRouteHandler)
  .openapi(postPaymentRequestsRoute, postPaymentRequestsRouteHandler)
  .openapi(getPaymentRequestsRoute, getPaymentRequestsRouteHandler)
  .openapi(getPaymentRequestsLagoIdRoute, getPaymentRequestsLagoIdRouteHandler)
  .openapi(postPaymentsRoute, postPaymentsRouteHandler)
  .openapi(getPaymentsRoute, getPaymentsRouteHandler)
  .openapi(getPaymentsLagoIdRoute, getPaymentsLagoIdRouteHandler)
  .openapi(postPlansRoute, postPlansRouteHandler)
  .openapi(getPlansRoute, getPlansRouteHandler)
  .openapi(putPlansCodeRoute, putPlansCodeRouteHandler)
  .openapi(getPlansCodeRoute, getPlansCodeRouteHandler)
  .openapi(deletePlansCodeRoute, deletePlansCodeRouteHandler)
  .openapi(postPlansCodeEntitlementsRoute, postPlansCodeEntitlementsRouteHandler)
  .openapi(getPlansCodeEntitlementsRoute, getPlansCodeEntitlementsRouteHandler)
  .openapi(patchPlansCodeEntitlementsRoute, patchPlansCodeEntitlementsRouteHandler)
  .openapi(
    getPlansCodeEntitlementsFeatureCodeRoute,
    getPlansCodeEntitlementsFeatureCodeRouteHandler,
  )
  .openapi(
    deletePlansCodeEntitlementsFeatureCodeRoute,
    deletePlansCodeEntitlementsFeatureCodeRouteHandler,
  )
  .openapi(
    deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
    deletePlansCodeEntitlementsFeatureCodePrivilegesPrivilegeCodeRouteHandler,
  )
  .openapi(postPlansCodeMetadataRoute, postPlansCodeMetadataRouteHandler)
  .openapi(patchPlansCodeMetadataRoute, patchPlansCodeMetadataRouteHandler)
  .openapi(deletePlansCodeMetadataRoute, deletePlansCodeMetadataRouteHandler)
  .openapi(deletePlansCodeMetadataKeyRoute, deletePlansCodeMetadataKeyRouteHandler)
  .openapi(postPlansCodeChargesRoute, postPlansCodeChargesRouteHandler)
  .openapi(getPlansCodeChargesRoute, getPlansCodeChargesRouteHandler)
  .openapi(getPlansCodeChargesChargeCodeRoute, getPlansCodeChargesChargeCodeRouteHandler)
  .openapi(putPlansCodeChargesChargeCodeRoute, putPlansCodeChargesChargeCodeRouteHandler)
  .openapi(deletePlansCodeChargesChargeCodeRoute, deletePlansCodeChargesChargeCodeRouteHandler)
  .openapi(
    postPlansCodeChargesChargeCodeFiltersRoute,
    postPlansCodeChargesChargeCodeFiltersRouteHandler,
  )
  .openapi(
    getPlansCodeChargesChargeCodeFiltersRoute,
    getPlansCodeChargesChargeCodeFiltersRouteHandler,
  )
  .openapi(
    getPlansCodeChargesChargeCodeFiltersFilterIdRoute,
    getPlansCodeChargesChargeCodeFiltersFilterIdRouteHandler,
  )
  .openapi(
    putPlansCodeChargesChargeCodeFiltersFilterIdRoute,
    putPlansCodeChargesChargeCodeFiltersFilterIdRouteHandler,
  )
  .openapi(
    deletePlansCodeChargesChargeCodeFiltersFilterIdRoute,
    deletePlansCodeChargesChargeCodeFiltersFilterIdRouteHandler,
  )
  .openapi(postPlansCodeFixedChargesRoute, postPlansCodeFixedChargesRouteHandler)
  .openapi(getPlansCodeFixedChargesRoute, getPlansCodeFixedChargesRouteHandler)
  .openapi(
    getPlansCodeFixedChargesFixedChargeCodeRoute,
    getPlansCodeFixedChargesFixedChargeCodeRouteHandler,
  )
  .openapi(
    putPlansCodeFixedChargesFixedChargeCodeRoute,
    putPlansCodeFixedChargesFixedChargeCodeRouteHandler,
  )
  .openapi(
    deletePlansCodeFixedChargesFixedChargeCodeRoute,
    deletePlansCodeFixedChargesFixedChargeCodeRouteHandler,
  )
  .openapi(getQuotesRoute, getQuotesRouteHandler)
  .openapi(getQuotesLagoIdRoute, getQuotesLagoIdRouteHandler)
  .openapi(getQuotesLagoIdVersionsRoute, getQuotesLagoIdVersionsRouteHandler)
  .openapi(getQuoteVersionsLagoIdRoute, getQuoteVersionsLagoIdRouteHandler)
  .openapi(postQuoteVersionsLagoIdApproveRoute, postQuoteVersionsLagoIdApproveRouteHandler)
  .openapi(postQuoteVersionsLagoIdVoidRoute, postQuoteVersionsLagoIdVoidRouteHandler)
  .openapi(postQuoteVersionsLagoIdCloneRoute, postQuoteVersionsLagoIdCloneRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(getSubscriptionsExternalIdRoute, getSubscriptionsExternalIdRouteHandler)
  .openapi(putSubscriptionsExternalIdRoute, putSubscriptionsExternalIdRouteHandler)
  .openapi(deleteSubscriptionsExternalIdRoute, deleteSubscriptionsExternalIdRouteHandler)
  .openapi(
    getSubscriptionsExternalIdLifetimeUsageRoute,
    getSubscriptionsExternalIdLifetimeUsageRouteHandler,
  )
  .openapi(
    putSubscriptionsExternalIdLifetimeUsageRoute,
    putSubscriptionsExternalIdLifetimeUsageRouteHandler,
  )
  .openapi(getSubscriptionsExternalIdAlertsRoute, getSubscriptionsExternalIdAlertsRouteHandler)
  .openapi(postSubscriptionsExternalIdAlertsRoute, postSubscriptionsExternalIdAlertsRouteHandler)
  .openapi(
    deleteSubscriptionsExternalIdAlertsRoute,
    deleteSubscriptionsExternalIdAlertsRouteHandler,
  )
  .openapi(
    getSubscriptionsExternalIdAlertsCodeRoute,
    getSubscriptionsExternalIdAlertsCodeRouteHandler,
  )
  .openapi(
    putSubscriptionsExternalIdAlertsCodeRoute,
    putSubscriptionsExternalIdAlertsCodeRouteHandler,
  )
  .openapi(
    deleteSubscriptionsExternalIdAlertsCodeRoute,
    deleteSubscriptionsExternalIdAlertsCodeRouteHandler,
  )
  .openapi(
    getSubscriptionsExternalIdEntitlementsRoute,
    getSubscriptionsExternalIdEntitlementsRouteHandler,
  )
  .openapi(
    patchSubscriptionsExternalIdEntitlementsRoute,
    patchSubscriptionsExternalIdEntitlementsRouteHandler,
  )
  .openapi(
    deleteSubscriptionsExternalIdEntitlementsFeatureCodeRoute,
    deleteSubscriptionsExternalIdEntitlementsFeatureCodeRouteHandler,
  )
  .openapi(
    deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeRoute,
    deleteSubscriptionsExternalIdEntitlementsFeatureCodePrivilegesPrivilegeCodeRouteHandler,
  )
  .openapi(
    getSubscriptionsExternalIdFixedChargesRoute,
    getSubscriptionsExternalIdFixedChargesRouteHandler,
  )
  .openapi(getSubscriptionsExternalIdChargesRoute, getSubscriptionsExternalIdChargesRouteHandler)
  .openapi(
    getSubscriptionsExternalIdChargesChargeCodeRoute,
    getSubscriptionsExternalIdChargesChargeCodeRouteHandler,
  )
  .openapi(
    putSubscriptionsExternalIdChargesChargeCodeRoute,
    putSubscriptionsExternalIdChargesChargeCodeRouteHandler,
  )
  .openapi(
    postSubscriptionsExternalIdChargesChargeCodeFiltersRoute,
    postSubscriptionsExternalIdChargesChargeCodeFiltersRouteHandler,
  )
  .openapi(
    getSubscriptionsExternalIdChargesChargeCodeFiltersRoute,
    getSubscriptionsExternalIdChargesChargeCodeFiltersRouteHandler,
  )
  .openapi(
    getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
    getSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRouteHandler,
  )
  .openapi(
    putSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
    putSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRouteHandler,
  )
  .openapi(
    deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRoute,
    deleteSubscriptionsExternalIdChargesChargeCodeFiltersFilterIdRouteHandler,
  )
  .openapi(
    getSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute,
    getSubscriptionsExternalIdFixedChargesFixedChargeCodeRouteHandler,
  )
  .openapi(
    putSubscriptionsExternalIdFixedChargesFixedChargeCodeRoute,
    putSubscriptionsExternalIdFixedChargesFixedChargeCodeRouteHandler,
  )
  .openapi(postTaxesRoute, postTaxesRouteHandler)
  .openapi(getTaxesRoute, getTaxesRouteHandler)
  .openapi(putTaxesCodeRoute, putTaxesCodeRouteHandler)
  .openapi(getTaxesCodeRoute, getTaxesCodeRouteHandler)
  .openapi(deleteTaxesCodeRoute, deleteTaxesCodeRouteHandler)
  .openapi(postUsageAttributionTypesRoute, postUsageAttributionTypesRouteHandler)
  .openapi(getUsageAttributionTypesRoute, getUsageAttributionTypesRouteHandler)
  .openapi(putUsageAttributionTypesCodeRoute, putUsageAttributionTypesCodeRouteHandler)
  .openapi(getUsageAttributionTypesCodeRoute, getUsageAttributionTypesCodeRouteHandler)
  .openapi(deleteUsageAttributionTypesCodeRoute, deleteUsageAttributionTypesCodeRouteHandler)
  .openapi(postWalletsRoute, postWalletsRouteHandler)
  .openapi(getWalletsRoute, getWalletsRouteHandler)
  .openapi(putWalletsLagoIdRoute, putWalletsLagoIdRouteHandler)
  .openapi(getWalletsLagoIdRoute, getWalletsLagoIdRouteHandler)
  .openapi(deleteWalletsLagoIdRoute, deleteWalletsLagoIdRouteHandler)
  .openapi(postWalletsLagoIdMetadataRoute, postWalletsLagoIdMetadataRouteHandler)
  .openapi(patchWalletsLagoIdMetadataRoute, patchWalletsLagoIdMetadataRouteHandler)
  .openapi(deleteWalletsLagoIdMetadataRoute, deleteWalletsLagoIdMetadataRouteHandler)
  .openapi(deleteWalletsLagoIdMetadataKeyRoute, deleteWalletsLagoIdMetadataKeyRouteHandler)
  .openapi(postWalletTransactionsRoute, postWalletTransactionsRouteHandler)
  .openapi(getWalletTransactionsLagoIdRoute, getWalletTransactionsLagoIdRouteHandler)
  .openapi(
    postWalletTransactionsLagoIdPaymentUrlRoute,
    postWalletTransactionsLagoIdPaymentUrlRouteHandler,
  )
  .openapi(
    getWalletTransactionsLagoIdConsumptionsRoute,
    getWalletTransactionsLagoIdConsumptionsRouteHandler,
  )
  .openapi(
    getWalletTransactionsLagoIdFundingsRoute,
    getWalletTransactionsLagoIdFundingsRouteHandler,
  )
  .openapi(getWalletsLagoIdWalletTransactionsRoute, getWalletsLagoIdWalletTransactionsRouteHandler)
  .openapi(getWebhooksPublicKeyRoute, getWebhooksPublicKeyRouteHandler)
  .openapi(getWebhooksJsonPublicKeyRoute, getWebhooksJsonPublicKeyRouteHandler)
  .openapi(postWebhookEndpointsRoute, postWebhookEndpointsRouteHandler)
  .openapi(getWebhookEndpointsRoute, getWebhookEndpointsRouteHandler)
  .openapi(putWebhookEndpointsLagoIdRoute, putWebhookEndpointsLagoIdRouteHandler)
  .openapi(getWebhookEndpointsLagoIdRoute, getWebhookEndpointsLagoIdRouteHandler)
  .openapi(deleteWebhookEndpointsLagoIdRoute, deleteWebhookEndpointsLagoIdRouteHandler)

export default app
