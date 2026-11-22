import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1IndexerstatusRoute } from '../routes'

const app = new OpenAPIHono()

export const indexerStatusHandler = app.openapi(getApiV1IndexerstatusRoute, (c) => {
  throw new Error('Not implemented')
})
