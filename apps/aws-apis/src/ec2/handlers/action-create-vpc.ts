import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateVpcRoute, postActionCreateVpcRoute } from '../routes'

export const getActionCreateVpcRouteHandler: RouteHandler<typeof getActionCreateVpcRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postActionCreateVpcRouteHandler: RouteHandler<
  typeof postActionCreateVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}
