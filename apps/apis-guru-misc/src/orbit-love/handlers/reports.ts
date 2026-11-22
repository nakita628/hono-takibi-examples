import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspaceSlugReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(getWorkspaceSlugReportsRoute, (c) => {
  throw new Error('Not implemented')
})
