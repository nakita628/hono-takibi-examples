import { OpenAPIHono } from '@hono/zod-openapi'
import { getFileDownloadFileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const fileHandler = app.openapi(getFileDownloadFileIdRoute, (c) => {
  throw new Error('Not implemented')
})
