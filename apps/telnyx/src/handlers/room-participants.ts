import type { RouteHandler } from '@hono/zod-openapi'
import type { getRoomParticipantsRoomParticipantIdRoute, getRoomParticipantsRoute } from '../routes'

export const getRoomParticipantsRouteHandler: RouteHandler<
  typeof getRoomParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomParticipantsRoomParticipantIdRouteHandler: RouteHandler<
  typeof getRoomParticipantsRoomParticipantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
