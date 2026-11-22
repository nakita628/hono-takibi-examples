import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePlacesPlaceIdRoute,
  getPlacesCountRoute,
  getPlacesGraphBuildingCountRoute,
  getPlacesGraphBuildingRoute,
  getPlacesGraphDeskCountRoute,
  getPlacesGraphDeskRoute,
  getPlacesGraphFloorCountRoute,
  getPlacesGraphFloorRoute,
  getPlacesGraphRoomCountRoute,
  getPlacesGraphRoomListCountRoute,
  getPlacesGraphRoomListRoute,
  getPlacesGraphRoomRoute,
  getPlacesGraphSectionCountRoute,
  getPlacesGraphSectionRoute,
  getPlacesGraphWorkspaceCountRoute,
  getPlacesGraphWorkspaceRoute,
  getPlacesPlaceIdGraphBuildingRoute,
  getPlacesPlaceIdGraphDeskRoute,
  getPlacesPlaceIdGraphFloorRoute,
  getPlacesPlaceIdGraphRoomListRoute,
  getPlacesPlaceIdGraphRoomRoute,
  getPlacesPlaceIdGraphSectionRoute,
  getPlacesPlaceIdGraphWorkspaceRoute,
  patchPlacesPlaceIdRoute,
  postPlacesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const placesPlaceHandler = app
  .openapi(postPlacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPlacesPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePlacesPlaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphBuildingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphDeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphFloorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphRoomListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesPlaceIdGraphWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphBuildingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphBuildingCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphDeskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphDeskCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphFloorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphFloorCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphRoomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphRoomCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphRoomListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphRoomListCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphSectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphSectionCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphWorkspaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlacesGraphWorkspaceCountRoute, (c) => {
    throw new Error('Not implemented')
  })
