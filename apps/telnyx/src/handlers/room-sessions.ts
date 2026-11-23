import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRoomSessionsRoomSessionIdParticipantsRoute,
  getRoomSessionsRoomSessionIdRoute,
  getRoomSessionsRoute,
  postRoomSessionsRoomSessionIdActionsEndRoute,
  postRoomSessionsRoomSessionIdActionsKickRoute,
  postRoomSessionsRoomSessionIdActionsMuteRoute,
  postRoomSessionsRoomSessionIdActionsUnmuteRoute,
} from '../routes'

export const getRoomSessionsRouteHandler: RouteHandler<typeof getRoomSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomSessionsRoomSessionIdRouteHandler: RouteHandler<
  typeof getRoomSessionsRoomSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomSessionsRoomSessionIdActionsEndRouteHandler: RouteHandler<
  typeof postRoomSessionsRoomSessionIdActionsEndRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomSessionsRoomSessionIdActionsKickRouteHandler: RouteHandler<
  typeof postRoomSessionsRoomSessionIdActionsKickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomSessionsRoomSessionIdActionsMuteRouteHandler: RouteHandler<
  typeof postRoomSessionsRoomSessionIdActionsMuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomSessionsRoomSessionIdActionsUnmuteRouteHandler: RouteHandler<
  typeof postRoomSessionsRoomSessionIdActionsUnmuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomSessionsRoomSessionIdParticipantsRouteHandler: RouteHandler<
  typeof getRoomSessionsRoomSessionIdParticipantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
