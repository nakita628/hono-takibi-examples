import type { RouteHandler } from '@hono/zod-openapi'
import type { getSettingsChangesRoute } from '../routes'

export const getSettingsChangesRouteHandler: RouteHandler<typeof getSettingsChangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
