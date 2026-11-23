import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const generateHandler = app.openapi(postGenerateRoute, (c) => {
  throw new Error('Not implemented')
})
