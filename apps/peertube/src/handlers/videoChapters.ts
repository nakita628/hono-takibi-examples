import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1VideosIdChaptersRoute, putApiV1VideosIdChaptersRoute } from '../routes'

const app = new OpenAPIHono()

export const videoChaptersHandler = app
  .openapi(getApiV1VideosIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
