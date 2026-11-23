import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app.openapi(getDevicesStatsRoute, (c) => {
  throw new Error('Not implemented')
})
