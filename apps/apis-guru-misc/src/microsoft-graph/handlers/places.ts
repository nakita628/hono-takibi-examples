import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlacesCountRoute, getPlacesMicrosoftGraphRoomCountRoute } from '../routes'

const app = new OpenAPIHono()

export const placesHandler = app
  .openapi(getPlacesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesMicrosoftGraphRoomCountRoute, (c) => {
    throw new Error('Not implemented')
  })
