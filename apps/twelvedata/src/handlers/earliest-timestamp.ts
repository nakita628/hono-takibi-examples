import { OpenAPIHono } from '@hono/zod-openapi'
import { getEarliestTimestampRoute } from '../routes'

const app = new OpenAPIHono()

export const earliestTimestampHandler = app.openapi(getEarliestTimestampRoute, (c) => {
  throw new Error('Not implemented')
})
