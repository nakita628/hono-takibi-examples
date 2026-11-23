import type { RouteHandler } from '@hono/zod-openapi'
import type { postProductTaxAddJsonRoute } from '../routes'

export const postProductTaxAddJsonRouteHandler: RouteHandler<
  typeof postProductTaxAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
