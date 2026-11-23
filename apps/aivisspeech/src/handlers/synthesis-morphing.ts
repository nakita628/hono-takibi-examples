import type { RouteHandler } from '@hono/zod-openapi'
import type { postSynthesisMorphingRoute } from '../routes'

export const postSynthesisMorphingRouteHandler: RouteHandler<
  typeof postSynthesisMorphingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
