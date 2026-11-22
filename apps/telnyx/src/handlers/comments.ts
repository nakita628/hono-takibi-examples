import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirDirIdCommentsRoute, postDirDirIdCommentsRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app
  .openapi(getDirDirIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirDirIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
