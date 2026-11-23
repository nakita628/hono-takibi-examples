import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartListJsonRoute } from '../routes'

export const getCartListJsonRouteHandler: RouteHandler<typeof getCartListJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
