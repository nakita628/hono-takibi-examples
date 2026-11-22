import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUserIDBillingContractSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const billingContractSubscriptionHandler = app.openapi(
  getUserUserIDBillingContractSubscriptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
