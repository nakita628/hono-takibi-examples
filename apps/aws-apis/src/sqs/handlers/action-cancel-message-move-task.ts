import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCancelMessageMoveTaskRoute,
  postActionCancelMessageMoveTaskRoute,
} from '../routes'

export const getActionCancelMessageMoveTaskRouteHandler: RouteHandler<
  typeof getActionCancelMessageMoveTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCancelMessageMoveTaskRouteHandler: RouteHandler<
  typeof postActionCancelMessageMoveTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
