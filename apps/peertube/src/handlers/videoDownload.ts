import { OpenAPIHono } from '@hono/zod-openapi'
import { getDownloadVideosGenerateVideoIdOrUUIDRoute } from '../routes'

const app = new OpenAPIHono()

export const videoDownloadHandler = app.openapi(
  getDownloadVideosGenerateVideoIdOrUUIDRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
