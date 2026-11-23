import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateStreamRoute } from '../routes'

const app = new OpenAPIHono()

export const generateStreamHandler = app.openapi(postGenerateStreamRoute, (c) => {
  throw new Error('Not implemented')
})
