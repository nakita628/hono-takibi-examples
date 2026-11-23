import type { RouteHandler } from '@hono/zod-openapi'
import type { getWirelessBlocklistValuesRoute } from '../routes'

export const getWirelessBlocklistValuesRouteHandler: RouteHandler<
  typeof getWirelessBlocklistValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
