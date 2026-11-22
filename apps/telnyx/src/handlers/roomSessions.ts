import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoomSessionsRoomSessionIdParticipantsRoute,
  getRoomSessionsRoomSessionIdRoute,
  getRoomSessionsRoute,
  postRoomSessionsRoomSessionIdActionsEndRoute,
  postRoomSessionsRoomSessionIdActionsKickRoute,
  postRoomSessionsRoomSessionIdActionsMuteRoute,
  postRoomSessionsRoomSessionIdActionsUnmuteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomSessionsHandler = app
  .openapi(getRoomSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomSessionsRoomSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomSessionsRoomSessionIdActionsEndRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomSessionsRoomSessionIdActionsKickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomSessionsRoomSessionIdActionsMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoomSessionsRoomSessionIdActionsUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomSessionsRoomSessionIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
