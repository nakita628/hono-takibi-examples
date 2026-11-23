import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAllocateHostsRoute, postActionAllocateHostsRoute } from '../routes'

export const getActionAllocateHostsRouteHandler: RouteHandler<
  typeof getActionAllocateHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAllocateHostsRouteHandler: RouteHandler<
  typeof postActionAllocateHostsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
