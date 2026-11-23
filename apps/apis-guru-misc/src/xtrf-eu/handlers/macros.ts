import type { RouteHandler } from '@hono/zod-openapi'
import type { postMacrosMacroIdRunRoute } from '../routes'

export const postMacrosMacroIdRunRouteHandler: RouteHandler<
  typeof postMacrosMacroIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
