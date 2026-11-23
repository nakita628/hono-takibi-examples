import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteVerifiedEmailAddressRoute,
  postActionDeleteVerifiedEmailAddressRoute,
} from '../routes'

export const getActionDeleteVerifiedEmailAddressRouteHandler: RouteHandler<
  typeof getActionDeleteVerifiedEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteVerifiedEmailAddressRouteHandler: RouteHandler<
  typeof postActionDeleteVerifiedEmailAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}
