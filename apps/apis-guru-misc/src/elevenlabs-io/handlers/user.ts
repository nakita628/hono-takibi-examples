import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1UserRoute, getV1UserSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
