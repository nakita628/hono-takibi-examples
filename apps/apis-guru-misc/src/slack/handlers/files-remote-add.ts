import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesRemoteAddRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRemoteAddHandler = app.openapi(postFilesRemoteAddRoute, (c) => {
  throw new Error('Not implemented')
})
