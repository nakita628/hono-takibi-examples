import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1FilesystemRoute } from '../routes'

const app = new OpenAPIHono()

export const fileSystemHandler = app.openapi(postApiV1FilesystemRoute, (c) => {
  throw new Error('Not implemented')
})
