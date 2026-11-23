import type { RouteHandler } from '@hono/zod-openapi'
import type { postBasketItemAddJsonRoute } from '../routes'

export const postBasketItemAddJsonRouteHandler: RouteHandler<
  typeof postBasketItemAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
