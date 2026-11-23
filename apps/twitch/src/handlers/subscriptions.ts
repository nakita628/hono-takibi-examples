import { OpenAPIHono } from '@hono/zod-openapi'
import { getSubscriptionsRoute, getSubscriptionsUserRoute } from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(getSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubscriptionsUserRoute, (c) => {
    throw new Error('Not implemented')
  })
