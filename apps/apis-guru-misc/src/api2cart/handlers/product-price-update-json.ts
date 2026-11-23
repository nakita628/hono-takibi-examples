import type { RouteHandler } from '@hono/zod-openapi'
import type { putProductPriceUpdateJsonRoute } from '../routes'

export const putProductPriceUpdateJsonRouteHandler: RouteHandler<
  typeof putProductPriceUpdateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
