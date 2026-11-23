import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRoute,
  postBillingSubscriptionItemsSubscriptionItemIdDiscountsRoute,
  postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRoute,
  postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(postBillingSubscriptionItemsSubscriptionItemIdExtendFreeTrialRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingSubscriptionItemsSubscriptionItemIdPriceTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBillingSubscriptionItemsSubscriptionItemIdDiscountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBillingSubscriptionItemsSubscriptionItemIdDiscountsDiscountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
