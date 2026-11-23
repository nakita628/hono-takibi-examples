import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionHandler = app.openapi(getSubscriptionRoute, (c) => {
  throw new Error('Not implemented')
})
