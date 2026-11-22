import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlacesMicrosoftGraphRoomRoute,
  getPlacesPlaceIdMicrosoftGraphRoomRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placeRoomHandler = app
  .openapi(getPlacesMicrosoftGraphRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdMicrosoftGraphRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
