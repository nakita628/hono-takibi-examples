import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartMethodsJsonRoute } from '../routes'

export const getCartMethodsJsonRouteHandler: RouteHandler<typeof getCartMethodsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
