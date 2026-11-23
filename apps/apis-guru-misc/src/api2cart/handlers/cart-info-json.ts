import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartInfoJsonRoute } from '../routes'

export const getCartInfoJsonRouteHandler: RouteHandler<typeof getCartInfoJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}
