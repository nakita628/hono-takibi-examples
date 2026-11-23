import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetTableObjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const getTableObjectsHandler = app.openapi(postGetTableObjectsRoute, (c) => {
  throw new Error('Not implemented')
})
