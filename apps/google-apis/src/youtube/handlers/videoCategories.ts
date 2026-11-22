import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3VideoCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const videoCategoriesHandler = app.openapi(getYoutubeV3VideoCategoriesRoute, (c) => {
  throw new Error('Not implemented')
})
