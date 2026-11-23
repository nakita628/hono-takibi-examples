import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteDhcpOptionsRoute, postActionDeleteDhcpOptionsRoute } from '../routes'

export const getActionDeleteDhcpOptionsRouteHandler: RouteHandler<
  typeof getActionDeleteDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteDhcpOptionsRouteHandler: RouteHandler<
  typeof postActionDeleteDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
