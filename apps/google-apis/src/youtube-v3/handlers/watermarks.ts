import { OpenAPIHono } from '@hono/zod-openapi'
import { postYoutubeV3WatermarksSetRoute, postYoutubeV3WatermarksUnsetRoute } from '../routes'

const app = new OpenAPIHono()

export const watermarksHandler = app
  .openapi(postYoutubeV3WatermarksSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3WatermarksUnsetRoute, (c) => {
    throw new Error('Not implemented')
  })
