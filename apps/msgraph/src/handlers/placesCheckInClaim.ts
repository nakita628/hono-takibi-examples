import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute,
  deletePlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdCheckInsCountRoute,
  getPlacesPlaceIdCheckInsRoute,
  getPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphBuildingCheckInsCountRoute,
  getPlacesPlaceIdGraphBuildingCheckInsRoute,
  getPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphDeskCheckInsCountRoute,
  getPlacesPlaceIdGraphDeskCheckInsRoute,
  getPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphFloorCheckInsCountRoute,
  getPlacesPlaceIdGraphFloorCheckInsRoute,
  getPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomCheckInsRoute,
  getPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphRoomListCheckInsCountRoute,
  getPlacesPlaceIdGraphRoomListCheckInsRoute,
  getPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphSectionCheckInsCountRoute,
  getPlacesPlaceIdGraphSectionCheckInsRoute,
  getPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute,
  getPlacesPlaceIdGraphWorkspaceCheckInsCountRoute,
  getPlacesPlaceIdGraphWorkspaceCheckInsRoute,
  patchPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute,
  patchPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute,
  postPlacesPlaceIdCheckInsRoute,
  postPlacesPlaceIdGraphBuildingCheckInsRoute,
  postPlacesPlaceIdGraphDeskCheckInsRoute,
  postPlacesPlaceIdGraphFloorCheckInsRoute,
  postPlacesPlaceIdGraphRoomCheckInsRoute,
  postPlacesPlaceIdGraphRoomListCheckInsRoute,
  postPlacesPlaceIdGraphSectionCheckInsRoute,
  postPlacesPlaceIdGraphWorkspaceCheckInsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placesCheckInClaimHandler = app
  .openapi(getPlacesPlaceIdCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphBuildingCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphBuildingCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphBuildingCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphBuildingCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphDeskCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphDeskCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphDeskCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphDeskCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphFloorCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphFloorCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphFloorCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphFloorCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphRoomCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphRoomCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphRoomListCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphRoomListCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphSectionCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphSectionCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphSectionCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphSectionCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphWorkspaceCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlacesPlaceIdGraphWorkspaceCheckInsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdGraphWorkspaceCheckInsCheckInClaimCalendarEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphWorkspaceCheckInsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
