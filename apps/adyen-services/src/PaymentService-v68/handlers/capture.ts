import { OpenAPIHono } from '@hono/zod-openapi'
import { postCaptureRoute } from '../routes'

const app = new OpenAPIHono()

export const captureHandler = app.openapi(postCaptureRoute, (c) => {
  throw new Error('Not implemented')
})
