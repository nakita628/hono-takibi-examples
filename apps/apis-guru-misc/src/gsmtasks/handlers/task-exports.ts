import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaskExportsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const taskExportsHandler = app.openapi(getTaskExportsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
