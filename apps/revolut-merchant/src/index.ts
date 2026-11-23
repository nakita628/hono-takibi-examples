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
} from './routes'
import {
  deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  deleteApiCustomersCustomerIdRouteHandler,
  deleteApiLocationsLocationIdRouteHandler,
  deleteApiSubscriptionUsagesUsageIdRouteHandler,
  deleteApiSynchronousWebhooksSynchronousWebhookIdRouteHandler,
  deleteApiWebhooksWebhookIdRouteHandler,
  getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  getApiCustomersCustomerIdPaymentMethodsRouteHandler,
  getApiCustomersCustomerIdRouteHandler,
  getApiCustomersRouteHandler,
  getApiDisputesDisputeIdRouteHandler,
  getApiDisputesRouteHandler,
  getApiLocationsLocationIdRouteHandler,
  getApiLocationsRouteHandler,
  getApiOrdersOrderIdPaymentsRouteHandler,
  getApiOrdersOrderIdRouteHandler,
  getApiOrdersRouteHandler,
  getApiPaymentIntentsPaymentIntentIdRouteHandler,
  getApiPaymentsPaymentIdRouteHandler,
  getApiPayoutsPayoutIdRouteHandler,
  getApiPayoutsRouteHandler,
  getApiReportRunsReportRunIdFileRouteHandler,
  getApiReportRunsReportRunIdRouteHandler,
  getApiSubscriptionPlansRouteHandler,
  getApiSubscriptionPlansSubscriptionPlanIdRouteHandler,
  getApiSubscriptionsRouteHandler,
  getApiSubscriptionsSubscriptionIdCyclesCycleIdRouteHandler,
  getApiSubscriptionsSubscriptionIdCyclesRouteHandler,
  getApiSubscriptionsSubscriptionIdRouteHandler,
  getApiSubscriptionUsagesRouteHandler,
  getApiSubscriptionUsagesUsageIdRouteHandler,
  getApiSynchronousWebhooksRouteHandler,
  getApiTerminalsRouteHandler,
  getApiWebhooksRouteHandler,
  getApiWebhooksWebhookIdRouteHandler,
  patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  patchApiCustomersCustomerIdRouteHandler,
  patchApiLocationsLocationIdRouteHandler,
  patchApiOrdersOrderIdRouteHandler,
  patchApiSubscriptionsSubscriptionIdRouteHandler,
  patchApiSubscriptionUsagesUsageIdRouteHandler,
  patchApiWebhooksWebhookIdRouteHandler,
  postApiApplePayDomainsRegisterRouteHandler,
  postApiApplePayDomainsUnregisterRouteHandler,
  postApiCustomersRouteHandler,
  postApiDisputesDisputeIdAcceptRouteHandler,
  postApiDisputesDisputeIdChallengeRouteHandler,
  postApiDisputesDisputeIdEvidencesRouteHandler,
  postApiLocationsRouteHandler,
  postApiOrdersOrderIdCancelRouteHandler,
  postApiOrdersOrderIdCaptureRouteHandler,
  postApiOrdersOrderIdIncrementAuthorisationRouteHandler,
  postApiOrdersOrderIdPaymentIntentsRouteHandler,
  postApiOrdersOrderIdPaymentsRouteHandler,
  postApiOrdersOrderIdRefundRouteHandler,
  postApiOrdersRouteHandler,
  postApiPaymentIntentsPaymentIntentIdCancelRouteHandler,
  postApiReportRunsRouteHandler,
  postApiSubscriptionPlansRouteHandler,
  postApiSubscriptionsRouteHandler,
  postApiSubscriptionsSubscriptionIdCancelRouteHandler,
  postApiSubscriptionsSubscriptionIdChangePlanRouteHandler,
  postApiSubscriptionsSubscriptionIdChangeRenewalDateRouteHandler,
  postApiSubscriptionUsagesRouteHandler,
  postApiSynchronousWebhooksRouteHandler,
  postApiWebhooksRouteHandler,
  postApiWebhooksWebhookIdRotateSigningSecretRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiOrdersRoute, postApiOrdersRouteHandler)
  .openapi(getApiOrdersRoute, getApiOrdersRouteHandler)
  .openapi(getApiOrdersOrderIdRoute, getApiOrdersOrderIdRouteHandler)
  .openapi(patchApiOrdersOrderIdRoute, patchApiOrdersOrderIdRouteHandler)
  .openapi(
    postApiOrdersOrderIdIncrementAuthorisationRoute,
    postApiOrdersOrderIdIncrementAuthorisationRouteHandler,
  )
  .openapi(postApiOrdersOrderIdCaptureRoute, postApiOrdersOrderIdCaptureRouteHandler)
  .openapi(postApiOrdersOrderIdCancelRoute, postApiOrdersOrderIdCancelRouteHandler)
  .openapi(postApiOrdersOrderIdRefundRoute, postApiOrdersOrderIdRefundRouteHandler)
  .openapi(postApiOrdersOrderIdPaymentsRoute, postApiOrdersOrderIdPaymentsRouteHandler)
  .openapi(getApiOrdersOrderIdPaymentsRoute, getApiOrdersOrderIdPaymentsRouteHandler)
  .openapi(postApiCustomersRoute, postApiCustomersRouteHandler)
  .openapi(getApiCustomersRoute, getApiCustomersRouteHandler)
  .openapi(getApiCustomersCustomerIdRoute, getApiCustomersCustomerIdRouteHandler)
  .openapi(patchApiCustomersCustomerIdRoute, patchApiCustomersCustomerIdRouteHandler)
  .openapi(deleteApiCustomersCustomerIdRoute, deleteApiCustomersCustomerIdRouteHandler)
  .openapi(
    getApiCustomersCustomerIdPaymentMethodsRoute,
    getApiCustomersCustomerIdPaymentMethodsRouteHandler,
  )
  .openapi(
    getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
    getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(
    patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
    patchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(
    deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRoute,
    deleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdRouteHandler,
  )
  .openapi(getApiDisputesRoute, getApiDisputesRouteHandler)
  .openapi(getApiDisputesDisputeIdRoute, getApiDisputesDisputeIdRouteHandler)
  .openapi(postApiDisputesDisputeIdAcceptRoute, postApiDisputesDisputeIdAcceptRouteHandler)
  .openapi(postApiDisputesDisputeIdEvidencesRoute, postApiDisputesDisputeIdEvidencesRouteHandler)
  .openapi(postApiDisputesDisputeIdChallengeRoute, postApiDisputesDisputeIdChallengeRouteHandler)
  .openapi(getApiPaymentsPaymentIdRoute, getApiPaymentsPaymentIdRouteHandler)
  .openapi(postApiSubscriptionPlansRoute, postApiSubscriptionPlansRouteHandler)
  .openapi(getApiSubscriptionPlansRoute, getApiSubscriptionPlansRouteHandler)
  .openapi(
    getApiSubscriptionPlansSubscriptionPlanIdRoute,
    getApiSubscriptionPlansSubscriptionPlanIdRouteHandler,
  )
  .openapi(postApiSubscriptionsRoute, postApiSubscriptionsRouteHandler)
  .openapi(getApiSubscriptionsRoute, getApiSubscriptionsRouteHandler)
  .openapi(getApiSubscriptionsSubscriptionIdRoute, getApiSubscriptionsSubscriptionIdRouteHandler)
  .openapi(
    patchApiSubscriptionsSubscriptionIdRoute,
    patchApiSubscriptionsSubscriptionIdRouteHandler,
  )
  .openapi(
    postApiSubscriptionsSubscriptionIdCancelRoute,
    postApiSubscriptionsSubscriptionIdCancelRouteHandler,
  )
  .openapi(
    postApiSubscriptionsSubscriptionIdChangePlanRoute,
    postApiSubscriptionsSubscriptionIdChangePlanRouteHandler,
  )
  .openapi(
    postApiSubscriptionsSubscriptionIdChangeRenewalDateRoute,
    postApiSubscriptionsSubscriptionIdChangeRenewalDateRouteHandler,
  )
  .openapi(
    getApiSubscriptionsSubscriptionIdCyclesRoute,
    getApiSubscriptionsSubscriptionIdCyclesRouteHandler,
  )
  .openapi(
    getApiSubscriptionsSubscriptionIdCyclesCycleIdRoute,
    getApiSubscriptionsSubscriptionIdCyclesCycleIdRouteHandler,
  )
  .openapi(postApiSubscriptionUsagesRoute, postApiSubscriptionUsagesRouteHandler)
  .openapi(getApiSubscriptionUsagesRoute, getApiSubscriptionUsagesRouteHandler)
  .openapi(getApiSubscriptionUsagesUsageIdRoute, getApiSubscriptionUsagesUsageIdRouteHandler)
  .openapi(patchApiSubscriptionUsagesUsageIdRoute, patchApiSubscriptionUsagesUsageIdRouteHandler)
  .openapi(deleteApiSubscriptionUsagesUsageIdRoute, deleteApiSubscriptionUsagesUsageIdRouteHandler)
  .openapi(getApiPayoutsRoute, getApiPayoutsRouteHandler)
  .openapi(getApiPayoutsPayoutIdRoute, getApiPayoutsPayoutIdRouteHandler)
  .openapi(postApiReportRunsRoute, postApiReportRunsRouteHandler)
  .openapi(getApiReportRunsReportRunIdRoute, getApiReportRunsReportRunIdRouteHandler)
  .openapi(getApiReportRunsReportRunIdFileRoute, getApiReportRunsReportRunIdFileRouteHandler)
  .openapi(postApiWebhooksRoute, postApiWebhooksRouteHandler)
  .openapi(getApiWebhooksRoute, getApiWebhooksRouteHandler)
  .openapi(getApiWebhooksWebhookIdRoute, getApiWebhooksWebhookIdRouteHandler)
  .openapi(patchApiWebhooksWebhookIdRoute, patchApiWebhooksWebhookIdRouteHandler)
  .openapi(deleteApiWebhooksWebhookIdRoute, deleteApiWebhooksWebhookIdRouteHandler)
  .openapi(
    postApiWebhooksWebhookIdRotateSigningSecretRoute,
    postApiWebhooksWebhookIdRotateSigningSecretRouteHandler,
  )
  .openapi(postApiApplePayDomainsRegisterRoute, postApiApplePayDomainsRegisterRouteHandler)
  .openapi(postApiApplePayDomainsUnregisterRoute, postApiApplePayDomainsUnregisterRouteHandler)
  .openapi(postApiSynchronousWebhooksRoute, postApiSynchronousWebhooksRouteHandler)
  .openapi(getApiSynchronousWebhooksRoute, getApiSynchronousWebhooksRouteHandler)
  .openapi(
    deleteApiSynchronousWebhooksSynchronousWebhookIdRoute,
    deleteApiSynchronousWebhooksSynchronousWebhookIdRouteHandler,
  )
  .openapi(postApiLocationsRoute, postApiLocationsRouteHandler)
  .openapi(getApiLocationsRoute, getApiLocationsRouteHandler)
  .openapi(getApiLocationsLocationIdRoute, getApiLocationsLocationIdRouteHandler)
  .openapi(patchApiLocationsLocationIdRoute, patchApiLocationsLocationIdRouteHandler)
  .openapi(deleteApiLocationsLocationIdRoute, deleteApiLocationsLocationIdRouteHandler)
  .openapi(getApiTerminalsRoute, getApiTerminalsRouteHandler)
  .openapi(postApiOrdersOrderIdPaymentIntentsRoute, postApiOrdersOrderIdPaymentIntentsRouteHandler)
  .openapi(
    getApiPaymentIntentsPaymentIntentIdRoute,
    getApiPaymentIntentsPaymentIntentIdRouteHandler,
  )
  .openapi(
    postApiPaymentIntentsPaymentIntentIdCancelRoute,
    postApiPaymentIntentsPaymentIntentIdCancelRouteHandler,
  )

export default app
