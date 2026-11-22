import { OpenAPIHono } from '@hono/zod-openapi'
import { getWWorkspaceRawAppsListRoute } from '../routes'

const app = new OpenAPIHono()

export const rawAppHandler = app.openapi(getWWorkspaceRawAppsListRoute, (c) => {
  throw new Error('Not implemented')
})
