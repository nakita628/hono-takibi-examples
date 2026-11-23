import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertUrlPdfRoute, postConvertUrlScreenshotRoute } from '../routes'

const app = new OpenAPIHono()

export const convertHandler = app
  .openapi(postConvertUrlPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertUrlScreenshotRoute, (c) => {
    throw new Error('Not implemented')
  })
