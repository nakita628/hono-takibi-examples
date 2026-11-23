import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateThumbnailRoute } from '../routes'

const app = new OpenAPIHono()

export const generateThumbnailHandler = app.openapi(postGenerateThumbnailRoute, (c) => {
  throw new Error('Not implemented')
})
