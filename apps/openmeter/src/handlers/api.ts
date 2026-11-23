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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1AddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AddonsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AddonsAddonIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AddonsAddonIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsCustomInvoicingInvoiceIdDraftSynchronizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsCustomInvoicingInvoiceIdIssuingSynchronizedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsCustomInvoicingInvoiceIdPaymentStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1AppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1AppsIdStripeApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AppsIdStripeWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BillingCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BillingCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingCustomersCustomerIdInvoicesPendingLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingCustomersCustomerIdInvoicesSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdSnapshotQuantitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdTaxesRecalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingInvoicesInvoiceIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1BillingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1BillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1BillingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomersCustomerIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomersCustomerIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomersCustomerIdOrKeyAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CustomersCustomerIdOrKeyAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyEntitlementsFeatureKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeyStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CustomersCustomerIdOrKeyStripeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CustomersCustomerIdOrKeyStripePortalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CustomersCustomerIdOrKeySubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DebugMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1FeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1FeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1FeaturesFeatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1GrantsGrantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InfoCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InfoProgressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MarketplaceListingsTypeInstallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MarketplaceListingsTypeInstallApikeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsTypeInstallOauth2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MarketplaceListingsTypeInstallOauth2AuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MetersMeterIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MetersMeterIdOrSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugGroupByGroupByKeyValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MetersMeterIdOrSlugQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetersMeterIdOrSlugSubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationEventsEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationEventsEventIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRulesRuleIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdOrKeyNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PlansPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansPlanIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PlansPlanIdAddonsPlanAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PlansPlanIdAddonsPlanAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PlansPlanIdAddonsPlanAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PlansPlanIdPublishRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PortalMetersMeterSlugQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PortalTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PortalTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PortalTokensInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1StripeCheckoutSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubjectsSubjectIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsSubjectIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubjectsSubjectIdOrKeyEntitlementsEntitlementIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsSubscriptionIdAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1SubscriptionsSubscriptionIdAddonsSubscriptionAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SubscriptionsSubscriptionIdUnscheduleCancelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CustomersCustomerIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomersCustomerIdOrKeyEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyGrantsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyOverrideRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyResetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2CustomersCustomerIdOrKeyEntitlementsEntitlementIdOrFeatureKeyValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EntitlementsEntitlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
