import type { RouteHandler } from '@hono/zod-openapi'
import type { getSongsItemIdInstantMixRoute } from '../routes'

export const getSongsItemIdInstantMixRouteHandler: RouteHandler<
  typeof getSongsItemIdInstantMixRoute
> = async (c) => {
  throw new Error('Not implemented')
}
