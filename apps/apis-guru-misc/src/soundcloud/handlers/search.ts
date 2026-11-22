import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlaylistsRoute, getTracksRoute, getUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
