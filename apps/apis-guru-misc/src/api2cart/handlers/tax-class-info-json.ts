import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaxClassInfoJsonRoute } from '../routes'

export const getTaxClassInfoJsonRouteHandler: RouteHandler<
  typeof getTaxClassInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
