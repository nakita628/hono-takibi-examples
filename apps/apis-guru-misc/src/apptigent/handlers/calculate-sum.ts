import { OpenAPIHono } from '@hono/zod-openapi'
import { postCalculateSumRoute } from '../routes'

const app = new OpenAPIHono()

export const calculateSumHandler = app.openapi(postCalculateSumRoute, (c) => {
  throw new Error('Not implemented')
})
