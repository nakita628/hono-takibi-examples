import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1BillingBackfillUsageRoute,
  postV1BillingCancelSubscriptionRoute,
  postV1BillingCustomerPortalRoute,
  postV1BillingDisableDelinquentWorkspacesRoute,
  postV1BillingHandleWebhookRoute,
  postV1BillingListInvoicesRoute,
  postV1BillingPaymentInformationRoute,
  postV1BillingSubscriptionInfoRoute,
  postV1BillingTrialStatusRoute,
  postV1BillingUnscheduleCancelSubscriptionRoute,
  postV1BillingUnschedulePlanChangeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(postV1BillingCustomerPortalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingBackfillUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingHandleWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingListInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingSubscriptionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingTrialStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingCancelSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingUnscheduleCancelSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingUnschedulePlanChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingDisableDelinquentWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
