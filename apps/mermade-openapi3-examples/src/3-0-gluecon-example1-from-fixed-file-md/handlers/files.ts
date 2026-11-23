import { OpenAPIHono } from '@hono/zod-openapi'
import { putFilesFilenameRoute } from '../routes'

const app = new OpenAPIHono()

export const filesHandler = app.openapi(putFilesFilenameRoute, (c) => {
  throw new Error('Not implemented')
})
