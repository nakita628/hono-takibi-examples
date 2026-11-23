import type { RouteHandler } from '@hono/zod-openapi'
import type { postLifecycleManyToOneRoute, postLifecycleOneToOneRoute } from '../routes'

export const postLifecycleManyToOneRouteHandler: RouteHandler<
  typeof postLifecycleManyToOneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLifecycleOneToOneRouteHandler: RouteHandler<
  typeof postLifecycleOneToOneRoute
> = async (c) => {
  throw new Error('Not implemented')
}
