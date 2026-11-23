import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetStoresUnderAccountRoute } from '../routes'

export const postGetStoresUnderAccountRouteHandler: RouteHandler<
  typeof postGetStoresUnderAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
