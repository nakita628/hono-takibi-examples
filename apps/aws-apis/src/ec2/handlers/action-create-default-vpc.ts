import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionCreateDefaultVpcRoute, postActionCreateDefaultVpcRoute } from '../routes'

export const getActionCreateDefaultVpcRouteHandler: RouteHandler<
  typeof getActionCreateDefaultVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDefaultVpcRouteHandler: RouteHandler<
  typeof postActionCreateDefaultVpcRoute
> = async (c) => {
  throw new Error('Not implemented')
}
