import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateAbsoluteRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateAbsoluteHandler = app.openapi(postCalculateAbsoluteRoute, (c) => {
  throw new Error('Not implemented')
})
