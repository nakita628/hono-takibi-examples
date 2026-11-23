import type { RouteHandler } from '@hono/zod-openapi'
import type { getSongsIdInstantMixRoute } from '../routes'

export const getSongsIdInstantMixRouteHandler: RouteHandler<
  typeof getSongsIdInstantMixRoute
> = async (c) => {
  throw new Error('Not implemented')
}
