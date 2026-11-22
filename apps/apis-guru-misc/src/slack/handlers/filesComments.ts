import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesCommentsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const filesCommentsHandler = app.openapi(postFilesCommentsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
