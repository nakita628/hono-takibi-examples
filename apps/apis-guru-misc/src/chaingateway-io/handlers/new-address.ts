import type { RouteHandler } from '@hono/zod-openapi'
import type { postNewAddressRoute } from '../routes'

export const postNewAddressRouteHandler: RouteHandler<typeof postNewAddressRoute> = async (c) => {
  throw new Error('Not implemented')
}
