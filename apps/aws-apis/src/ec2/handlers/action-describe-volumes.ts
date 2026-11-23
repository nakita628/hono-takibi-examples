import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeVolumesRoute, postActionDescribeVolumesRoute } from '../routes'

export const getActionDescribeVolumesRouteHandler: RouteHandler<
  typeof getActionDescribeVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVolumesRouteHandler: RouteHandler<
  typeof postActionDescribeVolumesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
