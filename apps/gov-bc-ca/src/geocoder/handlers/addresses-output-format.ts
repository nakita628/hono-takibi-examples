import type { RouteHandler } from '@hono/zod-openapi'
import type { getAddressesOutputFormatRoute } from '../routes'

export const getAddressesOutputFormatRouteHandler: RouteHandler<
  typeof getAddressesOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
