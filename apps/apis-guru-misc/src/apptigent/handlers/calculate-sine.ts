import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateSineRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateSineHandler = app.openapi(postCalculateSineRoute, (c) => {
  throw new Error('Not implemented')
})
