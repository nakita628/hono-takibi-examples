import { OpenAPIHono } from '@hono/zod-openapi'
import { postRotateImageRoute } from '../routes'

const app = new OpenAPIHono()

export const rotateImageHandler = app.openapi(postRotateImageRoute, (c) => {
  throw new Error('Not implemented')
})
