import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilesRemoteListRoute } from '../routes'

const app = new OpenAPIHono()

export const filesRemoteListHandler = app.openapi(getFilesRemoteListRoute, (c) => {
  throw new Error('Not implemented')
})
