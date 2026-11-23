import { OpenAPIHono } from '@hono/zod-openapi'
import { putUploadUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadUrlHandler = app.openapi(putUploadUrlRoute, (c) => {
  throw new Error('Not implemented')
})
