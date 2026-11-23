import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttributeInfoJsonRoute } from '../routes'

export const getAttributeInfoJsonRouteHandler: RouteHandler<
  typeof getAttributeInfoJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
