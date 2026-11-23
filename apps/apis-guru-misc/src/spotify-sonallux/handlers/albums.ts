import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlbumsIdRoute, getAlbumsIdTracksRoute, getAlbumsRoute } from '../routes'

const app = new OpenAPIHono()

export const albumsHandler = app
  .openapi(getAlbumsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAlbumsIdTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
