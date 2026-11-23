import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateTangentRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateTangentHandler = app.openapi(postCalculateTangentRoute, (c) => {
  throw new Error('Not implemented')
})
