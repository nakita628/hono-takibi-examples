import type { RouteHandler } from '@hono/zod-openapi'
import type { patchGlobalSettingsRoute } from '../routes'

export const patchGlobalSettingsRouteHandler: RouteHandler<
  typeof patchGlobalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
