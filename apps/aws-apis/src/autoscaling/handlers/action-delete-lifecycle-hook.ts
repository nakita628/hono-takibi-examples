import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteLifecycleHookRoute,
  postActionDeleteLifecycleHookRoute,
} from '../routes'

export const getActionDeleteLifecycleHookRouteHandler: RouteHandler<
  typeof getActionDeleteLifecycleHookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteLifecycleHookRouteHandler: RouteHandler<
  typeof postActionDeleteLifecycleHookRoute
> = async (c) => {
  throw new Error('Not implemented')
}
