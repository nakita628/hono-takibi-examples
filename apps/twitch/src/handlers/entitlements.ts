import type { RouteHandler } from '@hono/zod-openapi'
import type { getEntitlementsDropsRoute, patchEntitlementsDropsRoute } from '../routes'

export const getEntitlementsDropsRouteHandler: RouteHandler<
  typeof getEntitlementsDropsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchEntitlementsDropsRouteHandler: RouteHandler<
  typeof patchEntitlementsDropsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
