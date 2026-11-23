import { OpenAPIHono } from '@hono/zod-openapi'
import { postStagingTablesRoute } from '../routes'

const app = new OpenAPIHono()

export const stagingTablesHandler = app.openapi(postStagingTablesRoute, (c) => {
  throw new Error('Not implemented')
})
