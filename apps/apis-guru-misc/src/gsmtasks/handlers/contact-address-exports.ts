import type { RouteHandler } from '@hono/zod-openapi'
import type { getContactAddressExportsIndexRoute } from '../routes'

export const getContactAddressExportsIndexRouteHandler: RouteHandler<
  typeof getContactAddressExportsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
