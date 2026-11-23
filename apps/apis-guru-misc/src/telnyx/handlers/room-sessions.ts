import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRoomSessionsRoomSessionIdParticipantsRoute,
  getRoomSessionsRoomSessionIdRoute,
  getRoomSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roomSessionsHandler = app
  .openapi(getRoomSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomSessionsRoomSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomSessionsRoomSessionIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
