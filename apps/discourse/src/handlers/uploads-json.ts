import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadsJsonHandler = app.openapi(postUploadsJsonRoute, (c) => {
  throw new Error('Not implemented')
})
