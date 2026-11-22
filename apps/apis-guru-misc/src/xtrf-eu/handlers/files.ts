import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app.openapi(postFilesRoute, (c) => {
  throw new Error('Not implemented')
})
