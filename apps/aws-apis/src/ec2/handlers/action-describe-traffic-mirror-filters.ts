import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTrafficMirrorFiltersRoute,
  postActionDescribeTrafficMirrorFiltersRoute,
} from '../routes'

export const getActionDescribeTrafficMirrorFiltersRouteHandler: RouteHandler<
  typeof getActionDescribeTrafficMirrorFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTrafficMirrorFiltersRouteHandler: RouteHandler<
  typeof postActionDescribeTrafficMirrorFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
