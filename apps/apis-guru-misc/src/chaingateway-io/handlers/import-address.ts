import type { RouteHandler } from '@hono/zod-openapi'
import type { postImportAddressRoute } from '../routes'

export const postImportAddressRouteHandler: RouteHandler<typeof postImportAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
