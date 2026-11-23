import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateMedianRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateMedianHandler = app.openapi(postCalculateMedianRoute, (c) => {
  throw new Error('Not implemented')
})
