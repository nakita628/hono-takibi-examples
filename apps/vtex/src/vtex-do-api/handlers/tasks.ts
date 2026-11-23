import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTasksRoute,
  getTasksTaskIdRoute,
  postTasksRoute,
  postTasksTaskIdCommentsRoute,
  putTasksTaskIdRoute,
} from '../routes'

export const getTasksRouteHandler: RouteHandler<typeof getTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksRouteHandler: RouteHandler<typeof postTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTaskIdRouteHandler: RouteHandler<typeof getTasksTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTasksTaskIdRouteHandler: RouteHandler<typeof putTasksTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksTaskIdCommentsRouteHandler: RouteHandler<
  typeof postTasksTaskIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
