import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserMaxResultsRoute } from '../routes'

export const getUserMaxResultsRouteHandler: RouteHandler<typeof getUserMaxResultsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
