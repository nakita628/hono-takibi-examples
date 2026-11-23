import type { RouteHandler } from '@hono/zod-openapi'
import type { postExportAddressRoute } from '../routes'

export const postExportAddressRouteHandler: RouteHandler<typeof postExportAddressRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
