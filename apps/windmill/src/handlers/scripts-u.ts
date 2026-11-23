import { OpenAPIHono } from '@hono/zod-openapi'
import { getScriptsUTokenedRawWorkspaceTokenPathRoute } from '../routes'

const app = new OpenAPIHono()

export const scriptsUHandler = app.openapi(getScriptsUTokenedRawWorkspaceTokenPathRoute, (c) => {
  throw new Error('Not implemented')
})
