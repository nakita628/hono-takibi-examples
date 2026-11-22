import { OpenAPIHono } from '@hono/zod-openapi'
import { getArtistsAlbumArtistsRoute, getArtistsNameRoute, getArtistsRoute } from '../routes'

const app = new OpenAPIHono()

export const artistHandler = app
  .openapi(getArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getArtistsAlbumArtistsRoute, (c) => {
    throw new Error('Not implemented')
  })
