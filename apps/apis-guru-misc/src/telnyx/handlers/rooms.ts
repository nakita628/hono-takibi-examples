import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRoomsRoomIdRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSessionsRoute,
  getRoomsRoute,
  postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
  postRoomsRoomIdActionsRefreshClientTokenRoute,
  postRoomsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomsHandler = app
  .openapi(getRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsRoomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomsRoomIdActionsGenerateJoinClientTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomsRoomIdActionsRefreshClientTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomsRoomIdSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
