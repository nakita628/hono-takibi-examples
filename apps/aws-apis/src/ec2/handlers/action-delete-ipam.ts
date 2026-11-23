import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteIpamRoute, postActionDeleteIpamRoute } from '../routes'

export const getActionDeleteIpamRouteHandler: RouteHandler<
  typeof getActionDeleteIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteIpamRouteHandler: RouteHandler<
  typeof postActionDeleteIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
