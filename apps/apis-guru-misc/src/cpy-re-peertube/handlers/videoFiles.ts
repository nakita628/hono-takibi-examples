import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1VideosIdHlsRoute, deleteApiV1VideosIdWebtorrentRoute } from '../routes'

const app = new OpenAPIHono()

export const videoFilesHandler = app
  .openapi(deleteApiV1VideosIdHlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdWebtorrentRoute, (c) => {
    throw new Error('Not implemented')
  })
