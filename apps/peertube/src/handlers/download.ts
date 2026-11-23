import { OpenAPIHono } from '@hono/zod-openapi'
import { getDownloadVideosGenerateVideoIdOrUUIDRoute } from '../routes'

const app = new OpenAPIHono()

export const downloadHandler = app.openapi(getDownloadVideosGenerateVideoIdOrUUIDRoute, (c) => {
  throw new Error('Not implemented')
})
