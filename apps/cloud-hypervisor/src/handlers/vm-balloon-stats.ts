import { OpenAPIHono } from '@hono/zod-openapi'
import { getVmBalloonStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const vmBalloonStatsHandler = app.openapi(getVmBalloonStatsRoute, (c) => {
  throw new Error('Not implemented')
})
