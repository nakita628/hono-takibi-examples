import type { RouteHandler } from '@hono/zod-openapi'
import type { getMethodsRoute, postMethodsReloadRoute } from '../routes'

export const getMethodsRouteHandler: RouteHandler<typeof getMethodsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMethodsReloadRouteHandler: RouteHandler<typeof postMethodsReloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
