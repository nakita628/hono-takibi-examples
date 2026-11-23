import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartGiftcardListJsonRoute } from '../routes'

export const getCartGiftcardListJsonRouteHandler: RouteHandler<
  typeof getCartGiftcardListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
