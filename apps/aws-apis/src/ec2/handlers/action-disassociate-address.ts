import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateAddressRoute,
  postActionDisassociateAddressRoute,
} from '../routes'

export const getActionDisassociateAddressRouteHandler: RouteHandler<
  typeof getActionDisassociateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateAddressRouteHandler: RouteHandler<
  typeof postActionDisassociateAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
