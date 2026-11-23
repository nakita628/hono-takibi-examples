import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoutingProfilesSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const routingProfilesSummaryHandler = app.openapi(
  getRoutingProfilesSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
