import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetAddressAttributeRoute,
  postActionResetAddressAttributeRoute,
} from '../routes'

export const getActionResetAddressAttributeRouteHandler: RouteHandler<
  typeof getActionResetAddressAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetAddressAttributeRouteHandler: RouteHandler<
  typeof postActionResetAddressAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
