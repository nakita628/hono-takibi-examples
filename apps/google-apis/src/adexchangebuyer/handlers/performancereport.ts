import { OpenAPIHono } from '@hono/zod-openapi'
import { getPerformancereportRoute } from '../routes'

const app = new OpenAPIHono()

export const performancereportHandler = app.openapi(getPerformancereportRoute, (c) => {
  throw new Error('Not implemented')
})
