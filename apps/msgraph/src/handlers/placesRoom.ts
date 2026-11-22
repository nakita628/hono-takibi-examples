import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListRoomsRoomIdRoute,
  getPlacesPlaceIdGraphRoomListRoomsCountRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoomIdRoute,
  getPlacesPlaceIdGraphRoomListRoomsRoute,
  patchPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListRoomsRoomIdRoute,
  postPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute,
  postPlacesPlaceIdGraphRoomListRoomsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placesRoomHandler = app
  .openapi(getPlacesPlaceIdGraphRoomListRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphRoomListRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphRoomListRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphRoomListRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCheckInClaimCalendarEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPlacesPlaceIdGraphRoomListRoomsRoomIdCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListRoomsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
