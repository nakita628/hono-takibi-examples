import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoomParticipantsRoomParticipantIdRoute, getRoomParticipantsRoute } from '../routes'

const app = new OpenAPIHono()

export const roomParticipantsHandler = app
  .openapi(getRoomParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRoomParticipantsRoomParticipantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
