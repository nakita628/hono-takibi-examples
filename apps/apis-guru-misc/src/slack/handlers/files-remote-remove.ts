import { OpenAPIHono } from '@hono/zod-openapi'
import { postFilesRemoteRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRemoteRemoveHandler = app.openapi(postFilesRemoteRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
