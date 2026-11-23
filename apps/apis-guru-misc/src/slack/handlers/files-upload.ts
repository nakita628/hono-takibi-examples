import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const filesUploadHandler = app.openapi(postFilesUploadRoute, (c) => {
  throw new Error('Not implemented')
})
