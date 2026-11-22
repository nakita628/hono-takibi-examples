import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesCountRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute,
  getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute,
  patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute,
  postPlacesPlaceIdGraphRoomListWorkspacesRoute,
  postPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placesWorkspaceHandler = app
  .openapi(getPlacesPlaceIdGraphRoomListWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphRoomListWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deletePlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCheckInClaimCalendarEventIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getPlacesPlaceIdGraphRoomListWorkspacesWorkspaceIdCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListWorkspacesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
