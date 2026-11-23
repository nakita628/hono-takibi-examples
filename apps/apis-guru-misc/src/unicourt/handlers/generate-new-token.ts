import type { RouteHandler } from '@hono/zod-openapi'
import type { postGenerateNewTokenRoute } from '../routes'

export const postGenerateNewTokenRouteHandler: RouteHandler<
  typeof postGenerateNewTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
