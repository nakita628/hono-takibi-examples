import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1VideosIdStudioEditRoute, postApiV1VideosIdTranscodingRoute } from '../routes'

const app = new OpenAPIHono()

export const videoTranscodingHandler = app
  .openapi(postApiV1VideosIdStudioEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideosIdTranscodingRoute, (c) => {
    throw new Error('Not implemented')
  })
