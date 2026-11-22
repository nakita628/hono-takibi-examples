import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSubscriptionsRoute,
  getSubscriptionsSubscriptionIdAlertStatusesRoute,
  getSubscriptionsSubscriptionIdApplicableAlertsRoute,
  getSubscriptionsSubscriptionIdContractTermsRoute,
  getSubscriptionsSubscriptionIdDiscountsRoute,
  getSubscriptionsSubscriptionIdEntitlementOverridesRoute,
  getSubscriptionsSubscriptionIdRenewalEstimateRoute,
  getSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceScheduleRoute,
  getSubscriptionsSubscriptionIdRetrieveWithScheduledChangesRoute,
  getSubscriptionsSubscriptionIdRoute,
  getSubscriptionsSubscriptionIdScheduledChangesRoute,
  getSubscriptionsSubscriptionIdSubscriptionEntitlementsRoute,
  getSubscriptionsSubscriptionIdUsageChargesRoute,
  getSubscriptionsSubscriptionIdUsagesRoute,
  getSubscriptionsSubscriptionIdUsageSummaryRoute,
  postSubscriptionsSubscriptionIdAddChargeAtTermEndRoute,
  postSubscriptionsSubscriptionIdAdvanceInvoiceEstimateRoute,
  postSubscriptionsSubscriptionIdCancelForItemsRoute,
  postSubscriptionsSubscriptionIdCancelSubscriptionForItemsEstimateRoute,
  postSubscriptionsSubscriptionIdChangeTermEndEstimateRoute,
  postSubscriptionsSubscriptionIdChangeTermEndRoute,
  postSubscriptionsSubscriptionIdChargeFutureRenewalsRoute,
  postSubscriptionsSubscriptionIdCreateRampRoute,
  postSubscriptionsSubscriptionIdDeleteRoute,
  postSubscriptionsSubscriptionIdDeleteUsageRoute,
  postSubscriptionsSubscriptionIdEditAdvanceInvoiceScheduleRoute,
  postSubscriptionsSubscriptionIdEntitlementOverridesRoute,
  postSubscriptionsSubscriptionIdImportContractTermRoute,
  postSubscriptionsSubscriptionIdImportUnbilledChargesRoute,
  postSubscriptionsSubscriptionIdMoveRoute,
  postSubscriptionsSubscriptionIdOverrideBillingProfileRoute,
  postSubscriptionsSubscriptionIdPauseRoute,
  postSubscriptionsSubscriptionIdPauseSubscriptionEstimateRoute,
  postSubscriptionsSubscriptionIdReactivateRoute,
  postSubscriptionsSubscriptionIdRegenerateInvoiceEstimateRoute,
  postSubscriptionsSubscriptionIdRegenerateInvoiceRoute,
  postSubscriptionsSubscriptionIdRemoveAdvanceInvoiceScheduleRoute,
  postSubscriptionsSubscriptionIdRemoveCouponsRoute,
  postSubscriptionsSubscriptionIdRemoveScheduledCancellationRoute,
  postSubscriptionsSubscriptionIdRemoveScheduledChangesRoute,
  postSubscriptionsSubscriptionIdRemoveScheduledPauseRoute,
  postSubscriptionsSubscriptionIdRemoveScheduledResumptionRoute,
  postSubscriptionsSubscriptionIdResumeRoute,
  postSubscriptionsSubscriptionIdResumeSubscriptionEstimateRoute,
  postSubscriptionsSubscriptionIdSubscriptionEntitlementsSetAvailabilityRoute,
  postSubscriptionsSubscriptionIdUpdateForItemsRoute,
  postSubscriptionsSubscriptionIdUpdateScheduledChangesRoute,
  postSubscriptionsSubscriptionIdUsagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(postSubscriptionsSubscriptionIdRemoveAdvanceInvoiceScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdUpdateForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRemoveCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdCancelForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRegenerateInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRetrieveAdvanceInvoiceScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRemoveScheduledCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRetrieveWithScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdChargeFutureRenewalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdAddChargeAtTermEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRemoveScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdChangeTermEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdImportUnbilledChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRemoveScheduledResumptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdImportContractTermRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdOverrideBillingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRemoveScheduledPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdEditAdvanceInvoiceScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdContractTermsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdUpdateScheduledChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdRenewalEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdCancelSubscriptionForItemsEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdResumeSubscriptionEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdRegenerateInvoiceEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdChangeTermEndEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdPauseSubscriptionEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdAdvanceInvoiceEstimateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdDeleteUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdSubscriptionEntitlementsSetAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdSubscriptionEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdEntitlementOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdEntitlementOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubscriptionsSubscriptionIdCreateRampRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdUsageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdUsageChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdApplicableAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsSubscriptionIdAlertStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
