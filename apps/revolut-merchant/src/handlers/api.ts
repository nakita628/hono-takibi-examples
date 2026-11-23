import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  deleteApiCustomersCustomerIdRoute,
  deleteApiLocationsLocationIdRoute,
  deleteApiSubscriptionUsagesUsageIdRoute,
  deleteApiSynchronousWebhooksSynchronousWebhookIdRoute,
  deleteApiWebhooksWebhookIdRoute,
  getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  getApiCustomersCustomerIdPaymentMethodsRoute,
  getApiCustomersCustomerIdRoute,
  getApiCustomersRoute,
  getApiDisputesDisputeIdRoute,
  getApiDisputesRoute,
  getApiLocationsLocationIdRoute,
  getApiLocationsRoute,
  getApiOrdersOrderIdPaymentsRoute,
  getApiOrdersOrderIdRoute,
  getApiOrdersRoute,
  getApiPaymentIntentsPaymentIntentIdRoute,
  getApiPaymentsPaymentIdRoute,
  getApiPayoutsPayoutIdRoute,
  getApiPayoutsRoute,
  getApiReportRunsReportRunIdFileRoute,
  getApiReportRunsReportRunIdRoute,
  getApiSubscriptionPlansRoute,
  getApiSubscriptionPlansSubscriptionPlanIdRoute,
  getApiSubscriptionsRoute,
  getApiSubscriptionsSubscriptionIdCyclesCycleIdRoute,
  getApiSubscriptionsSubscriptionIdCyclesRoute,
  getApiSubscriptionsSubscriptionIdRoute,
  getApiSubscriptionUsagesRoute,
  getApiSubscriptionUsagesUsageIdRoute,
  getApiSynchronousWebhooksRoute,
  getApiTerminalsRoute,
  getApiWebhooksRoute,
  getApiWebhooksWebhookIdRoute,
  patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
  patchApiCustomersCustomerIdRoute,
  patchApiLocationsLocationIdRoute,
  patchApiOrdersOrderIdRoute,
  patchApiSubscriptionsSubscriptionIdRoute,
  patchApiSubscriptionUsagesUsageIdRoute,
  patchApiWebhooksWebhookIdRoute,
  postApiApplePayDomainsRegisterRoute,
  postApiApplePayDomainsUnregisterRoute,
  postApiCustomersRoute,
  postApiDisputesDisputeIdAcceptRoute,
  postApiDisputesDisputeIdChallengeRoute,
  postApiDisputesDisputeIdEvidencesRoute,
  postApiLocationsRoute,
  postApiOrdersOrderIdCancelRoute,
  postApiOrdersOrderIdCaptureRoute,
  postApiOrdersOrderIdIncrementAuthorisationRoute,
  postApiOrdersOrderIdPaymentIntentsRoute,
  postApiOrdersOrderIdPaymentsRoute,
  postApiOrdersOrderIdRefundRoute,
  postApiOrdersRoute,
  postApiPaymentIntentsPaymentIntentIdCancelRoute,
  postApiReportRunsRoute,
  postApiSubscriptionPlansRoute,
  postApiSubscriptionsRoute,
  postApiSubscriptionsSubscriptionIdCancelRoute,
  postApiSubscriptionsSubscriptionIdChangePlanRoute,
  postApiSubscriptionsSubscriptionIdChangeRenewalDateRoute,
  postApiSubscriptionUsagesRoute,
  postApiSynchronousWebhooksRoute,
  postApiWebhooksRoute,
  postApiWebhooksWebhookIdRotateSigningSecretRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdIncrementAuthorisationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOrdersOrderIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersCustomerIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDisputesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDisputesDisputeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisputesDisputeIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisputesDisputeIdEvidencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDisputesDisputeIdChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionPlansSubscriptionPlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSubscriptionsSubscriptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsSubscriptionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsSubscriptionIdChangePlanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionsSubscriptionIdChangeRenewalDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsSubscriptionIdCyclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionsSubscriptionIdCyclesCycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSubscriptionUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSubscriptionUsagesUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiSubscriptionUsagesUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSubscriptionUsagesUsageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReportRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportRunsReportRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiReportRunsReportRunIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWebhooksWebhookIdRotateSigningSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplePayDomainsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiApplePayDomainsUnregisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiSynchronousWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiSynchronousWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiSynchronousWebhooksSynchronousWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTerminalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOrdersOrderIdPaymentIntentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentIntentsPaymentIntentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentIntentsPaymentIntentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
