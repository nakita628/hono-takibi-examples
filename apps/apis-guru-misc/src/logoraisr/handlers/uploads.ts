import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app.openapi(postUploadsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
