import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postEstimatesCreateInvoiceForItemsRoute,
  postEstimatesCreateSubscriptionForItemsRoute,
  postEstimatesGiftSubscriptionForItemsRoute,
  postEstimatesPaymentSchedulesRoute,
  postEstimatesUpdateSubscriptionForItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const estimatesHandler = app
  .openapi(postEstimatesCreateSubscriptionForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEstimatesPaymentSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEstimatesCreateInvoiceForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEstimatesGiftSubscriptionForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEstimatesUpdateSubscriptionForItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
