import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDeleteVpcRoute, postActionDeleteVpcRoute } from '../routes'

export const getActionDeleteVpcRouteHandler: RouteHandler<typeof getActionDeleteVpcRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVpcRouteHandler: RouteHandler<
  typeof postActionDeleteVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}
