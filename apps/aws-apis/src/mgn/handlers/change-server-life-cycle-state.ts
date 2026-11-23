import type { RouteHandler } from '@hono/zod-openapi'
import type { postChangeServerLifeCycleStateRoute } from '../routes'

export const postChangeServerLifeCycleStateRouteHandler: RouteHandler<
  typeof postChangeServerLifeCycleStateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
