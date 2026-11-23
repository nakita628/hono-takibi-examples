import type { RouteHandler } from '@hono/zod-openapi'
import type { patchAliasesIdProtectionBypassRoute } from '../routes'

export const patchAliasesIdProtectionBypassRouteHandler: RouteHandler<
  typeof patchAliasesIdProtectionBypassRoute
> = async (c) => {
  throw new Error('Not implemented')
}
