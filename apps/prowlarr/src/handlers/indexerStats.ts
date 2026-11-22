import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1IndexerstatsRoute } from '../routes'

const app = new OpenAPIHono()

export const indexerStatsHandler = app.openapi(getApiV1IndexerstatsRoute, (c) => {
  throw new Error('Not implemented')
})
