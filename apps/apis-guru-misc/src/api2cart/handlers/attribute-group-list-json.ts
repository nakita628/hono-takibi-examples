import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttributeGroupListJsonRoute } from '../routes'

export const getAttributeGroupListJsonRouteHandler: RouteHandler<
  typeof getAttributeGroupListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
