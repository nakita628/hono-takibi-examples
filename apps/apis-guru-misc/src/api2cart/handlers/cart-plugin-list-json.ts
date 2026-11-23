import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartPluginListJsonRoute } from '../routes'

export const getCartPluginListJsonRouteHandler: RouteHandler<
  typeof getCartPluginListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
