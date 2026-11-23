import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScheduledTasksRunningTaskIdRoute,
  getScheduledTasksRoute,
  getScheduledTasksTaskIdRoute,
  postScheduledTasksRunningTaskIdRoute,
  postScheduledTasksTaskIdTriggersRoute,
} from '../routes'

export const getScheduledTasksRouteHandler: RouteHandler<typeof getScheduledTasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getScheduledTasksTaskIdRouteHandler: RouteHandler<
  typeof getScheduledTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScheduledTasksTaskIdTriggersRouteHandler: RouteHandler<
  typeof postScheduledTasksTaskIdTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postScheduledTasksRunningTaskIdRouteHandler: RouteHandler<
  typeof postScheduledTasksRunningTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteScheduledTasksRunningTaskIdRouteHandler: RouteHandler<
  typeof deleteScheduledTasksRunningTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
