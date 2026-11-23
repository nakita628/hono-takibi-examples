import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductCountJsonRoute } from '../routes'

export const getProductCountJsonRouteHandler: RouteHandler<
  typeof getProductCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
