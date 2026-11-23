import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarlyDayMotionsListRoute } from '../routes'

const app = new OpenAPIHono()

export const earlyDayMotionsHandler = app.openapi(getEarlyDayMotionsListRoute, (c) => {
  throw new Error('Not implemented')
})
