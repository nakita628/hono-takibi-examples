import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyIpamRoute, postActionModifyIpamRoute } from '../routes'

export const getActionModifyIpamRouteHandler: RouteHandler<
  typeof getActionModifyIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyIpamRouteHandler: RouteHandler<
  typeof postActionModifyIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
