import type { RouteHandler } from '@hono/zod-openapi'
import type { getTelegrafPluginsRoute } from '../routes'

export const getTelegrafPluginsRouteHandler: RouteHandler<typeof getTelegrafPluginsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
