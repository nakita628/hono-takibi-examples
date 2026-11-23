import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTasksTaskIdRoute,
  getTasksTaskIdAssignmentsRoute,
  getTasksTaskIdRoute,
  postTasksRoute,
  putTasksTaskIdRoute,
} from '../routes'

export const postTasksRouteHandler: RouteHandler<typeof postTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTasksTaskIdRouteHandler: RouteHandler<typeof deleteTasksTaskIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTasksTaskIdRouteHandler: RouteHandler<typeof getTasksTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTasksTaskIdRouteHandler: RouteHandler<typeof putTasksTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTaskIdAssignmentsRouteHandler: RouteHandler<
  typeof getTasksTaskIdAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
