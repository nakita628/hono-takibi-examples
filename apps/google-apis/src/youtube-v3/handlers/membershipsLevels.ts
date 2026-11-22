import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3MembershipsLevelsRoute } from '../routes'

const app = new OpenAPIHono()

export const membershipsLevelsHandler = app.openapi(getYoutubeV3MembershipsLevelsRoute, (c) => {
  throw new Error('Not implemented')
})
