import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiGenerateRoute } from '../routes'

const app = new OpenAPIHono()

export const generateHandler = app.openapi(postApiGenerateRoute, (c) => {
  throw new Error('Not implemented')
})
