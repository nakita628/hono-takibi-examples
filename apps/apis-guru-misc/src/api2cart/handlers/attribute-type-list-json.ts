import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttributeTypeListJsonRoute } from '../routes'

export const getAttributeTypeListJsonRouteHandler: RouteHandler<
  typeof getAttributeTypeListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
