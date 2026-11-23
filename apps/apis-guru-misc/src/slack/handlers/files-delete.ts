import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const filesDeleteHandler = app.openapi(postFilesDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
