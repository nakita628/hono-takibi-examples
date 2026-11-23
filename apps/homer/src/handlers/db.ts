import { OpenAPIHono } from '@hono/zod-openapi'
import { getDbNodesRoute } from '../routes'

const app = new OpenAPIHono()

export const dbHandler = app.openapi(getDbNodesRoute, (c) => {
  throw new Error('Not implemented')
})
