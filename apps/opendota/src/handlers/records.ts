import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordsFieldRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app.openapi(getRecordsFieldRoute, (c) => {
  throw new Error('Not implemented')
})
