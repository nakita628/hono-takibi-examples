import { OpenAPIHono } from '@hono/zod-openapi'
import { getReportsTasksStatesCountIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(getReportsTasksStatesCountIndexRoute, (c) => {
  throw new Error('Not implemented')
})
