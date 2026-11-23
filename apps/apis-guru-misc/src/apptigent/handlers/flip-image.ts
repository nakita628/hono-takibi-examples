import { OpenAPIHono } from '@hono/zod-openapi'
import { postFlipImageRoute } from '../routes'

const app = new OpenAPIHono()

export const flipImageHandler = app.openapi(postFlipImageRoute, (c) => {
  throw new Error('Not implemented')
})
