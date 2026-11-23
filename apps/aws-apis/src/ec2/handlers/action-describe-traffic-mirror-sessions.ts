import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTrafficMirrorSessionsRoute,
  postActionDescribeTrafficMirrorSessionsRoute,
} from '../routes'

export const getActionDescribeTrafficMirrorSessionsRouteHandler: RouteHandler<
  typeof getActionDescribeTrafficMirrorSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTrafficMirrorSessionsRouteHandler: RouteHandler<
  typeof postActionDescribeTrafficMirrorSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
