import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateSubtractionRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateSubtractionHandler = app.openapi(postCalculateSubtractionRoute, (c) => {
  throw new Error('Not implemented')
})
