import type { RouteHandler } from '@hono/zod-openapi'
import type { getProgrammeDetailsRoute } from '../routes'

export const getProgrammeDetailsRouteHandler: RouteHandler<
  typeof getProgrammeDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
