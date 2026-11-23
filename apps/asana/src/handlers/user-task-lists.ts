import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserTaskListsUserTaskListGidRoute,
  getUserTaskListsUserTaskListGidTasksRoute,
} from '../routes'

export const getUserTaskListsUserTaskListGidTasksRouteHandler: RouteHandler<
  typeof getUserTaskListsUserTaskListGidTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserTaskListsUserTaskListGidRouteHandler: RouteHandler<
  typeof getUserTaskListsUserTaskListGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
