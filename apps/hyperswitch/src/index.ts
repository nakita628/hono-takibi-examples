import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountAccountIdBusinessProfileProfileIdRoute,
  deleteAccountAccountIdConnectorsMerchantConnectorIdRoute,
  deleteAccountsAccountIdRoute,
  deleteApiKeysMerchantIdKeyIdRoute,
  deleteBlocklistRoute,
  deleteCardIssuersIdRoute,
  deleteCustomersCustomerIdRoute,
  deleteDisputesEvidenceRoute,
  deletePaymentMethodsMethodIdRoute,
  getAccountAccountIdBusinessProfileProfileIdRoute,
  getAccountAccountIdBusinessProfileRoute,
  getAccountAccountIdConnectorsMerchantConnectorIdRoute,
  getAccountAccountIdConnectorsRoute,
  getAccountPaymentMethodsRoute,
  getAccountsAccountIdRoute,
  getApiKeysMerchantIdKeyIdRoute,
  getApiKeysMerchantIdListRoute,
  getAuthenticationAuthenticationIdEligibilityCheckRoute,
  getBlocklistBatchJobIdRoute,
  getBlocklistBatchRoute,
  getBlocklistCountRoute,
  getBlocklistLookupRoute,
  getBlocklistRoute,
  getCardIssuersRoute,
  getCustomersCustomerIdMandatesRoute,
  getCustomersCustomerIdPaymentMethodsRoute,
  getCustomersCustomerIdRoute,
  getCustomersListRoute,
  getCustomersPaymentMethodsRoute,
  getDisputesAggregateRoute,
  getDisputesDisputeIdRoute,
  getDisputesEvidenceDisputeIdRoute,
  getDisputesFilterRoute,
  getDisputesListRoute,
  getDisputesProfileAggregateRoute,
  getDisputesProfileFilterRoute,
  getDisputesProfileListRoute,
  getEventsMerchantIdEventIdAttemptsRoute,
  getMandatesMandateIdRoute,
  getOrganizationIdRoute,
  getPaymentLinkPaymentLinkIdRoute,
  getPaymentMethodsMethodIdRoute,
  getPaymentsListRoute,
  getPaymentsPaymentIdCancelPostCaptureRoute,
  getPaymentsPaymentIdClientRoute,
  getPaymentsPaymentIdRoute,
  getPayoutsListRoute,
  getPayoutsPayoutIdRoute,
  getPollStatusPollIdRoute,
  getRefundsRefundIdRoute,
  getRelayRelayIdRoute,
  getRoutingActiveRoute,
  getRoutingDefaultProfileRoute,
  getRoutingDefaultRoute,
  getRoutingRoute,
  getRoutingRoutingAlgorithmIdRoute,
  getSubscriptionsEstimateRoute,
  getSubscriptionsItemsRoute,
  getSubscriptionsSubscriptionIdRoute,
  getV1CustomersReferenceMerchantReferenceIdRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateRoute,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleRoute,
  postAccountAccountIdBusinessProfileProfileIdRoute,
  postAccountAccountIdBusinessProfileRoute,
  postAccountAccountIdConnectorsMerchantConnectorIdRoute,
  postAccountAccountIdConnectorsRoute,
  postAccountAccountIdWebhooksMerchantConnectorIdRoute,
  postAccountsAccountIdKvRoute,
  postAccountsAccountIdRoute,
  postAccountsRoute,
  postApiKeysMerchantIdKeyIdRoute,
  postApiKeysMerchantIdRoute,
  postAuthenticationAuthenticationIdAuthenticateRoute,
  postAuthenticationAuthenticationIdEligibilityCheckRoute,
  postAuthenticationAuthenticationIdEligibilityRoute,
  postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRoute,
  postAuthenticationAuthenticationIdRedirectRoute,
  postAuthenticationAuthenticationIdSyncRoute,
  postAuthenticationRoute,
  postBlocklistBatchRoute,
  postBlocklistCloneRoute,
  postBlocklistExportRoute,
  postBlocklistRoute,
  postBlocklistToggleRoute,
  postCardIssuersRoute,
  postCustomerIdPaymentMethodsPaymentMethodIdDefaultRoute,
  postCustomersCustomerIdRoute,
  postCustomersRoute,
  postDisputesAcceptDisputeIdRoute,
  postDisputesEvidenceRoute,
  postEventsMerchantIdEventIdRetryRoute,
  postEventsMerchantIdRoute,
  postEventsProfileListRoute,
  postGsmDeleteRoute,
  postGsmGetRoute,
  postGsmRoute,
  postGsmUpdateRoute,
  postMandatesRevokeMandateIdRoute,
  postOfferEngineOffersListRoute,
  postOrganizationRoute,
  postPaymentLinkListRoute,
  postPaymentLinkProfileListRoute,
  postPaymentMethodsMethodIdUpdateRoute,
  postPaymentMethodsRoute,
  postPaymentsPaymentId3dsAuthenticationRoute,
  postPaymentsPaymentIdCancelPostCaptureRoute,
  postPaymentsPaymentIdCancelRoute,
  postPaymentsPaymentIdCaptureRoute,
  postPaymentsPaymentIdCompleteAuthorizeRoute,
  postPaymentsPaymentIdConfirmRoute,
  postPaymentsPaymentIdEligibilityCheckRoute,
  postPaymentsPaymentIdEligibilityRoute,
  postPaymentsPaymentIdExtendAuthorizationRoute,
  postPaymentsPaymentIdIncrementalAuthorizationRoute,
  postPaymentsPaymentIdPostSessionTokensRoute,
  postPaymentsPaymentIdRoute,
  postPaymentsPaymentIdUpdateMetadataRoute,
  postPaymentsRoute,
  postPaymentsSessionTokensRoute,
  postPayoutsCreateRoute,
  postPayoutsFilterRoute,
  postPayoutsListRoute,
  postPayoutsPayoutIdCancelRoute,
  postPayoutsPayoutIdConfirmRoute,
  postPayoutsPayoutIdFulfillRoute,
  postPayoutsPayoutIdRoute,
  postProfileAcquirersProfileIdProfileAcquirerIdRoute,
  postProfileAcquirersRoute,
  postRefundsListRoute,
  postRefundsRefundIdRoute,
  postRefundsRoute,
  postRelayRoute,
  postRoutingDeactivateRoute,
  postRoutingDefaultProfileProfileIdRoute,
  postRoutingDefaultRoute,
  postRoutingRoute,
  postRoutingRoutingAlgorithmIdActivateRoute,
  postSubscriptionsCreateRoute,
  postSubscriptionsRoute,
  postSubscriptionsSubscriptionIdCancelRoute,
  postSubscriptionsSubscriptionIdConfirmRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
  postTelephoneOrderMerchantIdProviderRoute,
  postThreeDsDecisionExecuteRoute,
  postUserCreatePlatformRoute,
  putCardIssuersIdRoute,
  putDisputesEvidenceRoute,
  putOrganizationIdRoute,
  putSubscriptionsSubscriptionIdUpdateRoute,
} from './routes'
import {
  deleteAccountAccountIdBusinessProfileProfileIdRouteHandler,
  deleteAccountAccountIdConnectorsMerchantConnectorIdRouteHandler,
  deleteAccountsAccountIdRouteHandler,
  deleteApiKeysMerchantIdKeyIdRouteHandler,
  deleteBlocklistRouteHandler,
  deleteCardIssuersIdRouteHandler,
  deleteCustomersCustomerIdRouteHandler,
  deleteDisputesEvidenceRouteHandler,
  deletePaymentMethodsMethodIdRouteHandler,
  getAccountAccountIdBusinessProfileProfileIdRouteHandler,
  getAccountAccountIdBusinessProfileRouteHandler,
  getAccountAccountIdConnectorsMerchantConnectorIdRouteHandler,
  getAccountAccountIdConnectorsRouteHandler,
  getAccountPaymentMethodsRouteHandler,
  getAccountsAccountIdRouteHandler,
  getApiKeysMerchantIdKeyIdRouteHandler,
  getApiKeysMerchantIdListRouteHandler,
  getAuthenticationAuthenticationIdEligibilityCheckRouteHandler,
  getBlocklistBatchJobIdRouteHandler,
  getBlocklistBatchRouteHandler,
  getBlocklistCountRouteHandler,
  getBlocklistLookupRouteHandler,
  getBlocklistRouteHandler,
  getCardIssuersRouteHandler,
  getCustomersCustomerIdMandatesRouteHandler,
  getCustomersCustomerIdPaymentMethodsRouteHandler,
  getCustomersCustomerIdRouteHandler,
  getCustomersListRouteHandler,
  getCustomersPaymentMethodsRouteHandler,
  getDisputesAggregateRouteHandler,
  getDisputesDisputeIdRouteHandler,
  getDisputesEvidenceDisputeIdRouteHandler,
  getDisputesFilterRouteHandler,
  getDisputesListRouteHandler,
  getDisputesProfileAggregateRouteHandler,
  getDisputesProfileFilterRouteHandler,
  getDisputesProfileListRouteHandler,
  getEventsMerchantIdEventIdAttemptsRouteHandler,
  getMandatesMandateIdRouteHandler,
  getOrganizationIdRouteHandler,
  getPaymentLinkPaymentLinkIdRouteHandler,
  getPaymentMethodsMethodIdRouteHandler,
  getPaymentsListRouteHandler,
  getPaymentsPaymentIdCancelPostCaptureRouteHandler,
  getPaymentsPaymentIdClientRouteHandler,
  getPaymentsPaymentIdRouteHandler,
  getPayoutsListRouteHandler,
  getPayoutsPayoutIdRouteHandler,
  getPollStatusPollIdRouteHandler,
  getRefundsRefundIdRouteHandler,
  getRelayRelayIdRouteHandler,
  getRoutingActiveRouteHandler,
  getRoutingDefaultProfileRouteHandler,
  getRoutingDefaultRouteHandler,
  getRoutingRouteHandler,
  getRoutingRoutingAlgorithmIdRouteHandler,
  getSubscriptionsEstimateRouteHandler,
  getSubscriptionsItemsRouteHandler,
  getSubscriptionsSubscriptionIdRouteHandler,
  getV1CustomersReferenceMerchantReferenceIdRouteHandler,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleRouteHandler,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateRouteHandler,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleRouteHandler,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateRouteHandler,
  postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleRouteHandler,
  postAccountAccountIdBusinessProfileProfileIdRouteHandler,
  postAccountAccountIdBusinessProfileRouteHandler,
  postAccountAccountIdConnectorsMerchantConnectorIdRouteHandler,
  postAccountAccountIdConnectorsRouteHandler,
  postAccountAccountIdWebhooksMerchantConnectorIdRouteHandler,
  postAccountsAccountIdKvRouteHandler,
  postAccountsAccountIdRouteHandler,
  postAccountsRouteHandler,
  postApiKeysMerchantIdKeyIdRouteHandler,
  postApiKeysMerchantIdRouteHandler,
  postAuthenticationAuthenticationIdAuthenticateRouteHandler,
  postAuthenticationAuthenticationIdEligibilityCheckRouteHandler,
  postAuthenticationAuthenticationIdEligibilityRouteHandler,
  postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRouteHandler,
  postAuthenticationAuthenticationIdRedirectRouteHandler,
  postAuthenticationAuthenticationIdSyncRouteHandler,
  postAuthenticationRouteHandler,
  postBlocklistBatchRouteHandler,
  postBlocklistCloneRouteHandler,
  postBlocklistExportRouteHandler,
  postBlocklistRouteHandler,
  postBlocklistToggleRouteHandler,
  postCardIssuersRouteHandler,
  postCustomerIdPaymentMethodsPaymentMethodIdDefaultRouteHandler,
  postCustomersCustomerIdRouteHandler,
  postCustomersRouteHandler,
  postDisputesAcceptDisputeIdRouteHandler,
  postDisputesEvidenceRouteHandler,
  postEventsMerchantIdEventIdRetryRouteHandler,
  postEventsMerchantIdRouteHandler,
  postEventsProfileListRouteHandler,
  postGsmDeleteRouteHandler,
  postGsmGetRouteHandler,
  postGsmRouteHandler,
  postGsmUpdateRouteHandler,
  postMandatesRevokeMandateIdRouteHandler,
  postOfferEngineOffersListRouteHandler,
  postOrganizationRouteHandler,
  postPaymentLinkListRouteHandler,
  postPaymentLinkProfileListRouteHandler,
  postPaymentMethodsMethodIdUpdateRouteHandler,
  postPaymentMethodsRouteHandler,
  postPaymentsPaymentId3dsAuthenticationRouteHandler,
  postPaymentsPaymentIdCancelPostCaptureRouteHandler,
  postPaymentsPaymentIdCancelRouteHandler,
  postPaymentsPaymentIdCaptureRouteHandler,
  postPaymentsPaymentIdCompleteAuthorizeRouteHandler,
  postPaymentsPaymentIdConfirmRouteHandler,
  postPaymentsPaymentIdEligibilityCheckRouteHandler,
  postPaymentsPaymentIdEligibilityRouteHandler,
  postPaymentsPaymentIdExtendAuthorizationRouteHandler,
  postPaymentsPaymentIdIncrementalAuthorizationRouteHandler,
  postPaymentsPaymentIdPostSessionTokensRouteHandler,
  postPaymentsPaymentIdRouteHandler,
  postPaymentsPaymentIdUpdateMetadataRouteHandler,
  postPaymentsRouteHandler,
  postPaymentsSessionTokensRouteHandler,
  postPayoutsCreateRouteHandler,
  postPayoutsFilterRouteHandler,
  postPayoutsListRouteHandler,
  postPayoutsPayoutIdCancelRouteHandler,
  postPayoutsPayoutIdConfirmRouteHandler,
  postPayoutsPayoutIdFulfillRouteHandler,
  postPayoutsPayoutIdRouteHandler,
  postProfileAcquirersProfileIdProfileAcquirerIdRouteHandler,
  postProfileAcquirersRouteHandler,
  postRefundsListRouteHandler,
  postRefundsRefundIdRouteHandler,
  postRefundsRouteHandler,
  postRelayRouteHandler,
  postRoutingDeactivateRouteHandler,
  postRoutingDefaultProfileProfileIdRouteHandler,
  postRoutingDefaultRouteHandler,
  postRoutingRouteHandler,
  postRoutingRoutingAlgorithmIdActivateRouteHandler,
  postSubscriptionsCreateRouteHandler,
  postSubscriptionsRouteHandler,
  postSubscriptionsSubscriptionIdCancelRouteHandler,
  postSubscriptionsSubscriptionIdConfirmRouteHandler,
  postSubscriptionsSubscriptionIdPauseRouteHandler,
  postSubscriptionsSubscriptionIdResumeRouteHandler,
  postTelephoneOrderMerchantIdProviderRouteHandler,
  postThreeDsDecisionExecuteRouteHandler,
  postUserCreatePlatformRouteHandler,
  putCardIssuersIdRouteHandler,
  putDisputesEvidenceRouteHandler,
  putOrganizationIdRouteHandler,
  putSubscriptionsSubscriptionIdUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postPaymentsRoute, postPaymentsRouteHandler)
  .openapi(postPaymentsPaymentIdRoute, postPaymentsPaymentIdRouteHandler)
  .openapi(getPaymentsPaymentIdRoute, getPaymentsPaymentIdRouteHandler)
  .openapi(postPaymentsPaymentIdConfirmRoute, postPaymentsPaymentIdConfirmRouteHandler)
  .openapi(postPaymentsPaymentIdCaptureRoute, postPaymentsPaymentIdCaptureRouteHandler)
  .openapi(postPaymentsSessionTokensRoute, postPaymentsSessionTokensRouteHandler)
  .openapi(postPaymentsPaymentIdCancelRoute, postPaymentsPaymentIdCancelRouteHandler)
  .openapi(
    postPaymentsPaymentIdCancelPostCaptureRoute,
    postPaymentsPaymentIdCancelPostCaptureRouteHandler,
  )
  .openapi(
    getPaymentsPaymentIdCancelPostCaptureRoute,
    getPaymentsPaymentIdCancelPostCaptureRouteHandler,
  )
  .openapi(
    postPaymentsPaymentIdExtendAuthorizationRoute,
    postPaymentsPaymentIdExtendAuthorizationRouteHandler,
  )
  .openapi(getPaymentsListRoute, getPaymentsListRouteHandler)
  .openapi(
    postPaymentsPaymentIdIncrementalAuthorizationRoute,
    postPaymentsPaymentIdIncrementalAuthorizationRouteHandler,
  )
  .openapi(getPaymentLinkPaymentLinkIdRoute, getPaymentLinkPaymentLinkIdRouteHandler)
  .openapi(postPaymentLinkListRoute, postPaymentLinkListRouteHandler)
  .openapi(postPaymentLinkProfileListRoute, postPaymentLinkProfileListRouteHandler)
  .openapi(
    postPaymentsPaymentId3dsAuthenticationRoute,
    postPaymentsPaymentId3dsAuthenticationRouteHandler,
  )
  .openapi(
    postPaymentsPaymentIdCompleteAuthorizeRoute,
    postPaymentsPaymentIdCompleteAuthorizeRouteHandler,
  )
  .openapi(
    postPaymentsPaymentIdPostSessionTokensRoute,
    postPaymentsPaymentIdPostSessionTokensRouteHandler,
  )
  .openapi(
    postPaymentsPaymentIdUpdateMetadataRoute,
    postPaymentsPaymentIdUpdateMetadataRouteHandler,
  )
  .openapi(
    postPaymentsPaymentIdEligibilityCheckRoute,
    postPaymentsPaymentIdEligibilityCheckRouteHandler,
  )
  .openapi(postPaymentsPaymentIdEligibilityRoute, postPaymentsPaymentIdEligibilityRouteHandler)
  .openapi(postRelayRoute, postRelayRouteHandler)
  .openapi(getRelayRelayIdRoute, getRelayRelayIdRouteHandler)
  .openapi(postRefundsRoute, postRefundsRouteHandler)
  .openapi(getRefundsRefundIdRoute, getRefundsRefundIdRouteHandler)
  .openapi(postRefundsRefundIdRoute, postRefundsRefundIdRouteHandler)
  .openapi(postRefundsListRoute, postRefundsListRouteHandler)
  .openapi(postOrganizationRoute, postOrganizationRouteHandler)
  .openapi(getOrganizationIdRoute, getOrganizationIdRouteHandler)
  .openapi(putOrganizationIdRoute, putOrganizationIdRouteHandler)
  .openapi(postAccountsRoute, postAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(postAccountsAccountIdRoute, postAccountsAccountIdRouteHandler)
  .openapi(deleteAccountsAccountIdRoute, deleteAccountsAccountIdRouteHandler)
  .openapi(postAccountsAccountIdKvRoute, postAccountsAccountIdKvRouteHandler)
  .openapi(postAccountAccountIdConnectorsRoute, postAccountAccountIdConnectorsRouteHandler)
  .openapi(getAccountAccountIdConnectorsRoute, getAccountAccountIdConnectorsRouteHandler)
  .openapi(
    getAccountAccountIdConnectorsMerchantConnectorIdRoute,
    getAccountAccountIdConnectorsMerchantConnectorIdRouteHandler,
  )
  .openapi(
    postAccountAccountIdConnectorsMerchantConnectorIdRoute,
    postAccountAccountIdConnectorsMerchantConnectorIdRouteHandler,
  )
  .openapi(
    deleteAccountAccountIdConnectorsMerchantConnectorIdRoute,
    deleteAccountAccountIdConnectorsMerchantConnectorIdRouteHandler,
  )
  .openapi(
    postAccountAccountIdWebhooksMerchantConnectorIdRoute,
    postAccountAccountIdWebhooksMerchantConnectorIdRouteHandler,
  )
  .openapi(postGsmRoute, postGsmRouteHandler)
  .openapi(postGsmGetRoute, postGsmGetRouteHandler)
  .openapi(postGsmUpdateRoute, postGsmUpdateRouteHandler)
  .openapi(postGsmDeleteRoute, postGsmDeleteRouteHandler)
  .openapi(getMandatesMandateIdRoute, getMandatesMandateIdRouteHandler)
  .openapi(postMandatesRevokeMandateIdRoute, postMandatesRevokeMandateIdRouteHandler)
  .openapi(getCustomersCustomerIdMandatesRoute, getCustomersCustomerIdMandatesRouteHandler)
  .openapi(postCustomersRoute, postCustomersRouteHandler)
  .openapi(getCustomersCustomerIdRoute, getCustomersCustomerIdRouteHandler)
  .openapi(postCustomersCustomerIdRoute, postCustomersCustomerIdRouteHandler)
  .openapi(deleteCustomersCustomerIdRoute, deleteCustomersCustomerIdRouteHandler)
  .openapi(
    getV1CustomersReferenceMerchantReferenceIdRoute,
    getV1CustomersReferenceMerchantReferenceIdRouteHandler,
  )
  .openapi(getCustomersListRoute, getCustomersListRouteHandler)
  .openapi(postPaymentMethodsRoute, postPaymentMethodsRouteHandler)
  .openapi(getAccountPaymentMethodsRoute, getAccountPaymentMethodsRouteHandler)
  .openapi(
    getCustomersCustomerIdPaymentMethodsRoute,
    getCustomersCustomerIdPaymentMethodsRouteHandler,
  )
  .openapi(getCustomersPaymentMethodsRoute, getCustomersPaymentMethodsRouteHandler)
  .openapi(getPaymentsPaymentIdClientRoute, getPaymentsPaymentIdClientRouteHandler)
  .openapi(
    postCustomerIdPaymentMethodsPaymentMethodIdDefaultRoute,
    postCustomerIdPaymentMethodsPaymentMethodIdDefaultRouteHandler,
  )
  .openapi(getPaymentMethodsMethodIdRoute, getPaymentMethodsMethodIdRouteHandler)
  .openapi(deletePaymentMethodsMethodIdRoute, deletePaymentMethodsMethodIdRouteHandler)
  .openapi(postPaymentMethodsMethodIdUpdateRoute, postPaymentMethodsMethodIdUpdateRouteHandler)
  .openapi(
    postAccountAccountIdBusinessProfileRoute,
    postAccountAccountIdBusinessProfileRouteHandler,
  )
  .openapi(getAccountAccountIdBusinessProfileRoute, getAccountAccountIdBusinessProfileRouteHandler)
  .openapi(
    getAccountAccountIdBusinessProfileProfileIdRoute,
    getAccountAccountIdBusinessProfileProfileIdRouteHandler,
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdRoute,
    postAccountAccountIdBusinessProfileProfileIdRouteHandler,
  )
  .openapi(
    deleteAccountAccountIdBusinessProfileProfileIdRoute,
    deleteAccountAccountIdBusinessProfileProfileIdRouteHandler,
  )
  .openapi(getDisputesDisputeIdRoute, getDisputesDisputeIdRouteHandler)
  .openapi(getDisputesListRoute, getDisputesListRouteHandler)
  .openapi(getDisputesProfileListRoute, getDisputesProfileListRouteHandler)
  .openapi(getDisputesFilterRoute, getDisputesFilterRouteHandler)
  .openapi(getDisputesProfileFilterRoute, getDisputesProfileFilterRouteHandler)
  .openapi(postDisputesAcceptDisputeIdRoute, postDisputesAcceptDisputeIdRouteHandler)
  .openapi(postDisputesEvidenceRoute, postDisputesEvidenceRouteHandler)
  .openapi(putDisputesEvidenceRoute, putDisputesEvidenceRouteHandler)
  .openapi(deleteDisputesEvidenceRoute, deleteDisputesEvidenceRouteHandler)
  .openapi(getDisputesEvidenceDisputeIdRoute, getDisputesEvidenceDisputeIdRouteHandler)
  .openapi(getDisputesAggregateRoute, getDisputesAggregateRouteHandler)
  .openapi(getDisputesProfileAggregateRoute, getDisputesProfileAggregateRouteHandler)
  .openapi(postRoutingRoute, postRoutingRouteHandler)
  .openapi(getRoutingRoute, getRoutingRouteHandler)
  .openapi(
    postRoutingRoutingAlgorithmIdActivateRoute,
    postRoutingRoutingAlgorithmIdActivateRouteHandler,
  )
  .openapi(getRoutingRoutingAlgorithmIdRoute, getRoutingRoutingAlgorithmIdRouteHandler)
  .openapi(postRoutingDeactivateRoute, postRoutingDeactivateRouteHandler)
  .openapi(postRoutingDefaultRoute, postRoutingDefaultRouteHandler)
  .openapi(getRoutingDefaultRoute, getRoutingDefaultRouteHandler)
  .openapi(getRoutingActiveRoute, getRoutingActiveRouteHandler)
  .openapi(getRoutingDefaultProfileRoute, getRoutingDefaultProfileRouteHandler)
  .openapi(postRoutingDefaultProfileProfileIdRoute, postRoutingDefaultProfileProfileIdRouteHandler)
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleRoute,
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedToggleRouteHandler,
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleRoute,
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationToggleRouteHandler,
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateRoute,
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingSuccessBasedCreateRouteHandler,
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateRoute,
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingEliminationCreateRouteHandler,
  )
  .openapi(
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleRoute,
    postAccountAccountIdBusinessProfileProfileIdDynamicRoutingContractsToggleRouteHandler,
  )
  .openapi(postOfferEngineOffersListRoute, postOfferEngineOffersListRouteHandler)
  .openapi(deleteBlocklistRoute, deleteBlocklistRouteHandler)
  .openapi(getBlocklistRoute, getBlocklistRouteHandler)
  .openapi(postBlocklistRoute, postBlocklistRouteHandler)
  .openapi(postBlocklistToggleRoute, postBlocklistToggleRouteHandler)
  .openapi(getBlocklistCountRoute, getBlocklistCountRouteHandler)
  .openapi(getBlocklistLookupRoute, getBlocklistLookupRouteHandler)
  .openapi(postBlocklistBatchRoute, postBlocklistBatchRouteHandler)
  .openapi(getBlocklistBatchRoute, getBlocklistBatchRouteHandler)
  .openapi(getBlocklistBatchJobIdRoute, getBlocklistBatchJobIdRouteHandler)
  .openapi(postBlocklistExportRoute, postBlocklistExportRouteHandler)
  .openapi(postBlocklistCloneRoute, postBlocklistCloneRouteHandler)
  .openapi(postPayoutsCreateRoute, postPayoutsCreateRouteHandler)
  .openapi(getPayoutsPayoutIdRoute, getPayoutsPayoutIdRouteHandler)
  .openapi(postPayoutsPayoutIdRoute, postPayoutsPayoutIdRouteHandler)
  .openapi(postPayoutsPayoutIdCancelRoute, postPayoutsPayoutIdCancelRouteHandler)
  .openapi(postPayoutsPayoutIdFulfillRoute, postPayoutsPayoutIdFulfillRouteHandler)
  .openapi(getPayoutsListRoute, getPayoutsListRouteHandler)
  .openapi(postPayoutsListRoute, postPayoutsListRouteHandler)
  .openapi(postPayoutsPayoutIdConfirmRoute, postPayoutsPayoutIdConfirmRouteHandler)
  .openapi(postPayoutsFilterRoute, postPayoutsFilterRouteHandler)
  .openapi(postApiKeysMerchantIdRoute, postApiKeysMerchantIdRouteHandler)
  .openapi(getApiKeysMerchantIdKeyIdRoute, getApiKeysMerchantIdKeyIdRouteHandler)
  .openapi(postApiKeysMerchantIdKeyIdRoute, postApiKeysMerchantIdKeyIdRouteHandler)
  .openapi(deleteApiKeysMerchantIdKeyIdRoute, deleteApiKeysMerchantIdKeyIdRouteHandler)
  .openapi(getApiKeysMerchantIdListRoute, getApiKeysMerchantIdListRouteHandler)
  .openapi(postEventsMerchantIdRoute, postEventsMerchantIdRouteHandler)
  .openapi(postEventsProfileListRoute, postEventsProfileListRouteHandler)
  .openapi(getEventsMerchantIdEventIdAttemptsRoute, getEventsMerchantIdEventIdAttemptsRouteHandler)
  .openapi(postEventsMerchantIdEventIdRetryRoute, postEventsMerchantIdEventIdRetryRouteHandler)
  .openapi(getPollStatusPollIdRoute, getPollStatusPollIdRouteHandler)
  .openapi(postProfileAcquirersRoute, postProfileAcquirersRouteHandler)
  .openapi(
    postProfileAcquirersProfileIdProfileAcquirerIdRoute,
    postProfileAcquirersProfileIdProfileAcquirerIdRouteHandler,
  )
  .openapi(postThreeDsDecisionExecuteRoute, postThreeDsDecisionExecuteRouteHandler)
  .openapi(postAuthenticationRoute, postAuthenticationRouteHandler)
  .openapi(
    postAuthenticationAuthenticationIdEligibilityRoute,
    postAuthenticationAuthenticationIdEligibilityRouteHandler,
  )
  .openapi(
    postAuthenticationAuthenticationIdAuthenticateRoute,
    postAuthenticationAuthenticationIdAuthenticateRouteHandler,
  )
  .openapi(
    postAuthenticationAuthenticationIdRedirectRoute,
    postAuthenticationAuthenticationIdRedirectRouteHandler,
  )
  .openapi(
    postAuthenticationAuthenticationIdSyncRoute,
    postAuthenticationAuthenticationIdSyncRouteHandler,
  )
  .openapi(
    postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRoute,
    postAuthenticationAuthenticationIdEnabledAuthnMethodsTokenRouteHandler,
  )
  .openapi(
    postAuthenticationAuthenticationIdEligibilityCheckRoute,
    postAuthenticationAuthenticationIdEligibilityCheckRouteHandler,
  )
  .openapi(
    getAuthenticationAuthenticationIdEligibilityCheckRoute,
    getAuthenticationAuthenticationIdEligibilityCheckRouteHandler,
  )
  .openapi(postUserCreatePlatformRoute, postUserCreatePlatformRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(postSubscriptionsCreateRoute, postSubscriptionsCreateRouteHandler)
  .openapi(
    postSubscriptionsSubscriptionIdConfirmRoute,
    postSubscriptionsSubscriptionIdConfirmRouteHandler,
  )
  .openapi(getSubscriptionsSubscriptionIdRoute, getSubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    putSubscriptionsSubscriptionIdUpdateRoute,
    putSubscriptionsSubscriptionIdUpdateRouteHandler,
  )
  .openapi(getSubscriptionsItemsRoute, getSubscriptionsItemsRouteHandler)
  .openapi(getSubscriptionsEstimateRoute, getSubscriptionsEstimateRouteHandler)
  .openapi(
    postSubscriptionsSubscriptionIdPauseRoute,
    postSubscriptionsSubscriptionIdPauseRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdResumeRoute,
    postSubscriptionsSubscriptionIdResumeRouteHandler,
  )
  .openapi(
    postSubscriptionsSubscriptionIdCancelRoute,
    postSubscriptionsSubscriptionIdCancelRouteHandler,
  )
  .openapi(postCardIssuersRoute, postCardIssuersRouteHandler)
  .openapi(getCardIssuersRoute, getCardIssuersRouteHandler)
  .openapi(putCardIssuersIdRoute, putCardIssuersIdRouteHandler)
  .openapi(deleteCardIssuersIdRoute, deleteCardIssuersIdRouteHandler)
  .openapi(
    postTelephoneOrderMerchantIdProviderRoute,
    postTelephoneOrderMerchantIdProviderRouteHandler,
  )

export default app
