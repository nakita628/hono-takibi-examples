import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoomsRoomIdRoute,
  getRoomsRoomIdRoute,
  getRoomsRoomIdSessionsRoute,
  getRoomsRoute,
  postRoomsRoomIdActionsGenerateJoinClientTokenRoute,
  postRoomsRoomIdActionsRefreshClientTokenRoute,
  postRoomsRoute,
} from '../routes'

export const getRoomsRouteHandler: RouteHandler<typeof getRoomsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomsRouteHandler: RouteHandler<typeof postRoomsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRoomsRoomIdRouteHandler: RouteHandler<typeof deleteRoomsRoomIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getRoomsRoomIdRouteHandler: RouteHandler<typeof getRoomsRoomIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomsRoomIdActionsGenerateJoinClientTokenRouteHandler: RouteHandler<
  typeof postRoomsRoomIdActionsGenerateJoinClientTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomsRoomIdActionsRefreshClientTokenRouteHandler: RouteHandler<
  typeof postRoomsRoomIdActionsRefreshClientTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomsRoomIdSessionsRouteHandler: RouteHandler<
  typeof getRoomsRoomIdSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
