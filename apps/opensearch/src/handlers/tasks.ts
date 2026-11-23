import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTasksRoute,
  getTasksTaskIdRoute,
  postTasksCancelRoute,
  postTasksTaskIdCancelRoute,
} from '../routes'

export const getTasksRouteHandler: RouteHandler<typeof getTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksCancelRouteHandler: RouteHandler<typeof postTasksCancelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTaskIdRouteHandler: RouteHandler<typeof getTasksTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksTaskIdCancelRouteHandler: RouteHandler<
  typeof postTasksTaskIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
