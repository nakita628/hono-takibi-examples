import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecurityProfilesSummaryInstanceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const securityProfilesSummaryHandler = app.openapi(
  getSecurityProfilesSummaryInstanceIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
