import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app.openapi(getRecordsRoute, (c) => {
  throw new Error('Not implemented')
})
