import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InvoicesIdCaptureRoute } from '../routes'

const app = new OpenAPIHono()

export const invoicesIdCaptureHandler = app.openapi(postV1InvoicesIdCaptureRoute, (c) => {
  throw new Error('Not implemented')
})
