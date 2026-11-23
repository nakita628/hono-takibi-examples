import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCompleteLifecycleActionRoute,
  postActionCompleteLifecycleActionRoute,
} from '../routes'

export const getActionCompleteLifecycleActionRouteHandler: RouteHandler<
  typeof getActionCompleteLifecycleActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCompleteLifecycleActionRouteHandler: RouteHandler<
  typeof postActionCompleteLifecycleActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
