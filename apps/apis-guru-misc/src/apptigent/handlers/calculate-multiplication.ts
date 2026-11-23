import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateMultiplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateMultiplicationHandler = app.openapi(postCalculateMultiplicationRoute, (c) => {
  throw new Error('Not implemented')
})
