import { OpenAPIHono } from '@hono/zod-openapi'
import { getExplorerRoute } from '../routes'

const app = new OpenAPIHono()

export const explorerHandler = app.openapi(getExplorerRoute, (c) => {
  throw new Error('Not implemented')
})
