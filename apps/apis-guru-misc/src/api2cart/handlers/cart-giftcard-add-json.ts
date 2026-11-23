import type { RouteHandler } from '@hono/zod-openapi'
import type { postCartGiftcardAddJsonRoute } from '../routes'

export const postCartGiftcardAddJsonRouteHandler: RouteHandler<
  typeof postCartGiftcardAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
