import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddressesRoute } from '../routes'

export const getAddressesRouteHandler: RouteHandler<typeof getAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}
