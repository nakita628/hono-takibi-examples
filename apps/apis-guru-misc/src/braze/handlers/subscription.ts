import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriptionStatusGetRoute, getSubscriptionUserStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionHandler = app
  .openapi(getSubscriptionStatusGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionUserStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
