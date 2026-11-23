import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcrRoute } from '../routes'

const app = new OpenAPIHono()

export const ocrHandler = app.openapi(postOcrRoute, (c) => {
  throw new Error('Not implemented')
})
