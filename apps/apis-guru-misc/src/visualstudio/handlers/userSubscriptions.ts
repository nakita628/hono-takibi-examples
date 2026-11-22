import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1UserSubscriptionsRoute, postApiV1UserSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const userSubscriptionsHandler = app
  .openapi(deleteApiV1UserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1UserSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
