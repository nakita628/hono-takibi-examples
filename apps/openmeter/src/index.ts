import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1AddonsAddonIdRoute,
  deleteApiV1AppsIdRoute,
  deleteApiV1BillingCustomersCustomerIdRoute,
  deleteApiV1BillingInvoicesInvoiceIdRoute,
  deleteApiV1BillingProfilesIdRoute,
  deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRoute,
  deleteApiV1CustomersCustomerIdOrKeyRoute,
  deleteApiV1FeaturesFeatureIdRoute,
  deleteApiV1GrantsGrantIdRoute,
  deleteApiV1MetersMeterIdOrSlugRoute,
  deleteApiV1NotificationChannelsChannelIdRoute,
  deleteApiV1NotificationRulesRuleIdRoute,
  deleteApiV1PlansPlanIdAddonsPlanAddonIdRoute,
  deleteApiV1PlansPlanIdRoute,
  deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute,
  deleteApiV1SubjectsSubjectIdOrKeyRoute,
  deleteApiV1SubscriptionsSubscriptionIdRoute,
  deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute,
  getApiV1AddonsAddonIdRoute,
  getApiV1AddonsRoute,
  getApiV1AppsIdRoute,
  getApiV1AppsRoute,
  getApiV1BillingCustomersCustomerIdRoute,
  getApiV1BillingCustomersRoute,
  getApiV1BillingInvoicesInvoiceIdRoute,
  getApiV1BillingInvoicesRoute,
  getApiV1BillingProfilesIdRoute,
  getApiV1BillingProfilesRoute,
  getApiV1CustomersCustomerIdOrKeyAccessRoute,
  getApiV1CustomersCustomerIdOrKeyAppsRoute,
  getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRoute,
  getApiV1CustomersCustomerIdOrKeyRoute,
  getApiV1CustomersCustomerIdOrKeyStripeRoute,
  getApiV1CustomersCustomerIdOrKeySubscriptionsRoute,
  getApiV1CustomersRoute,
  getApiV1DebugMetricsRoute,
  getApiV1EntitlementsEntitlementIdRoute,
  getApiV1EntitlementsRoute,
  getApiV1EventsRoute,
  getApiV1FeaturesFeatureIdRoute,
  getApiV1FeaturesRoute,
  getApiV1GrantsRoute,
  getApiV1InfoCurrenciesRoute,
  getApiV1InfoProgressIdRoute,
  getApiV1MarketplaceListingsRoute,
  getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRoute,
  getApiV1MarketplaceListingsTypeInstallOauth2Route,
  getApiV1MarketplaceListingsTypeRoute,
  getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRoute,
  getApiV1MetersMeterIdOrSlugQueryRoute,
  getApiV1MetersMeterIdOrSlugRoute,
  getApiV1MetersMeterIdOrSlugSubjectsRoute,
  getApiV1MetersRoute,
  getApiV1NotificationChannelsChannelIdRoute,
  getApiV1NotificationChannelsRoute,
  getApiV1NotificationEventsEventIdRoute,
  getApiV1NotificationEventsRoute,
  getApiV1NotificationRulesRoute,
  getApiV1NotificationRulesRuleIdRoute,
  getApiV1PlansPlanIdAddonsPlanAddonIdRoute,
  getApiV1PlansPlanIdAddonsRoute,
  getApiV1PlansPlanIdRoute,
  getApiV1PlansRoute,
  getApiV1PortalMetersMeterSlugQueryRoute,
  getApiV1PortalTokensRoute,
  getApiV1SubjectsRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsRoute,
  getApiV1SubjectsSubjectIdOrKeyRoute,
  getApiV1SubscriptionsSubscriptionIdAddonsRoute,
  getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute,
  getApiV1SubscriptionsSubscriptionIdRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute,
  getApiV2CustomersCustomerIdOrKeyEntitlementsRoute,
  getApiV2EntitlementsEntitlementIdRoute,
  getApiV2EntitlementsRoute,
  getApiV2EventsRoute,
  getApiV2GrantsRoute,
  patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute,
  patchApiV1SubscriptionsSubscriptionIdRoute,
  postApiV1AddonsAddonIdArchiveRoute,
  postApiV1AddonsAddonIdPublishRoute,
  postApiV1AddonsRoute,
  postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRoute,
  postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRoute,
  postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRoute,
  postApiV1AppsIdStripeWebhookRoute,
  postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRoute,
  postApiV1BillingCustomersCustomerIdInvoicesSimulateRoute,
  postApiV1BillingInvoicesInvoiceIdAdvanceRoute,
  postApiV1BillingInvoicesInvoiceIdApproveRoute,
  postApiV1BillingInvoicesInvoiceIdRetryRoute,
  postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRoute,
  postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRoute,
  postApiV1BillingInvoicesInvoiceIdVoidRoute,
  postApiV1BillingInvoicesInvoiceRoute,
  postApiV1BillingProfilesRoute,
  postApiV1CustomersCustomerIdOrKeyStripePortalRoute,
  postApiV1CustomersRoute,
  postApiV1EventsRoute,
  postApiV1FeaturesRoute,
  postApiV1MarketplaceListingsTypeInstallApikeyRoute,
  postApiV1MarketplaceListingsTypeInstallRoute,
  postApiV1MetersMeterIdOrSlugQueryRoute,
  postApiV1MetersRoute,
  postApiV1NotificationChannelsRoute,
  postApiV1NotificationEventsEventIdResendRoute,
  postApiV1NotificationRulesRoute,
  postApiV1NotificationRulesRuleIdTestRoute,
  postApiV1PlansPlanIdAddonsRoute,
  postApiV1PlansPlanIdArchiveRoute,
  postApiV1PlansPlanIdOrKeyNextRoute,
  postApiV1PlansPlanIdPublishRoute,
  postApiV1PlansRoute,
  postApiV1PortalTokensInvalidateRoute,
  postApiV1PortalTokensRoute,
  postApiV1StripeCheckoutSessionsRoute,
  postApiV1SubjectsRoute,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRoute,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsRoute,
  postApiV1SubscriptionsRoute,
  postApiV1SubscriptionsSubscriptionIdAddonsRoute,
  postApiV1SubscriptionsSubscriptionIdCancelRoute,
  postApiV1SubscriptionsSubscriptionIdChangeRoute,
  postApiV1SubscriptionsSubscriptionIdMigrateRoute,
  postApiV1SubscriptionsSubscriptionIdRestoreRoute,
  postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRoute,
  postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
  postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRoute,
  postApiV2CustomersCustomerIdOrKeyEntitlementsRoute,
  putApiV1AddonsAddonIdRoute,
  putApiV1AppsIdRoute,
  putApiV1AppsIdStripeApiKeyRoute,
  putApiV1BillingCustomersCustomerIdRoute,
  putApiV1BillingInvoicesInvoiceIdRoute,
  putApiV1BillingProfilesIdRoute,
  putApiV1CustomersCustomerIdOrKeyAppsRoute,
  putApiV1CustomersCustomerIdOrKeyRoute,
  putApiV1CustomersCustomerIdOrKeyStripeRoute,
  putApiV1MetersMeterIdOrSlugRoute,
  putApiV1NotificationChannelsChannelIdRoute,
  putApiV1NotificationRulesRuleIdRoute,
  putApiV1PlansPlanIdAddonsPlanAddonIdRoute,
  putApiV1PlansPlanIdRoute,
  putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
  putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
} from './routes'
import {
  deleteApiV1AddonsAddonIdRouteHandler,
  deleteApiV1AppsIdRouteHandler,
  deleteApiV1BillingCustomersCustomerIdRouteHandler,
  deleteApiV1BillingInvoicesInvoiceIdRouteHandler,
  deleteApiV1BillingProfilesIdRouteHandler,
  deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRouteHandler,
  deleteApiV1CustomersCustomerIdOrKeyRouteHandler,
  deleteApiV1FeaturesFeatureIdRouteHandler,
  deleteApiV1GrantsGrantIdRouteHandler,
  deleteApiV1MetersMeterIdOrSlugRouteHandler,
  deleteApiV1NotificationChannelsChannelIdRouteHandler,
  deleteApiV1NotificationRulesRuleIdRouteHandler,
  deleteApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler,
  deleteApiV1PlansPlanIdRouteHandler,
  deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRouteHandler,
  deleteApiV1SubjectsSubjectIdOrKeyRouteHandler,
  deleteApiV1SubscriptionsSubscriptionIdRouteHandler,
  deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRouteHandler,
  getApiV1AddonsAddonIdRouteHandler,
  getApiV1AddonsRouteHandler,
  getApiV1AppsIdRouteHandler,
  getApiV1AppsRouteHandler,
  getApiV1BillingCustomersCustomerIdRouteHandler,
  getApiV1BillingCustomersRouteHandler,
  getApiV1BillingInvoicesInvoiceIdRouteHandler,
  getApiV1BillingInvoicesRouteHandler,
  getApiV1BillingProfilesIdRouteHandler,
  getApiV1BillingProfilesRouteHandler,
  getApiV1CustomersCustomerIdOrKeyAccessRouteHandler,
  getApiV1CustomersCustomerIdOrKeyAppsRouteHandler,
  getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRouteHandler,
  getApiV1CustomersCustomerIdOrKeyRouteHandler,
  getApiV1CustomersCustomerIdOrKeyStripeRouteHandler,
  getApiV1CustomersCustomerIdOrKeySubscriptionsRouteHandler,
  getApiV1CustomersRouteHandler,
  getApiV1DebugMetricsRouteHandler,
  getApiV1EntitlementsEntitlementIdRouteHandler,
  getApiV1EntitlementsRouteHandler,
  getApiV1EventsRouteHandler,
  getApiV1FeaturesFeatureIdRouteHandler,
  getApiV1FeaturesRouteHandler,
  getApiV1GrantsRouteHandler,
  getApiV1InfoCurrenciesRouteHandler,
  getApiV1InfoProgressIdRouteHandler,
  getApiV1MarketplaceListingsRouteHandler,
  getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRouteHandler,
  getApiV1MarketplaceListingsTypeInstallOauth2RouteHandler,
  getApiV1MarketplaceListingsTypeRouteHandler,
  getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRouteHandler,
  getApiV1MetersMeterIdOrSlugQueryRouteHandler,
  getApiV1MetersMeterIdOrSlugRouteHandler,
  getApiV1MetersMeterIdOrSlugSubjectsRouteHandler,
  getApiV1MetersRouteHandler,
  getApiV1NotificationChannelsChannelIdRouteHandler,
  getApiV1NotificationChannelsRouteHandler,
  getApiV1NotificationEventsEventIdRouteHandler,
  getApiV1NotificationEventsRouteHandler,
  getApiV1NotificationRulesRouteHandler,
  getApiV1NotificationRulesRuleIdRouteHandler,
  getApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler,
  getApiV1PlansPlanIdAddonsRouteHandler,
  getApiV1PlansPlanIdRouteHandler,
  getApiV1PlansRouteHandler,
  getApiV1PortalMetersMeterSlugQueryRouteHandler,
  getApiV1PortalTokensRouteHandler,
  getApiV1SubjectsRouteHandler,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRouteHandler,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRouteHandler,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRouteHandler,
  getApiV1SubjectsSubjectIdOrKeyEntitlementsRouteHandler,
  getApiV1SubjectsSubjectIdOrKeyRouteHandler,
  getApiV1SubscriptionsSubscriptionIdAddonsRouteHandler,
  getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRouteHandler,
  getApiV1SubscriptionsSubscriptionIdRouteHandler,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRouteHandler,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRouteHandler,
  getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRouteHandler,
  getApiV2CustomersCustomerIdOrKeyEntitlementsRouteHandler,
  getApiV2EntitlementsEntitlementIdRouteHandler,
  getApiV2EntitlementsRouteHandler,
  getApiV2EventsRouteHandler,
  getApiV2GrantsRouteHandler,
  patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRouteHandler,
  patchApiV1SubscriptionsSubscriptionIdRouteHandler,
  postApiV1AddonsAddonIdArchiveRouteHandler,
  postApiV1AddonsAddonIdPublishRouteHandler,
  postApiV1AddonsRouteHandler,
  postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRouteHandler,
  postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRouteHandler,
  postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRouteHandler,
  postApiV1AppsIdStripeWebhookRouteHandler,
  postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRouteHandler,
  postApiV1BillingCustomersCustomerIdInvoicesSimulateRouteHandler,
  postApiV1BillingInvoicesInvoiceIdAdvanceRouteHandler,
  postApiV1BillingInvoicesInvoiceIdApproveRouteHandler,
  postApiV1BillingInvoicesInvoiceIdRetryRouteHandler,
  postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRouteHandler,
  postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRouteHandler,
  postApiV1BillingInvoicesInvoiceIdVoidRouteHandler,
  postApiV1BillingInvoicesInvoiceRouteHandler,
  postApiV1BillingProfilesRouteHandler,
  postApiV1CustomersCustomerIdOrKeyStripePortalRouteHandler,
  postApiV1CustomersRouteHandler,
  postApiV1EventsRouteHandler,
  postApiV1FeaturesRouteHandler,
  postApiV1MarketplaceListingsTypeInstallApikeyRouteHandler,
  postApiV1MarketplaceListingsTypeInstallRouteHandler,
  postApiV1MetersMeterIdOrSlugQueryRouteHandler,
  postApiV1MetersRouteHandler,
  postApiV1NotificationChannelsRouteHandler,
  postApiV1NotificationEventsEventIdResendRouteHandler,
  postApiV1NotificationRulesRouteHandler,
  postApiV1NotificationRulesRuleIdTestRouteHandler,
  postApiV1PlansPlanIdAddonsRouteHandler,
  postApiV1PlansPlanIdArchiveRouteHandler,
  postApiV1PlansPlanIdOrKeyNextRouteHandler,
  postApiV1PlansPlanIdPublishRouteHandler,
  postApiV1PlansRouteHandler,
  postApiV1PortalTokensInvalidateRouteHandler,
  postApiV1PortalTokensRouteHandler,
  postApiV1StripeCheckoutSessionsRouteHandler,
  postApiV1SubjectsRouteHandler,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRouteHandler,
  postApiV1SubjectsSubjectIdOrKeyEntitlementsRouteHandler,
  postApiV1SubscriptionsRouteHandler,
  postApiV1SubscriptionsSubscriptionIdAddonsRouteHandler,
  postApiV1SubscriptionsSubscriptionIdCancelRouteHandler,
  postApiV1SubscriptionsSubscriptionIdChangeRouteHandler,
  postApiV1SubscriptionsSubscriptionIdMigrateRouteHandler,
  postApiV1SubscriptionsSubscriptionIdRestoreRouteHandler,
  postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRouteHandler,
  postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRouteHandler,
  postApiV2CustomersCustomerIdOrKeyEntitlementsRouteHandler,
  putApiV1AddonsAddonIdRouteHandler,
  putApiV1AppsIdRouteHandler,
  putApiV1AppsIdStripeApiKeyRouteHandler,
  putApiV1BillingCustomersCustomerIdRouteHandler,
  putApiV1BillingInvoicesInvoiceIdRouteHandler,
  putApiV1BillingProfilesIdRouteHandler,
  putApiV1CustomersCustomerIdOrKeyAppsRouteHandler,
  putApiV1CustomersCustomerIdOrKeyRouteHandler,
  putApiV1CustomersCustomerIdOrKeyStripeRouteHandler,
  putApiV1MetersMeterIdOrSlugRouteHandler,
  putApiV1NotificationChannelsChannelIdRouteHandler,
  putApiV1NotificationRulesRuleIdRouteHandler,
  putApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler,
  putApiV1PlansPlanIdRouteHandler,
  putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRouteHandler,
  putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1AddonsRoute, getApiV1AddonsRouteHandler)
  .openapi(postApiV1AddonsRoute, postApiV1AddonsRouteHandler)
  .openapi(putApiV1AddonsAddonIdRoute, putApiV1AddonsAddonIdRouteHandler)
  .openapi(getApiV1AddonsAddonIdRoute, getApiV1AddonsAddonIdRouteHandler)
  .openapi(deleteApiV1AddonsAddonIdRoute, deleteApiV1AddonsAddonIdRouteHandler)
  .openapi(postApiV1AddonsAddonIdArchiveRoute, postApiV1AddonsAddonIdArchiveRouteHandler)
  .openapi(postApiV1AddonsAddonIdPublishRoute, postApiV1AddonsAddonIdPublishRouteHandler)
  .openapi(getApiV1AppsRoute, getApiV1AppsRouteHandler)
  .openapi(
    postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRoute,
    postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRouteHandler,
  )
  .openapi(
    postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRoute,
    postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRouteHandler,
  )
  .openapi(
    postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRoute,
    postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRouteHandler,
  )
  .openapi(getApiV1AppsIdRoute, getApiV1AppsIdRouteHandler)
  .openapi(putApiV1AppsIdRoute, putApiV1AppsIdRouteHandler)
  .openapi(deleteApiV1AppsIdRoute, deleteApiV1AppsIdRouteHandler)
  .openapi(putApiV1AppsIdStripeApiKeyRoute, putApiV1AppsIdStripeApiKeyRouteHandler)
  .openapi(postApiV1AppsIdStripeWebhookRoute, postApiV1AppsIdStripeWebhookRouteHandler)
  .openapi(getApiV1BillingCustomersRoute, getApiV1BillingCustomersRouteHandler)
  .openapi(putApiV1BillingCustomersCustomerIdRoute, putApiV1BillingCustomersCustomerIdRouteHandler)
  .openapi(getApiV1BillingCustomersCustomerIdRoute, getApiV1BillingCustomersCustomerIdRouteHandler)
  .openapi(
    deleteApiV1BillingCustomersCustomerIdRoute,
    deleteApiV1BillingCustomersCustomerIdRouteHandler,
  )
  .openapi(
    postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRoute,
    postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRouteHandler,
  )
  .openapi(
    postApiV1BillingCustomersCustomerIdInvoicesSimulateRoute,
    postApiV1BillingCustomersCustomerIdInvoicesSimulateRouteHandler,
  )
  .openapi(getApiV1BillingInvoicesRoute, getApiV1BillingInvoicesRouteHandler)
  .openapi(postApiV1BillingInvoicesInvoiceRoute, postApiV1BillingInvoicesInvoiceRouteHandler)
  .openapi(getApiV1BillingInvoicesInvoiceIdRoute, getApiV1BillingInvoicesInvoiceIdRouteHandler)
  .openapi(
    deleteApiV1BillingInvoicesInvoiceIdRoute,
    deleteApiV1BillingInvoicesInvoiceIdRouteHandler,
  )
  .openapi(putApiV1BillingInvoicesInvoiceIdRoute, putApiV1BillingInvoicesInvoiceIdRouteHandler)
  .openapi(
    postApiV1BillingInvoicesInvoiceIdAdvanceRoute,
    postApiV1BillingInvoicesInvoiceIdAdvanceRouteHandler,
  )
  .openapi(
    postApiV1BillingInvoicesInvoiceIdApproveRoute,
    postApiV1BillingInvoicesInvoiceIdApproveRouteHandler,
  )
  .openapi(
    postApiV1BillingInvoicesInvoiceIdRetryRoute,
    postApiV1BillingInvoicesInvoiceIdRetryRouteHandler,
  )
  .openapi(
    postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRoute,
    postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRouteHandler,
  )
  .openapi(
    postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRoute,
    postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRouteHandler,
  )
  .openapi(
    postApiV1BillingInvoicesInvoiceIdVoidRoute,
    postApiV1BillingInvoicesInvoiceIdVoidRouteHandler,
  )
  .openapi(getApiV1BillingProfilesRoute, getApiV1BillingProfilesRouteHandler)
  .openapi(postApiV1BillingProfilesRoute, postApiV1BillingProfilesRouteHandler)
  .openapi(deleteApiV1BillingProfilesIdRoute, deleteApiV1BillingProfilesIdRouteHandler)
  .openapi(getApiV1BillingProfilesIdRoute, getApiV1BillingProfilesIdRouteHandler)
  .openapi(putApiV1BillingProfilesIdRoute, putApiV1BillingProfilesIdRouteHandler)
  .openapi(postApiV1CustomersRoute, postApiV1CustomersRouteHandler)
  .openapi(getApiV1CustomersRoute, getApiV1CustomersRouteHandler)
  .openapi(getApiV1CustomersCustomerIdOrKeyRoute, getApiV1CustomersCustomerIdOrKeyRouteHandler)
  .openapi(putApiV1CustomersCustomerIdOrKeyRoute, putApiV1CustomersCustomerIdOrKeyRouteHandler)
  .openapi(
    deleteApiV1CustomersCustomerIdOrKeyRoute,
    deleteApiV1CustomersCustomerIdOrKeyRouteHandler,
  )
  .openapi(
    getApiV1CustomersCustomerIdOrKeyAccessRoute,
    getApiV1CustomersCustomerIdOrKeyAccessRouteHandler,
  )
  .openapi(
    getApiV1CustomersCustomerIdOrKeyAppsRoute,
    getApiV1CustomersCustomerIdOrKeyAppsRouteHandler,
  )
  .openapi(
    putApiV1CustomersCustomerIdOrKeyAppsRoute,
    putApiV1CustomersCustomerIdOrKeyAppsRouteHandler,
  )
  .openapi(
    deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRoute,
    deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRouteHandler,
  )
  .openapi(
    getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRoute,
    getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRouteHandler,
  )
  .openapi(
    getApiV1CustomersCustomerIdOrKeyStripeRoute,
    getApiV1CustomersCustomerIdOrKeyStripeRouteHandler,
  )
  .openapi(
    putApiV1CustomersCustomerIdOrKeyStripeRoute,
    putApiV1CustomersCustomerIdOrKeyStripeRouteHandler,
  )
  .openapi(
    postApiV1CustomersCustomerIdOrKeyStripePortalRoute,
    postApiV1CustomersCustomerIdOrKeyStripePortalRouteHandler,
  )
  .openapi(
    getApiV1CustomersCustomerIdOrKeySubscriptionsRoute,
    getApiV1CustomersCustomerIdOrKeySubscriptionsRouteHandler,
  )
  .openapi(getApiV1DebugMetricsRoute, getApiV1DebugMetricsRouteHandler)
  .openapi(getApiV1EntitlementsRoute, getApiV1EntitlementsRouteHandler)
  .openapi(getApiV1EntitlementsEntitlementIdRoute, getApiV1EntitlementsEntitlementIdRouteHandler)
  .openapi(getApiV1EventsRoute, getApiV1EventsRouteHandler)
  .openapi(postApiV1EventsRoute, postApiV1EventsRouteHandler)
  .openapi(getApiV1FeaturesRoute, getApiV1FeaturesRouteHandler)
  .openapi(postApiV1FeaturesRoute, postApiV1FeaturesRouteHandler)
  .openapi(getApiV1FeaturesFeatureIdRoute, getApiV1FeaturesFeatureIdRouteHandler)
  .openapi(deleteApiV1FeaturesFeatureIdRoute, deleteApiV1FeaturesFeatureIdRouteHandler)
  .openapi(getApiV1GrantsRoute, getApiV1GrantsRouteHandler)
  .openapi(deleteApiV1GrantsGrantIdRoute, deleteApiV1GrantsGrantIdRouteHandler)
  .openapi(getApiV1InfoCurrenciesRoute, getApiV1InfoCurrenciesRouteHandler)
  .openapi(getApiV1InfoProgressIdRoute, getApiV1InfoProgressIdRouteHandler)
  .openapi(getApiV1MarketplaceListingsRoute, getApiV1MarketplaceListingsRouteHandler)
  .openapi(getApiV1MarketplaceListingsTypeRoute, getApiV1MarketplaceListingsTypeRouteHandler)
  .openapi(
    postApiV1MarketplaceListingsTypeInstallRoute,
    postApiV1MarketplaceListingsTypeInstallRouteHandler,
  )
  .openapi(
    postApiV1MarketplaceListingsTypeInstallApikeyRoute,
    postApiV1MarketplaceListingsTypeInstallApikeyRouteHandler,
  )
  .openapi(
    getApiV1MarketplaceListingsTypeInstallOauth2Route,
    getApiV1MarketplaceListingsTypeInstallOauth2RouteHandler,
  )
  .openapi(
    getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRoute,
    getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRouteHandler,
  )
  .openapi(getApiV1MetersRoute, getApiV1MetersRouteHandler)
  .openapi(postApiV1MetersRoute, postApiV1MetersRouteHandler)
  .openapi(getApiV1MetersMeterIdOrSlugRoute, getApiV1MetersMeterIdOrSlugRouteHandler)
  .openapi(putApiV1MetersMeterIdOrSlugRoute, putApiV1MetersMeterIdOrSlugRouteHandler)
  .openapi(deleteApiV1MetersMeterIdOrSlugRoute, deleteApiV1MetersMeterIdOrSlugRouteHandler)
  .openapi(
    getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRoute,
    getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRouteHandler,
  )
  .openapi(getApiV1MetersMeterIdOrSlugQueryRoute, getApiV1MetersMeterIdOrSlugQueryRouteHandler)
  .openapi(postApiV1MetersMeterIdOrSlugQueryRoute, postApiV1MetersMeterIdOrSlugQueryRouteHandler)
  .openapi(
    getApiV1MetersMeterIdOrSlugSubjectsRoute,
    getApiV1MetersMeterIdOrSlugSubjectsRouteHandler,
  )
  .openapi(getApiV1NotificationChannelsRoute, getApiV1NotificationChannelsRouteHandler)
  .openapi(postApiV1NotificationChannelsRoute, postApiV1NotificationChannelsRouteHandler)
  .openapi(
    putApiV1NotificationChannelsChannelIdRoute,
    putApiV1NotificationChannelsChannelIdRouteHandler,
  )
  .openapi(
    getApiV1NotificationChannelsChannelIdRoute,
    getApiV1NotificationChannelsChannelIdRouteHandler,
  )
  .openapi(
    deleteApiV1NotificationChannelsChannelIdRoute,
    deleteApiV1NotificationChannelsChannelIdRouteHandler,
  )
  .openapi(getApiV1NotificationEventsRoute, getApiV1NotificationEventsRouteHandler)
  .openapi(getApiV1NotificationEventsEventIdRoute, getApiV1NotificationEventsEventIdRouteHandler)
  .openapi(
    postApiV1NotificationEventsEventIdResendRoute,
    postApiV1NotificationEventsEventIdResendRouteHandler,
  )
  .openapi(getApiV1NotificationRulesRoute, getApiV1NotificationRulesRouteHandler)
  .openapi(postApiV1NotificationRulesRoute, postApiV1NotificationRulesRouteHandler)
  .openapi(putApiV1NotificationRulesRuleIdRoute, putApiV1NotificationRulesRuleIdRouteHandler)
  .openapi(getApiV1NotificationRulesRuleIdRoute, getApiV1NotificationRulesRuleIdRouteHandler)
  .openapi(deleteApiV1NotificationRulesRuleIdRoute, deleteApiV1NotificationRulesRuleIdRouteHandler)
  .openapi(
    postApiV1NotificationRulesRuleIdTestRoute,
    postApiV1NotificationRulesRuleIdTestRouteHandler,
  )
  .openapi(getApiV1PlansRoute, getApiV1PlansRouteHandler)
  .openapi(postApiV1PlansRoute, postApiV1PlansRouteHandler)
  .openapi(postApiV1PlansPlanIdOrKeyNextRoute, postApiV1PlansPlanIdOrKeyNextRouteHandler)
  .openapi(putApiV1PlansPlanIdRoute, putApiV1PlansPlanIdRouteHandler)
  .openapi(getApiV1PlansPlanIdRoute, getApiV1PlansPlanIdRouteHandler)
  .openapi(deleteApiV1PlansPlanIdRoute, deleteApiV1PlansPlanIdRouteHandler)
  .openapi(getApiV1PlansPlanIdAddonsRoute, getApiV1PlansPlanIdAddonsRouteHandler)
  .openapi(postApiV1PlansPlanIdAddonsRoute, postApiV1PlansPlanIdAddonsRouteHandler)
  .openapi(
    putApiV1PlansPlanIdAddonsPlanAddonIdRoute,
    putApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler,
  )
  .openapi(
    getApiV1PlansPlanIdAddonsPlanAddonIdRoute,
    getApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler,
  )
  .openapi(
    deleteApiV1PlansPlanIdAddonsPlanAddonIdRoute,
    deleteApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler,
  )
  .openapi(postApiV1PlansPlanIdArchiveRoute, postApiV1PlansPlanIdArchiveRouteHandler)
  .openapi(postApiV1PlansPlanIdPublishRoute, postApiV1PlansPlanIdPublishRouteHandler)
  .openapi(getApiV1PortalMetersMeterSlugQueryRoute, getApiV1PortalMetersMeterSlugQueryRouteHandler)
  .openapi(postApiV1PortalTokensRoute, postApiV1PortalTokensRouteHandler)
  .openapi(getApiV1PortalTokensRoute, getApiV1PortalTokensRouteHandler)
  .openapi(postApiV1PortalTokensInvalidateRoute, postApiV1PortalTokensInvalidateRouteHandler)
  .openapi(postApiV1StripeCheckoutSessionsRoute, postApiV1StripeCheckoutSessionsRouteHandler)
  .openapi(getApiV1SubjectsRoute, getApiV1SubjectsRouteHandler)
  .openapi(postApiV1SubjectsRoute, postApiV1SubjectsRouteHandler)
  .openapi(getApiV1SubjectsSubjectIdOrKeyRoute, getApiV1SubjectsSubjectIdOrKeyRouteHandler)
  .openapi(deleteApiV1SubjectsSubjectIdOrKeyRoute, deleteApiV1SubjectsSubjectIdOrKeyRouteHandler)
  .openapi(
    postApiV1SubjectsSubjectIdOrKeyEntitlementsRoute,
    postApiV1SubjectsSubjectIdOrKeyEntitlementsRouteHandler,
  )
  .openapi(
    getApiV1SubjectsSubjectIdOrKeyEntitlementsRoute,
    getApiV1SubjectsSubjectIdOrKeyEntitlementsRouteHandler,
  )
  .openapi(
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  )
  .openapi(
    postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  )
  .openapi(
    putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
    putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRouteHandler,
  )
  .openapi(
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute,
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRouteHandler,
  )
  .openapi(
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute,
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRouteHandler,
  )
  .openapi(
    deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute,
    deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRouteHandler,
  )
  .openapi(
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRoute,
    getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRouteHandler,
  )
  .openapi(
    postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRoute,
    postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRouteHandler,
  )
  .openapi(postApiV1SubscriptionsRoute, postApiV1SubscriptionsRouteHandler)
  .openapi(
    getApiV1SubscriptionsSubscriptionIdRoute,
    getApiV1SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    patchApiV1SubscriptionsSubscriptionIdRoute,
    patchApiV1SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    deleteApiV1SubscriptionsSubscriptionIdRoute,
    deleteApiV1SubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdAddonsRoute,
    postApiV1SubscriptionsSubscriptionIdAddonsRouteHandler,
  )
  .openapi(
    getApiV1SubscriptionsSubscriptionIdAddonsRoute,
    getApiV1SubscriptionsSubscriptionIdAddonsRouteHandler,
  )
  .openapi(
    getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute,
    getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRouteHandler,
  )
  .openapi(
    patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute,
    patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRouteHandler,
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdCancelRoute,
    postApiV1SubscriptionsSubscriptionIdCancelRouteHandler,
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdChangeRoute,
    postApiV1SubscriptionsSubscriptionIdChangeRouteHandler,
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdMigrateRoute,
    postApiV1SubscriptionsSubscriptionIdMigrateRouteHandler,
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdRestoreRoute,
    postApiV1SubscriptionsSubscriptionIdRestoreRouteHandler,
  )
  .openapi(
    postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRoute,
    postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRouteHandler,
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsRoute,
    postApiV2CustomersCustomerIdOrKeyEntitlementsRouteHandler,
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsRoute,
    getApiV2CustomersCustomerIdOrKeyEntitlementsRouteHandler,
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute,
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRouteHandler,
  )
  .openapi(
    deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute,
    deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRouteHandler,
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler,
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRoute,
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRouteHandler,
  )
  .openapi(
    putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
    putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRouteHandler,
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRoute,
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRouteHandler,
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute,
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRouteHandler,
  )
  .openapi(getApiV2EntitlementsRoute, getApiV2EntitlementsRouteHandler)
  .openapi(getApiV2EntitlementsEntitlementIdRoute, getApiV2EntitlementsEntitlementIdRouteHandler)
  .openapi(getApiV2EventsRoute, getApiV2EventsRouteHandler)
  .openapi(getApiV2GrantsRoute, getApiV2GrantsRouteHandler)

export default app
