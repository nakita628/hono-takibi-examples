import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionStartMessageMoveTaskRoute,
  postActionStartMessageMoveTaskRoute,
} from '../routes'

export const getActionStartMessageMoveTaskRouteHandler: RouteHandler<
  typeof getActionStartMessageMoveTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionStartMessageMoveTaskRouteHandler: RouteHandler<
  typeof postActionStartMessageMoveTaskRoute
> = async (c) => {
  throw new Error('Not implemented')
}
