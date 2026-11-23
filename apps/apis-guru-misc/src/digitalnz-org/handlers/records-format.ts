import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordsFormatRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsFormatHandler = app.openapi(getRecordsFormatRoute, (c) => {
  throw new Error('Not implemented')
})
