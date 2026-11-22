import { OpenAPIHono } from '@hono/zod-openapi'
import { postYoutubeV3ThumbnailsSetRoute } from '../routes'

const app = new OpenAPIHono()

export const thumbnailsHandler = app.openapi(postYoutubeV3ThumbnailsSetRoute, (c) => {
  throw new Error('Not implemented')
})
