import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriptionTypesIdRoute, getSubscriptionTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionTypesHandler = app
  .openapi(getSubscriptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
