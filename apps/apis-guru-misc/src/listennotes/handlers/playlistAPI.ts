import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlaylistsIdRoute, getPlaylistsRoute } from '../routes'

const app = new OpenAPIHono()

export const playlistAPIHandler = app
  .openapi(getPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaylistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
