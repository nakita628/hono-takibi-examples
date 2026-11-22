import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getYoutubeV3SearchRoute, (c) => {
  throw new Error('Not implemented')
})
