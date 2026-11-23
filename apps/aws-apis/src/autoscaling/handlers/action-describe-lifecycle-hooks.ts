import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLifecycleHooksRoute,
  postActionDescribeLifecycleHooksRoute,
} from '../routes'

export const getActionDescribeLifecycleHooksRouteHandler: RouteHandler<
  typeof getActionDescribeLifecycleHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLifecycleHooksRouteHandler: RouteHandler<
  typeof postActionDescribeLifecycleHooksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
