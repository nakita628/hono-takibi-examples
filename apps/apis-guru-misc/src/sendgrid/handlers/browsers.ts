import { OpenAPIHono } from '@hono/zod-openapi'
import { getBrowsersStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const browsersHandler = app.openapi(getBrowsersStatsRoute, (c) => {
  throw new Error('Not implemented')
})
