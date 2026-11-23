import { OpenAPIHono } from '@hono/zod-openapi'
import { getStatsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const statsJsonHandler = app.openapi(getStatsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
