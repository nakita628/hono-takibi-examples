import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCartScriptDeleteJsonRoute } from '../routes'

export const deleteCartScriptDeleteJsonRouteHandler: RouteHandler<
  typeof deleteCartScriptDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
