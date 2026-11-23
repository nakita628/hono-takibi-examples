import type { RouteHandler } from '@hono/zod-openapi'
import type { getSetiBlackBoxTestResultsRoute } from '../routes'

export const getSetiBlackBoxTestResultsRouteHandler: RouteHandler<
  typeof getSetiBlackBoxTestResultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
