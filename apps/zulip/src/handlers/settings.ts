import type { RouteHandler } from '@hono/zod-openapi'
import type { patchSettingsRoute } from '../routes'

export const patchSettingsRouteHandler: RouteHandler<typeof patchSettingsRoute> = async (c) => {
  throw new Error('Not implemented')
}
