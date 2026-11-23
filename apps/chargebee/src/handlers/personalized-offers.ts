import type { RouteHandler } from '@hono/zod-openapi'
import type { postPersonalizedOffersRoute } from '../routes'

export const postPersonalizedOffersRouteHandler: RouteHandler<
  typeof postPersonalizedOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
