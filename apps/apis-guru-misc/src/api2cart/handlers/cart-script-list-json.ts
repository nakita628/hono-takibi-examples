import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartScriptListJsonRoute } from '../routes'

export const getCartScriptListJsonRouteHandler: RouteHandler<
  typeof getCartScriptListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
