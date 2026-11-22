import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingImagePngRoute } from '../routes'

const app = new OpenAPIHono()

export const imagePngHandler = app.openapi(postAnythingImagePngRoute, (c) => {
  throw new Error('Not implemented')
})
