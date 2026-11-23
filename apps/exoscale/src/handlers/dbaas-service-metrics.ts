import { OpenAPIHono } from '@hono/zod-openapi'
import { postDbaasServiceMetricsServiceNameRoute } from '../routes'

const app = new OpenAPIHono()

export const dbaasServiceMetricsHandler = app.openapi(
  postDbaasServiceMetricsServiceNameRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
