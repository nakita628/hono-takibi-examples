import { OpenAPIHono } from '@hono/zod-openapi'
import { getVideosVideoIdAvailableAlbumsRoute } from '../routes'

const app = new OpenAPIHono()

export const albumsVideosHandler = app.openapi(getVideosVideoIdAvailableAlbumsRoute, (c) => {
  throw new Error('Not implemented')
})
