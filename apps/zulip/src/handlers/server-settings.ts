import type { RouteHandler } from '@hono/zod-openapi'
import type { getServerSettingsRoute } from '../routes'

export const getServerSettingsRouteHandler: RouteHandler<typeof getServerSettingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
