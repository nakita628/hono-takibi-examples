import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKGuestGuestSpaceIdV1SpaceJsonRoute,
  deleteKV1SpaceJsonRoute,
  getKGuestGuestSpaceIdV1SpaceJsonRoute,
  getKGuestGuestSpaceIdV1SpaceMembersJsonRoute,
  getKGuestGuestSpaceIdV1SpacesStatisticsJsonRoute,
  getKV1SpaceJsonRoute,
  getKV1SpaceMembersJsonRoute,
  getKV1SpacesStatisticsJsonRoute,
  postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRoute,
  postKGuestGuestSpaceIdV1SpaceThreadJsonRoute,
  postKV1SpaceThreadCommentJsonRoute,
  postKV1SpaceThreadJsonRoute,
  putKGuestGuestSpaceIdV1SpaceBodyJsonRoute,
  putKGuestGuestSpaceIdV1SpaceGuestsJsonRoute,
  putKGuestGuestSpaceIdV1SpaceJsonRoute,
  putKGuestGuestSpaceIdV1SpaceMembersJsonRoute,
  putKGuestGuestSpaceIdV1SpaceThreadJsonRoute,
  putKV1SpaceBodyJsonRoute,
  putKV1SpaceJsonRoute,
  putKV1SpaceMembersJsonRoute,
  putKV1SpaceThreadJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spacesHandler = app
  .openapi(deleteKGuestGuestSpaceIdV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceBodyJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceGuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1SpacesStatisticsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceBodyJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1SpaceThreadCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1SpacesStatisticsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
