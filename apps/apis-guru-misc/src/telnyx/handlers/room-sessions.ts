import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRoomSessionsRoomSessionIdParticipantsRoute,
  getRoomSessionsRoomSessionIdRoute,
  getRoomSessionsRoute,
} from '../routes'

export const getRoomSessionsRouteHandler: RouteHandler<typeof getRoomSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomSessionsRoomSessionIdRouteHandler: RouteHandler<
  typeof getRoomSessionsRoomSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomSessionsRoomSessionIdParticipantsRouteHandler: RouteHandler<
  typeof getRoomSessionsRoomSessionIdParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
