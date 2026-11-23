import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesRemoteUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRemoteUpdateHandler = app.openapi(postFilesRemoteUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
