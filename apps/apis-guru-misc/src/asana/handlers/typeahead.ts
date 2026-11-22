import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkspacesWorkspaceGidTypeaheadRoute } from '../routes'

const app = new OpenAPIHono()

export const typeaheadHandler = app.openapi(getWorkspacesWorkspaceGidTypeaheadRoute, (c) => {
  throw new Error('Not implemented')
})
