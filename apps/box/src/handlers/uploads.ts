import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesContentRoute, postFilesFileIdContentRoute } from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(postFilesFileIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesContentRoute, (c) => {
    throw new Error('Not implemented')
  })
