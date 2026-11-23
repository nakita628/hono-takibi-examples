import { OpenAPIHono } from '@hono/zod-openapi'
import { getLifecycleStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const lifecycleHandler = app.openapi(getLifecycleStatsRoute, (c) => {
  throw new Error('Not implemented')
})
