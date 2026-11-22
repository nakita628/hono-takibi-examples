import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ArtistsImagesRoute, getV3ArtistsVideosRoute } from '../routes'

const app = new OpenAPIHono()

export const artistsHandler = app
  .openapi(getV3ArtistsImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3ArtistsVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
