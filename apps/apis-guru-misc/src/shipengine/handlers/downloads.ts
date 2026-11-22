import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1DownloadsDirSubdirFilenameRoute } from '../routes'

const app = new OpenAPIHono()

export const downloadsHandler = app.openapi(getV1DownloadsDirSubdirFilenameRoute, (c) => {
  throw new Error('Not implemented')
})
