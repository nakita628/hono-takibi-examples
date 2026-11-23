import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateVarianceRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateVarianceHandler = app.openapi(postCalculateVarianceRoute, (c) => {
  throw new Error('Not implemented')
})
