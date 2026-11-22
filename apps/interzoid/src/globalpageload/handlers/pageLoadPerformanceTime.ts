import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalpageloadRoute } from '../routes'

const app = new OpenAPIHono()

export const pageLoadPerformanceTimeHandler = app.openapi(getGlobalpageloadRoute, (c) => {
  throw new Error('Not implemented')
})
