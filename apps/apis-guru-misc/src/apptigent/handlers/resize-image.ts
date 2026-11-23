import { OpenAPIHono } from '@hono/zod-openapi'
import { postResizeImageRoute } from '../routes'

const app = new OpenAPIHono()

export const resizeImageHandler = app.openapi(postResizeImageRoute, (c) => {
  throw new Error('Not implemented')
})
