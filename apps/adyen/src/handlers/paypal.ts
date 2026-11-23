import type { RouteHandler } from '@hono/zod-openapi'
import type { postPaypalUpdateOrderRoute } from '../routes'

export const postPaypalUpdateOrderRouteHandler: RouteHandler<
  typeof postPaypalUpdateOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
