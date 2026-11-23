import { OpenAPIHono } from '@hono/zod-openapi'
import { postUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadHandler = app.openapi(postUploadRoute, (c) => {
  throw new Error('Not implemented')
})
