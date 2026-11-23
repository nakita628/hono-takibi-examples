import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListMessageMoveTasksRoute,
  postActionListMessageMoveTasksRoute,
} from '../routes'

export const getActionListMessageMoveTasksRouteHandler: RouteHandler<
  typeof getActionListMessageMoveTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListMessageMoveTasksRouteHandler: RouteHandler<
  typeof postActionListMessageMoveTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
