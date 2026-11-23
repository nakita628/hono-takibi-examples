import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateTestCardRangesRoute } from '../routes'

export const postCreateTestCardRangesRouteHandler: RouteHandler<
  typeof postCreateTestCardRangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
