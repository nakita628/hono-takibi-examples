import type { RouteHandler } from '@hono/zod-openapi'
import type { getTasksRoute, getTasksTaskIdRoute } from '../routes'

export const getTasksRouteHandler: RouteHandler<typeof getTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksTaskIdRouteHandler: RouteHandler<typeof getTasksTaskIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
