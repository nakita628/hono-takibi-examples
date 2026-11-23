import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTasksRoute,
  getTasksRoute,
  getTasksTaskUidRoute,
  postTasksCancelRoute,
} from '../routes'

export const getTasksRouteHandler: RouteHandler<typeof getTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTasksRouteHandler: RouteHandler<typeof deleteTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksCancelRouteHandler: RouteHandler<typeof postTasksCancelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTaskUidRouteHandler: RouteHandler<typeof getTasksTaskUidRoute> = async (c) => {
  throw new Error('Not implemented')
}
