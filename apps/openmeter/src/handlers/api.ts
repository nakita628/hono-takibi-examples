import type { RouteHandler } from '@hono/zod-openapi'
import type {
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
} from '../routes'

export const getApiV1AddonsRouteHandler: RouteHandler<typeof getApiV1AddonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AddonsRouteHandler: RouteHandler<typeof postApiV1AddonsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AddonsAddonIdRouteHandler: RouteHandler<
  typeof putApiV1AddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AddonsAddonIdRouteHandler: RouteHandler<
  typeof getApiV1AddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AddonsAddonIdRouteHandler: RouteHandler<
  typeof deleteApiV1AddonsAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AddonsAddonIdArchiveRouteHandler: RouteHandler<
  typeof postApiV1AddonsAddonIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AddonsAddonIdPublishRouteHandler: RouteHandler<
  typeof postApiV1AddonsAddonIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AppsRouteHandler: RouteHandler<typeof getApiV1AppsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRouteHandler: RouteHandler<
  typeof postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRouteHandler: RouteHandler<
  typeof postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRouteHandler: RouteHandler<
  typeof postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1AppsIdRouteHandler: RouteHandler<typeof getApiV1AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1AppsIdRouteHandler: RouteHandler<typeof putApiV1AppsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1AppsIdRouteHandler: RouteHandler<typeof deleteApiV1AppsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putApiV1AppsIdStripeApiKeyRouteHandler: RouteHandler<
  typeof putApiV1AppsIdStripeApiKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1AppsIdStripeWebhookRouteHandler: RouteHandler<
  typeof postApiV1AppsIdStripeWebhookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BillingCustomersRouteHandler: RouteHandler<
  typeof getApiV1BillingCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BillingCustomersCustomerIdRouteHandler: RouteHandler<
  typeof putApiV1BillingCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BillingCustomersCustomerIdRouteHandler: RouteHandler<
  typeof getApiV1BillingCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BillingCustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteApiV1BillingCustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRouteHandler: RouteHandler<
  typeof postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingCustomersCustomerIdInvoicesSimulateRouteHandler: RouteHandler<
  typeof postApiV1BillingCustomersCustomerIdInvoicesSimulateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BillingInvoicesRouteHandler: RouteHandler<
  typeof getApiV1BillingInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BillingInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getApiV1BillingInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BillingInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof deleteApiV1BillingInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BillingInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof putApiV1BillingInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceIdAdvanceRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceIdAdvanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceIdApproveRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceIdRetryRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingInvoicesInvoiceIdVoidRouteHandler: RouteHandler<
  typeof postApiV1BillingInvoicesInvoiceIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BillingProfilesRouteHandler: RouteHandler<
  typeof getApiV1BillingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1BillingProfilesRouteHandler: RouteHandler<
  typeof postApiV1BillingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1BillingProfilesIdRouteHandler: RouteHandler<
  typeof deleteApiV1BillingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1BillingProfilesIdRouteHandler: RouteHandler<
  typeof getApiV1BillingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1BillingProfilesIdRouteHandler: RouteHandler<
  typeof putApiV1BillingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CustomersRouteHandler: RouteHandler<typeof postApiV1CustomersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersRouteHandler: RouteHandler<typeof getApiV1CustomersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersCustomerIdOrKeyRouteHandler: RouteHandler<
  typeof getApiV1CustomersCustomerIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CustomersCustomerIdOrKeyRouteHandler: RouteHandler<
  typeof putApiV1CustomersCustomerIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CustomersCustomerIdOrKeyRouteHandler: RouteHandler<
  typeof deleteApiV1CustomersCustomerIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersCustomerIdOrKeyAccessRouteHandler: RouteHandler<
  typeof getApiV1CustomersCustomerIdOrKeyAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersCustomerIdOrKeyAppsRouteHandler: RouteHandler<
  typeof getApiV1CustomersCustomerIdOrKeyAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CustomersCustomerIdOrKeyAppsRouteHandler: RouteHandler<
  typeof putApiV1CustomersCustomerIdOrKeyAppsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRouteHandler: RouteHandler<
  typeof deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRouteHandler: RouteHandler<
  typeof getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersCustomerIdOrKeyStripeRouteHandler: RouteHandler<
  typeof getApiV1CustomersCustomerIdOrKeyStripeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1CustomersCustomerIdOrKeyStripeRouteHandler: RouteHandler<
  typeof putApiV1CustomersCustomerIdOrKeyStripeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1CustomersCustomerIdOrKeyStripePortalRouteHandler: RouteHandler<
  typeof postApiV1CustomersCustomerIdOrKeyStripePortalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1CustomersCustomerIdOrKeySubscriptionsRouteHandler: RouteHandler<
  typeof getApiV1CustomersCustomerIdOrKeySubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1DebugMetricsRouteHandler: RouteHandler<
  typeof getApiV1DebugMetricsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EntitlementsRouteHandler: RouteHandler<
  typeof getApiV1EntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof getApiV1EntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1EventsRouteHandler: RouteHandler<typeof getApiV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1EventsRouteHandler: RouteHandler<typeof postApiV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1FeaturesRouteHandler: RouteHandler<typeof getApiV1FeaturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1FeaturesRouteHandler: RouteHandler<typeof postApiV1FeaturesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1FeaturesFeatureIdRouteHandler: RouteHandler<
  typeof getApiV1FeaturesFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1FeaturesFeatureIdRouteHandler: RouteHandler<
  typeof deleteApiV1FeaturesFeatureIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1GrantsRouteHandler: RouteHandler<typeof getApiV1GrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1GrantsGrantIdRouteHandler: RouteHandler<
  typeof deleteApiV1GrantsGrantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InfoCurrenciesRouteHandler: RouteHandler<
  typeof getApiV1InfoCurrenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1InfoProgressIdRouteHandler: RouteHandler<
  typeof getApiV1InfoProgressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MarketplaceListingsRouteHandler: RouteHandler<
  typeof getApiV1MarketplaceListingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MarketplaceListingsTypeRouteHandler: RouteHandler<
  typeof getApiV1MarketplaceListingsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MarketplaceListingsTypeInstallRouteHandler: RouteHandler<
  typeof postApiV1MarketplaceListingsTypeInstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MarketplaceListingsTypeInstallApikeyRouteHandler: RouteHandler<
  typeof postApiV1MarketplaceListingsTypeInstallApikeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MarketplaceListingsTypeInstallOauth2RouteHandler: RouteHandler<
  typeof getApiV1MarketplaceListingsTypeInstallOauth2Route
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRouteHandler: RouteHandler<
  typeof getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MetersRouteHandler: RouteHandler<typeof getApiV1MetersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MetersRouteHandler: RouteHandler<typeof postApiV1MetersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MetersMeterIdOrSlugRouteHandler: RouteHandler<
  typeof getApiV1MetersMeterIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1MetersMeterIdOrSlugRouteHandler: RouteHandler<
  typeof putApiV1MetersMeterIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1MetersMeterIdOrSlugRouteHandler: RouteHandler<
  typeof deleteApiV1MetersMeterIdOrSlugRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRouteHandler: RouteHandler<
  typeof getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MetersMeterIdOrSlugQueryRouteHandler: RouteHandler<
  typeof getApiV1MetersMeterIdOrSlugQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1MetersMeterIdOrSlugQueryRouteHandler: RouteHandler<
  typeof postApiV1MetersMeterIdOrSlugQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1MetersMeterIdOrSlugSubjectsRouteHandler: RouteHandler<
  typeof getApiV1MetersMeterIdOrSlugSubjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NotificationChannelsRouteHandler: RouteHandler<
  typeof getApiV1NotificationChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NotificationChannelsRouteHandler: RouteHandler<
  typeof postApiV1NotificationChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NotificationChannelsChannelIdRouteHandler: RouteHandler<
  typeof putApiV1NotificationChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NotificationChannelsChannelIdRouteHandler: RouteHandler<
  typeof getApiV1NotificationChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NotificationChannelsChannelIdRouteHandler: RouteHandler<
  typeof deleteApiV1NotificationChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NotificationEventsRouteHandler: RouteHandler<
  typeof getApiV1NotificationEventsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NotificationEventsEventIdRouteHandler: RouteHandler<
  typeof getApiV1NotificationEventsEventIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NotificationEventsEventIdResendRouteHandler: RouteHandler<
  typeof postApiV1NotificationEventsEventIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NotificationRulesRouteHandler: RouteHandler<
  typeof getApiV1NotificationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NotificationRulesRouteHandler: RouteHandler<
  typeof postApiV1NotificationRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1NotificationRulesRuleIdRouteHandler: RouteHandler<
  typeof putApiV1NotificationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1NotificationRulesRuleIdRouteHandler: RouteHandler<
  typeof getApiV1NotificationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1NotificationRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteApiV1NotificationRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1NotificationRulesRuleIdTestRouteHandler: RouteHandler<
  typeof postApiV1NotificationRulesRuleIdTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PlansRouteHandler: RouteHandler<typeof getApiV1PlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PlansRouteHandler: RouteHandler<typeof postApiV1PlansRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PlansPlanIdOrKeyNextRouteHandler: RouteHandler<
  typeof postApiV1PlansPlanIdOrKeyNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PlansPlanIdRouteHandler: RouteHandler<
  typeof putApiV1PlansPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PlansPlanIdRouteHandler: RouteHandler<
  typeof getApiV1PlansPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PlansPlanIdRouteHandler: RouteHandler<
  typeof deleteApiV1PlansPlanIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PlansPlanIdAddonsRouteHandler: RouteHandler<
  typeof getApiV1PlansPlanIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PlansPlanIdAddonsRouteHandler: RouteHandler<
  typeof postApiV1PlansPlanIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler: RouteHandler<
  typeof putApiV1PlansPlanIdAddonsPlanAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler: RouteHandler<
  typeof getApiV1PlansPlanIdAddonsPlanAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1PlansPlanIdAddonsPlanAddonIdRouteHandler: RouteHandler<
  typeof deleteApiV1PlansPlanIdAddonsPlanAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PlansPlanIdArchiveRouteHandler: RouteHandler<
  typeof postApiV1PlansPlanIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PlansPlanIdPublishRouteHandler: RouteHandler<
  typeof postApiV1PlansPlanIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PortalMetersMeterSlugQueryRouteHandler: RouteHandler<
  typeof getApiV1PortalMetersMeterSlugQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PortalTokensRouteHandler: RouteHandler<
  typeof postApiV1PortalTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1PortalTokensRouteHandler: RouteHandler<
  typeof getApiV1PortalTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1PortalTokensInvalidateRouteHandler: RouteHandler<
  typeof postApiV1PortalTokensInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1StripeCheckoutSessionsRouteHandler: RouteHandler<
  typeof postApiV1StripeCheckoutSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsRouteHandler: RouteHandler<typeof getApiV1SubjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV1SubjectsRouteHandler: RouteHandler<typeof postApiV1SubjectsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsSubjectIdOrKeyRouteHandler: RouteHandler<
  typeof getApiV1SubjectsSubjectIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SubjectsSubjectIdOrKeyRouteHandler: RouteHandler<
  typeof deleteApiV1SubjectsSubjectIdOrKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubjectsSubjectIdOrKeyEntitlementsRouteHandler: RouteHandler<
  typeof postApiV1SubjectsSubjectIdOrKeyEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsSubjectIdOrKeyEntitlementsRouteHandler: RouteHandler<
  typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler: RouteHandler<
  typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler: RouteHandler<
  typeof postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRouteHandler: RouteHandler<
  typeof putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRouteHandler: RouteHandler<
  typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRouteHandler: RouteHandler<
  typeof getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRouteHandler: RouteHandler<
  typeof postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof patchApiV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV1SubscriptionsSubscriptionIdRouteHandler: RouteHandler<
  typeof deleteApiV1SubscriptionsSubscriptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdAddonsRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsSubscriptionIdAddonsRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsSubscriptionIdAddonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRouteHandler: RouteHandler<
  typeof getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRouteHandler: RouteHandler<
  typeof patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdCancelRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdChangeRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdChangeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdMigrateRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdRestoreRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdRestoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRouteHandler: RouteHandler<
  typeof postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomersCustomerIdOrKeyEntitlementsRouteHandler: RouteHandler<
  typeof postApiV2CustomersCustomerIdOrKeyEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomersCustomerIdOrKeyEntitlementsRouteHandler: RouteHandler<
  typeof getApiV2CustomersCustomerIdOrKeyEntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRouteHandler: RouteHandler<
  typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRouteHandler: RouteHandler<
  typeof deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler: RouteHandler<
  typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRouteHandler: RouteHandler<
  typeof postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRouteHandler: RouteHandler<
  typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRouteHandler: RouteHandler<
  typeof putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRouteHandler: RouteHandler<
  typeof postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRouteHandler: RouteHandler<
  typeof getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EntitlementsRouteHandler: RouteHandler<
  typeof getApiV2EntitlementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EntitlementsEntitlementIdRouteHandler: RouteHandler<
  typeof getApiV2EntitlementsEntitlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2EventsRouteHandler: RouteHandler<typeof getApiV2EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV2GrantsRouteHandler: RouteHandler<typeof getApiV2GrantsRoute> = async (c) => {
  throw new Error('Not implemented')
}
