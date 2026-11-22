import { OpenAPIHono } from '@hono/zod-openapi'
import { postApi10CalculateRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateHandler = app.openapi(postApi10CalculateRoute, (c) => {
  throw new Error('Not implemented')
})
