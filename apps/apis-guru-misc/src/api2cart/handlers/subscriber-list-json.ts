import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriberListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriberListJsonHandler = app.openapi(getSubscriberListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
