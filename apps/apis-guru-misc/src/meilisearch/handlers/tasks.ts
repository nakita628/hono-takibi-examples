import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTasksRoute,
  getTasks0Route,
  getTasksRoute,
  postTasksCancelRoute,
} from '../routes'

export const deleteTasksRouteHandler: RouteHandler<typeof deleteTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksRouteHandler: RouteHandler<typeof getTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasks0RouteHandler: RouteHandler<typeof getTasks0Route> = async (c) => {
  throw new Error('Not implemented')
}

export const postTasksCancelRouteHandler: RouteHandler<typeof postTasksCancelRoute> = async (c) => {
  throw new Error('Not implemented')
}
