import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetConsoleOutputRoute, postActionGetConsoleOutputRoute } from '../routes'

export const getActionGetConsoleOutputRouteHandler: RouteHandler<
  typeof getActionGetConsoleOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetConsoleOutputRouteHandler: RouteHandler<
  typeof postActionGetConsoleOutputRoute
> = async (c) => {
  throw new Error('Not implemented')
}
