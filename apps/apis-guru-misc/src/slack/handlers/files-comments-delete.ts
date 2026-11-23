import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesCommentsDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const filesCommentsDeleteHandler = app.openapi(postFilesCommentsDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
