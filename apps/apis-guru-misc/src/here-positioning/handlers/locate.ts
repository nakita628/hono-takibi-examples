import { OpenAPIHono } from '@hono/zod-openapi'
import { postLocateRoute } from '../routes'

const app = new OpenAPIHono()

export const locateHandler = app.openapi(postLocateRoute, (c) => {
  throw new Error('Not implemented')
})
