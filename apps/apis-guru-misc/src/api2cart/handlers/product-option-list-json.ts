import type { RouteHandler } from '@hono/zod-openapi'
import type { getProductOptionListJsonRoute } from '../routes'

export const getProductOptionListJsonRouteHandler: RouteHandler<
  typeof getProductOptionListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
