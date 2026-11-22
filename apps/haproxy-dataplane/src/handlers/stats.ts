import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesHaproxyStatsNativeRoute } from '../routes'

const app = new OpenAPIHono()

export const statsHandler = app.openapi(getServicesHaproxyStatsNativeRoute, (c) => {
  throw new Error('Not implemented')
})
