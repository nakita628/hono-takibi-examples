import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartGiftcardCountJsonRoute } from '../routes'

export const getCartGiftcardCountJsonRouteHandler: RouteHandler<
  typeof getCartGiftcardCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
