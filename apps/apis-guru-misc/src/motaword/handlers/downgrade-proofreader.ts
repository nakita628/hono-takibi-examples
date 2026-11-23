import type { RouteHandler } from '@hono/zod-openapi'
import type { postDowngradeProofreaderRoute } from '../routes'

export const postDowngradeProofreaderRouteHandler: RouteHandler<
  typeof postDowngradeProofreaderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
