import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertUrlScreenshotRoute } from '../routes'

const app = new OpenAPIHono()

export const urlToScreenshotHandler = app.openapi(postConvertUrlScreenshotRoute, (c) => {
  throw new Error('Not implemented')
})
