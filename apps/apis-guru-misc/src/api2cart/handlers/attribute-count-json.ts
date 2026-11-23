import type { RouteHandler } from '@hono/zod-openapi'
import type { getAttributeCountJsonRoute } from '../routes'

export const getAttributeCountJsonRouteHandler: RouteHandler<
  typeof getAttributeCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
