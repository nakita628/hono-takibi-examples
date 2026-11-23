import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postInAppSubscriptionsInAppSubscriptionAppIdImportReceiptRoute,
  postInAppSubscriptionsInAppSubscriptionAppIdImportSubscriptionRoute,
  postInAppSubscriptionsInAppSubscriptionAppIdProcessPurchaseCommandRoute,
  postInAppSubscriptionsInAppSubscriptionAppIdRetrieveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inAppSubscriptionsHandler = app
  .openapi(postInAppSubscriptionsInAppSubscriptionAppIdRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInAppSubscriptionsInAppSubscriptionAppIdImportReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInAppSubscriptionsInAppSubscriptionAppIdImportSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInAppSubscriptionsInAppSubscriptionAppIdProcessPurchaseCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
