import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateIpamRoute, postActionCreateIpamRoute } from '../routes'

export const getActionCreateIpamRouteHandler: RouteHandler<
  typeof getActionCreateIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateIpamRouteHandler: RouteHandler<
  typeof postActionCreateIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
