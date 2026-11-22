import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2DagStatsRoute } from '../routes'

const app = new OpenAPIHono()

export const dagStatsHandler = app.openapi(getApiV2DagStatsRoute, (c) => {
  throw new Error('Not implemented')
})
