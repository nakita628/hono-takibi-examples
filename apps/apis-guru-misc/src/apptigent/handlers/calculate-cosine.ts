import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateCosineRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateCosineHandler = app.openapi(postCalculateCosineRoute, (c) => {
  throw new Error('Not implemented')
})
