import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionPutLifecycleHookRoute, postActionPutLifecycleHookRoute } from '../routes'

export const getActionPutLifecycleHookRouteHandler: RouteHandler<
  typeof getActionPutLifecycleHookRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionPutLifecycleHookRouteHandler: RouteHandler<
  typeof postActionPutLifecycleHookRoute
> = async (c) => {
  throw new Error('Not implemented')
}
