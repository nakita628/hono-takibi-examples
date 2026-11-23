import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttributeListJsonRoute } from '../routes'

export const getAttributeListJsonRouteHandler: RouteHandler<
  typeof getAttributeListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
