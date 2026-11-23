import type { RouteHandler } from '@hono/zod-openapi'
import type { getQueryExtensionRoute } from '../routes'

export const getQueryExtensionRouteHandler: RouteHandler<typeof getQueryExtensionRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
