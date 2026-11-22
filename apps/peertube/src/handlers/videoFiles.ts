import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1VideosIdHlsRoute, deleteApiV1VideosIdWebVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const videoFilesHandler = app
  .openapi(deleteApiV1VideosIdHlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdWebVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
