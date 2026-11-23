import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteRouteTableRoute, postActionDeleteRouteTableRoute } from '../routes'

export const getActionDeleteRouteTableRouteHandler: RouteHandler<
  typeof getActionDeleteRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteRouteTableRouteHandler: RouteHandler<
  typeof postActionDeleteRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
