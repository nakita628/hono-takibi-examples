import { OpenAPIHono } from '@hono/zod-openapi'
import { getUploadsPresignRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app.openapi(getUploadsPresignRoute, (c) => {
  throw new Error('Not implemented')
})
