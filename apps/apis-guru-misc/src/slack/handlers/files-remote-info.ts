import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilesRemoteInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRemoteInfoHandler = app.openapi(getFilesRemoteInfoRoute, (c) => {
  throw new Error('Not implemented')
})
