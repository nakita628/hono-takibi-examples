import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoomCompositionsRoomCompositionIdRoute,
  getRoomCompositionsRoomCompositionIdRoute,
  getRoomCompositionsRoute,
  postRoomCompositionsRoute,
} from '../routes'

export const getRoomCompositionsRouteHandler: RouteHandler<
  typeof getRoomCompositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRoomCompositionsRouteHandler: RouteHandler<
  typeof postRoomCompositionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRoomCompositionsRoomCompositionIdRouteHandler: RouteHandler<
  typeof deleteRoomCompositionsRoomCompositionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoomCompositionsRoomCompositionIdRouteHandler: RouteHandler<
  typeof getRoomCompositionsRoomCompositionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
