import type { RouteHandler } from '@hono/zod-openapi'
import type { postUntagResourceArnRoute } from '../routes'

export const postUntagResourceArnRouteHandler: RouteHandler<
  typeof postUntagResourceArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
