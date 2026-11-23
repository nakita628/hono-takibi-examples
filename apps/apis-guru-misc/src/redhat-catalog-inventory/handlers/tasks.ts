import type { RouteHandler } from '@hono/zod-openapi'
import type { getTasksIdRoute, getTasksRoute, patchTasksIdRoute } from '../routes'

export const getTasksRouteHandler: RouteHandler<typeof getTasksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTasksIdRouteHandler: RouteHandler<typeof getTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTasksIdRouteHandler: RouteHandler<typeof patchTasksIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
