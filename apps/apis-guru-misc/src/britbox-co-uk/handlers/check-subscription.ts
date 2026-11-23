import { OpenAPIHono } from '@hono/zod-openapi'
import { getCheckSubscriptionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const checkSubscriptionHandler = app.openapi(getCheckSubscriptionIdRoute, (c) => {
  throw new Error('Not implemented')
})
