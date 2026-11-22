import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ProjectsMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app.openapi(getV1ProjectsMetricsRoute, (c) => {
  throw new Error('Not implemented')
})
