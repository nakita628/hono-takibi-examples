import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateRouteTableRoute, postActionCreateRouteTableRoute } from '../routes'

export const getActionCreateRouteTableRouteHandler: RouteHandler<
  typeof getActionCreateRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateRouteTableRouteHandler: RouteHandler<
  typeof postActionCreateRouteTableRoute
> = async (c) => {
  throw new Error('Not implemented')
}
