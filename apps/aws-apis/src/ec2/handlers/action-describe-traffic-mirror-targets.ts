import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTrafficMirrorTargetsRoute,
  postActionDescribeTrafficMirrorTargetsRoute,
} from '../routes'

export const getActionDescribeTrafficMirrorTargetsRouteHandler: RouteHandler<
  typeof getActionDescribeTrafficMirrorTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTrafficMirrorTargetsRouteHandler: RouteHandler<
  typeof postActionDescribeTrafficMirrorTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
