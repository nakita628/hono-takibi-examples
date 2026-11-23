import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadsConvertConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadsConvertConvertHandler = app.openapi(postUploadsConvertConvertRoute, (c) => {
  throw new Error('Not implemented')
})
