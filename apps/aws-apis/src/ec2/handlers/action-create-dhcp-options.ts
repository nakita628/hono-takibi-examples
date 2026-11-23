import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDhcpOptionsRoute, postActionCreateDhcpOptionsRoute } from '../routes'

export const getActionCreateDhcpOptionsRouteHandler: RouteHandler<
  typeof getActionCreateDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDhcpOptionsRouteHandler: RouteHandler<
  typeof postActionCreateDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
