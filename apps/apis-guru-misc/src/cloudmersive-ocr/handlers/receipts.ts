import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcrReceiptsPhotoToCsvRoute } from '../routes'

const app = new OpenAPIHono()

export const receiptsHandler = app.openapi(postOcrReceiptsPhotoToCsvRoute, (c) => {
  throw new Error('Not implemented')
})
