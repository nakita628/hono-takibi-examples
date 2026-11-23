import { OpenAPIHono } from '@hono/zod-openapi'
import { postCropImageRoute } from '../routes'

const app = new OpenAPIHono()

export const cropImageHandler = app.openapi(postCropImageRoute, (c) => {
  throw new Error('Not implemented')
})
