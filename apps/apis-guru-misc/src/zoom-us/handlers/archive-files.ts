import { OpenAPIHono } from '@hono/zod-openapi'
import { getArchiveFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const archiveFilesHandler = app.openapi(getArchiveFilesRoute, (c) => {
  throw new Error('Not implemented')
})
