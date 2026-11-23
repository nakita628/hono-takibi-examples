import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeLifecycleHookTypesRoute,
  postActionDescribeLifecycleHookTypesRoute,
} from '../routes'

export const getActionDescribeLifecycleHookTypesRouteHandler: RouteHandler<
  typeof getActionDescribeLifecycleHookTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeLifecycleHookTypesRouteHandler: RouteHandler<
  typeof postActionDescribeLifecycleHookTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
