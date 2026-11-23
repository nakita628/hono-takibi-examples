import type { RouteHandler } from '@hono/zod-openapi'
import type { getAccountCartListJsonRoute } from '../routes'

export const getAccountCartListJsonRouteHandler: RouteHandler<
  typeof getAccountCartListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
