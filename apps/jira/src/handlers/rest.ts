import { OpenAPIHono } from '@hono/zod-openapi'
import { postRestInternalApiLatestWorklogBulkRoute } from '../routes'

const app = new OpenAPIHono()

export const restHandler = app.openapi(postRestInternalApiLatestWorklogBulkRoute, (c) => {
  throw new Error('Not implemented')
})
