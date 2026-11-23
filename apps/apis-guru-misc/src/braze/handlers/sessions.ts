import { OpenAPIHono } from '@hono/zod-openapi'
import { getSessionsDataSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app.openapi(getSessionsDataSeriesRoute, (c) => {
  throw new Error('Not implemented')
})
