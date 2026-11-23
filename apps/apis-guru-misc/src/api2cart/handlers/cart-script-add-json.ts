import type { RouteHandler } from '@hono/zod-openapi'
import type { postCartScriptAddJsonRoute } from '../routes'

export const postCartScriptAddJsonRouteHandler: RouteHandler<
  typeof postCartScriptAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
