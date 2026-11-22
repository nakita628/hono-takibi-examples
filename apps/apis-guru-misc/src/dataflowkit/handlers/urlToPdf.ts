import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertUrlPdfRoute } from '../routes'

const app = new OpenAPIHono()

export const urlToPdfHandler = app.openapi(postConvertUrlPdfRoute, (c) => {
  throw new Error('Not implemented')
})
