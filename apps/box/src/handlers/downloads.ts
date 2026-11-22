import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilesFileIdContentRoute } from '../routes'

const app = new OpenAPIHono()

export const downloadsHandler = app.openapi(getFilesFileIdContentRoute, (c) => {
  throw new Error('Not implemented')
})
