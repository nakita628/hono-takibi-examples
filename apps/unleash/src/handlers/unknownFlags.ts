import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdminMetricsUnknownFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const unknownFlagsHandler = app.openapi(getApiAdminMetricsUnknownFlagsRoute, (c) => {
  throw new Error('Not implemented')
})
